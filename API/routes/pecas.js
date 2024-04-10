const router = require('express').Router();

// Importa as funções do controlador relacionadas às peças
const { registerPeca, getAllPecas, getPecaById } = require('../controllers/controllerPecas');

router
    // Rota para cadastrar uma nova peça
    .post("/cadastroPeca", async(req, res) => {
        try {
            // Extrai os dados do corpo da requisição
            const fk_idOsMedicao = req.body.fk_idOsMedicao;
            const fk_idCliente = req.body.fk_idCliente;
            const nome = req.body.nome;
            const material = req.body.material;
            const nDesehno = req.body.nDesehno;

            // Chama a função para cadastrar uma nova peça
            let resultCad = await registerPeca(
                fk_idOsMedicao,
                fk_idCliente,
                nome,
                material,
                nDesehno
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

module.exports = router;