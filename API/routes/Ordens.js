const router = require('express').Router();

// Importa as funções do controlador relacionadas aos certificados de calibração
const { registerOrder, getCertificateOrders, getOrdersById, updateOrders, ordemConcluida } = require("../controllers/controllerOrdens");
const validacaoOrdens = require('../validation/ordensVal');

router
    // Rota para registrar um novo certificado de calibração
    .post("/registerOrders", async(req, res) => {
        try{
            // Extrai os dados do corpo da requisição
            const {titulo, tipo, descricao, dataInicio, dataTermino, contratante, email, telefone, status} = req.body;

            const ordensVal = {titulo, tipo, descricao, dataInicio, dataTermino, contratante, email, telefone, status}

            const ordensValidadas = validacaoOrdens.parse(ordensVal)
            console.log(ordensValidadas.titulo)

            // Chama a função para registrar um novo certificado de calibração
            let register = await registerOrder(
                fk_idCliente,
                fk_idUsuario,
                ordensValidadas.titulo,
                ordensValidadas.tipo,
                ordensValidadas.descricao,
                ordensValidadas.dataInicio,
                ordensValidadas.dataTermino,
                ordensValidadas.contratante,
                ordensValidadas.email,
                ordensValidadas.telefone,
                ordensValidadas.status
            );

            // Verifica o resultado do registro e retorna a resposta adequada
            switch(register){
                case 200:
                    res.status(200).json("Ordem de calibração cadastrada com sucesso");
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar ordem de calibração");
                    break;
                case 409:
                    res.status(409).json("ID ja cadastrada");
                    break;
                default:
                    res.status(500).json("Erro interno do servidor");
            }

        } catch(error){
            console.log(error); // Registra o erro no console
        }
    })

    // Rota para obter todos os certificados de calibração
    .get("/getAllOrders", async(req, res) => {
        try {
            // Chama a função para obter todos os certificados de calibração
            const ordens = await getCertificateOrders();
            res.status(200).json(users);
        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

    // Rota para obter um certificado de calibração pelo seu ID
    .get("/orders/:id", async(req, res) => {
        const id_certificate = req.params.id;

        try {
            // Chama a função para obter um certificado de calibração pelo ID
            const report = await getOrdersById(id_certificate);
            res.status(200).json(report);
        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

    .put("/updateOrders/:id", async(req, res) =>{
        try {
            const id_certificate = req.params.id;
            const {fk_idCliente, fk_idUsuario, titulo, tipo, descricao, dataInicio, dataTermino, contratante, email, telefone} = req.body;

            let resultUpdate = await updateOrders(
                id_certificate,
                fk_idCliente,
                fk_idUsuario,
                titulo,
                tipo,
                descricao,
                dataInicio,
                dataTermino,
                contratante,
                email,
                telefone
            )

            if(resultUpdate){
                res.status(200).json("Ordem atualizada");
            } else{
                res.status(500).json("Erro interno do servidor");
            } 
        } catch (error) {
            console.log(error);
        }
    })

<<<<<<< HEAD
<<<<<<< HEAD
    .put("completedOrders/:id", async(req, res) => {
=======
    .put("orders/completedOrders/:id", async(req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
=======
    .put("/orders/completedOrders/:id", async(req, res) => {
>>>>>>> baf23f4ebeb8011a805c7a499a08d3184b01eff4
        const id_certificate = req.params.id;
        try {
            const ordemConc = await ordemConcluida(id_certificate);
            res.status(200).json("Ordem marcada como concluida");
        } catch (error) {
            console.log(error);
            res.status(500).json("Erro interno no servidor");
        }
    })

module.exports = router;
