const router = require('express').Router();

const { registerReport, getAllReports, getReportById  } = require("../controllers/controllerRelatorioCali")

router

    .post("/registerReport", async(req, res) => {
        try{
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
            )

            switch(register){
                case 200:
                    res.status(200).json("Relatorio cadastrado com sucesso")
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar relatorio")
                    break;
                case 409:
                    res.status(409).json("ID ja cadastrada")
                    break;
                default:
                    res.status(500).json("Erro interno do servidor")
            }


        } catch(error) {
            console.log(error)
        }
    })

    .get("/allReports", async(req,res) => {
        try {
            const reports = await getAllReports();
            res.status(200).json(reports);
        } catch (error) {
            console.log(error);
            res.status(500).json('Erro interno do servidor');
        }
    })

    .get("/report/:id", async(req, res) => {
        const id_report = req.params;

        try {
            const report = await getReportById(id_report);
            res.status(200).json(report);
        } catch (error) {
            console.log(error);
            res.status(500).json('Erro interno do servidor');
        }
    })

    module.exports = router