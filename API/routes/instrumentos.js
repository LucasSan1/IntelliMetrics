const router = require('express').Router();
const { registerInstrumento, getAllInstrumentos, updateInstrumento } = require("../controllers/controllerInstrumentos");

router
    // Rota para cadastrar um novo instrumento
    .post("/cadastroInstrumentos", async(req, res) => {
        try {
            // Extrai os dados do corpo da requisição
            const fk_idCliente = req.body.fk_idCliente;
            const fk_idOsCalibracao = req.body.fk_idOsCalibracao;
            const fk_idTipo = req.body.fk_idTipo;
            const nSerie = req.body.nSerie;
            const fabricante = req.body.fabricante;
            const resolucao = req.body.resolucao;
            const unidadeMedida = req.body.unidadeMedida;
            const faixaNominal = req.body.faixaNominal;

            // Chama a função para registrar um novo instrumento
            let resultCad = await registerInstrumento(
                fk_idCliente,
                fk_idOsCalibracao,
                fk_idTipo,
                nSerie,
                fabricante,
                resolucao,
                unidadeMedida,
                faixaNominal
            );

            // Verifica o resultado do cadastro e retorna a resposta adequada
            switch (resultCad) { 
                case 200:
                    res.status(200).json("Instrumento cadastrado");
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar instrumento");
                    break;
                default:
                    res.status(500).json("Erro interno do servidor");
            }

        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })

    // Rota para atualizar um instrumento pelo seu ID
    .put("/instrumentos/:id", async(req, res) => {
        try {
            const id_instrumento = req.params.id;
            const fk_idCliente = req.body.fk_idCliente;
            const fk_idOsCalibracao = req.body.fk_idOsCalibracao;
            const fk_idTipo = req.body.fk_idTipo;
            const nSerie = req.body.nSerie;
            const fabricante = req.body.fabricante;
            const resolucao = req.body.resolucao;
            const unidadeMedida = req.body.unidadeMedida;
            const faixaNominal = req.body.faixaNominal;

            // Chama a função para atualizar um instrumento pelo ID
            let resultUpdate = await updateInstrumento(
                id_instrumento,
                fk_idCliente,
                fk_idOsCalibracao,
                fk_idTipo,
                nSerie,
                fabricante,
                resolucao,
                unidadeMedida,
                faixaNominal
            );

            // Verifica o resultado da atualização e retorna a resposta adequada
            switch(resultUpdate){
                case 200:
                    res.status(200).json('Instrumento atualizado');
                    break;
                case 400:
                    res.status(400).json('Erro ao atualizar instrumento');
                    break;
                default:
                    res.status(500).json('Erro interno do servidor');
            }

        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })

    // Rota para obter todos os instrumentos
    .get("/instrumentos", async (req, res) => {
        try {
            // Chama a função para obter todos os instrumentos
            const instrumentos = await getAllInstrumentos();
            res.status(200).json(instrumentos);

        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json("Erro interno do servidor");
        }
    })

module.exports = router; 
