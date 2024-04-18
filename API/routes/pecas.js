const router = require('express').Router();

// Importa as funções do controlador relacionadas às peças

const { registerPeca, getAllPecas, getPecaById } = require('../controllers/controllerPecas');
const validacaoPecas = require('../validation/pecasVal');

router
    // Rota para cadastrar uma nova peça
    .post("/cadastroPeca", async(req, res) => {
        try {
            // Extrai os dados do corpo da requisição
            const {fk_idOsMedicao, fk_idCliente, nome, material, nDesenho, descricao} = req.body;

            const valPeca = {
                fk_idOsMedicao,
                fk_idCliente,
                nome,
                material,
                nDesenho,
                descricao
            }

            const pecaValidada = validacaoPecas.parse(valPeca);

            // Chama a função para cadastrar uma nova peça
            let resultCad = await registerPeca(
                fk_idOsMedicao,
                fk_idCliente,
                nome,
                material,
                nDesenho
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

    // Rota para obter todas as peças
    .get("/pecas", async(req, res) => {
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
    .get("/pecas/:id", async(req, res) => {
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


    // atualizar cadastro peça
    .put("/pecasUpdate/:id"), async(req, res) =>{
        const idPeca = req.params.id;

        try{
            const update = await updatePeca(idPeca);
            res.status(200).json(update);
        }catch(error){
            console.log(error);
            res.status(500).json("error no servidor");
        }
    }

    

module.exports = router;
