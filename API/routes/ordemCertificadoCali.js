const router = require('express').Router();

// Importa as funções do controlador relacionadas aos certificados de calibração
const { registerOrder, getCertificateOrders, getOrdersById } = require("../controllers/controllerCertificadoCali");

router
    // Rota para registrar um novo certificado de calibração
    .post("/registerCertificate", async(req, res) => {
        try{
            // Extrai os dados do corpo da requisição
            const fk_idCliente = req.body.fk_idCliente; 
            const fk_iUsuario = req.body.fk_iUsuario;
            const titulo = req.body.titulo; 
            const descricao = req.body.descricao; 
            const dataInicio = req.body.dataInicio; 
            const dataTermino = req.body.dataTermino; 
            const contratante = req.body.contratante; 
            const telefone = req.body.telefone; 
            const email = req.body.email; 

            // Chama a função para registrar um novo certificado de calibração
            let register = await registerOrder(
                fk_idCliente,
                fk_iUsuario,
                titulo,
                descricao,
                dataInicio,
                dataTermino,
                contratante,
                telefone,
                email
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
    .get("/allCertificatesOrders", async(req, res) => {
        try {
            // Chama a função para obter todos os certificados de calibração
            const users = await getCertificateOrders();
            res.status(200).json(users);
        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

    // Rota para obter um certificado de calibração pelo seu ID
    .get("/certificateOrder/:id", async(req, res) => {
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

module.exports = router;
