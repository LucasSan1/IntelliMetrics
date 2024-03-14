const router = require('express').Router();
const { registerInstrumento, getAllInstrumentos, deleteInstrumento, updateInstrumento } = require("../controllers/controllerInstrumentos");

router.post("/cadastroInstrumentos", async(req, res) => {
    try {
        const fk_idCliente = req.body.fk_idCliente;
        const fk_idOsCalibracao = req.body.fk_idOsCalibracao;
        const fk_idTipo = req.body.fk_idTipo;
        const nSerie = req.body.nSerie;
        const fabricante = req.body.fabricante;
        const resolucao = req.body.resolucao;
        const unidadeMedida = req.body.unidadeMedida;
        const faixaNominal = req.body.faixaNominal;

        let resultCad = await registerInstrumento(
            fk_idCliente,
            fk_idOsCalibracao,
            fk_idTipo,
            nSerie,
            fabricante,
            resolucao,
            unidadeMedida,
            faixaNominal
        )

    } catch (error) {
        console.log(error);
    }
})

router.put("/instrumentos/:id", async(req, res) => {
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
        )

        switch(resultUpdate){
            case 200:
                res.status(200).json('Instrumento atualizado')
                break;
            case 400:
                res.status(400).json('Erro ao atualizar instrumento')
                break;
            default:
                res.status(500).json('Erro interno do servidor')
        }

    } catch (error) {
        console.log(error);
    }
})


router.get("/instrumentos", async (req, res) => {
    try {
        const instrumentos = await getAllInstrumentos();
        res.status(200).json(instrumentos);

    } catch (error) {
        console.log(error);
        res.status(500).json("Erro interno do servidor");
    }
})

router.delete("/instrumentos/:id", async(req, res) => {
    const id_instrumento = req.params.id;
    try {
        const deletar = await deleteInstrumento(id_instrumento);

    } catch (error) {
        console.log(error);
        res.status(500).json("Erro interno do servidor");
    }
})


module.exports = router; 