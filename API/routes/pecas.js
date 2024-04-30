const router = require('express').Router();
const { registerPeca, getAllPecas, getPecaById, updatePeca } = require('../controllers/controllerPecas');
const validacaoPecas = require('../validation/pecasVal');

router
    // Rota para cadastrar uma nova peça
<<<<<<< HEAD
    .post("/partRegistration", async(req, res) => {
=======
    .post("/registerPieces", async(req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
        try {
            // Extrai os dados do corpo da requisição
            const {fk_idOs, fk_idCliente, nome, material, nDesenho, descricao} = req.body;

            const valPeca = {
                fk_idOs,
                fk_idCliente,
                nome,
                material,
                nDesenho,
                descricao
            }

            const pecaValidada = validacaoPecas.parse(valPeca);

            // Chama a função para cadastrar uma nova peça
            let resultCad = await registerPeca(
                pecaValidada.fk_idOs,
                pecaValidada.fk_idCliente,
                pecaValidada.nome,
                pecaValidada.material,
                pecaValidada.nDesenho,
                pecaValidada.descricao
            );

            // Verifica o resultado do cadastro e retorna a resposta adequada
            switch (resultCad) { 
                case 200:
                    res.status(200).json("Peça cadastrada");
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar peça");
                    break;
                default:
                    res.status(500).json("Erro interno do servidor");
            }

        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })

        // atualizar cadastro peça
    .put("/updatePieces/:id", async(req, res) => {
        try {
            const idPeca = req.params.id;
            const {fk_idOs, fk_idCliente, nome, material, nDesenho, descricao} = req.body;

            const valPeca = {
                fk_idOs,
                fk_idCliente,
                nome,
                material,
                nDesenho,
                descricao
            }

            const pecaValidada = validacaoPecas.parse(valPeca);

            let resultUpdate = await updatePeca(
                idPeca,
                pecaValidada.fk_idOs,
                pecaValidada.fk_idCliente,
                pecaValidada.nome,
                pecaValidada.material,
                pecaValidada.nDesenho,
                pecaValidada.descricao
            )

            switch(resultUpdate){
                case 200:
                    res.status(200).json('Peça atualizada');
                    break;
                case 400:
                    res.status(400).json('Erro ao atualizar peça');
                    break;
                default:
                    res.status(500).json('Erro interno do servidor');
            }  
            
        } catch(error) {
            console.log(error);
            res.status(500).json("Erro interno no servidor");
        }
    })

    // Rota para obter todas as peças
<<<<<<< HEAD
    .get("/parts", async(req, res) => {
=======
    .get("/getAllPieces", async(req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
        try {
            // Chama a função para obter todas as peças
            const pecas = await getAllPecas();
            res.status(200).json(pecas);

        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json("Erro interno do servidor");
        }
    })

    // Rota para obter uma peça pelo seu ID
<<<<<<< HEAD
    .get("/parts/:id", async(req, res) => {
=======
    .get("/pieces/:id", async(req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
        const id_peca = req.params.id;

        try {
            // Chama a função para obter uma peça pelo ID
            const peca = await getPecaById(id_peca);
            res.status(200).json(peca);
        } catch(error) {
            console.log(error); // Registra o erro no console
            res.status(500).json("Erro interno do servidor");
        }
    })


<<<<<<< HEAD
    // atualizar cadastro peça
    .put("/partUpdate/:id"), async(req, res) =>{
        const idPeca = req.params.id;

        try{
            const update = await updatePeca(idPeca);
            res.status(200).json(update);
        }catch(error){
            console.log(error);
            res.status(500).json("error no servidor");
        }
    }

    

=======
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
module.exports = router;
