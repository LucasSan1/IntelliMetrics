const router = require('express').Router();

// Importa as funções do controlador relacionadas aos relatórios de calibração
const { registerReport, getAllReports, getReportById  } = require("../controllers/controllerRelatorioCali")

router
    // Rota para registrar um novo relatório de calibração
    .post("/registerReport", async(req, res) => {
        try{
            // Extrai os dados do corpo da requisição
            const fk_idCliente = req.body.fk_idCliente; 
            const fk_idUsuario = req.body.fk_iUsuario;
            const titulo = req.body.titulo; 
            const codigoOrdem = req.body.codigoOrdem; 
            const reponsavel = req.body.responsavel; 
            const tipo = req.body.tipo; 
            const peca = req.body.peca;  
            const dataInicio = req.body.dataInicio; 
            const dataTermino = req.body.dataTermino; 
            const descricao = req.body.descricao;  

            // Chama a função para registrar um novo relatório de calibração
            let register = await registerReport(
                fk_idCliente,
                fk_idUsuario,
                titulo,
                codigoOrdem,
                reponsavel,
                tipo,
                peca,
                dataInicio,
                dataTermino,
                descricao
            );

            // Verifica o resultado do registro e retorna a resposta adequada
            switch(register){
                case 200:
                    res.status(200).json("Relatorio cadastrado com sucesso");
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar relatorio");
                    break;
                case 409:
                    res.status(409).json("ID ja cadastrada");
                    break;
                default:
                    res.status(500).json("Erro interno do servidor");
            }


        } catch(error) {
            console.log(error); // Registra o erro no console
        }
    })

    // Rota para obter todos os relatórios de calibração
    .get("/allReports", async(req,res) => {
        try {
            // Chama a função para obter todos os relatórios de calibração
            const reports = await getAllReports();
            res.status(200).json(reports);
        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

    // Rota para obter um relatório de calibração pelo seu ID
    .get("/report/:id", async(req, res) => {
        const id_report = req.params.id;

        try {
            // Chama a função para obter um relatório de calibração pelo ID
            const report = await getReportById(id_report);
            res.status(200).json(report);
        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

module.exports = router;
