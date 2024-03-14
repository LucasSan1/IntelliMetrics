const router = require('express').Router();

const { registerPeca, getAllPecas } = require('../controllers/controllerPecas');

router.post("/cadastroPeca", async(req, res) => {
    try {
        const fk_idOsMedicao = req.body.fk_idOsMedicao;
        const fk_idCliente = req.body.fk_idCliente;
        const nome = req.body.nome;
        const material = req.body.material;
        const nDesehno = req.body.nDesehno;

        let resultCad = await registerPeca(
            fk_idOsMedicao,
            fk_idCliente,
            nome,
            material,
            nDesehno
        );

        switch (resultCad) { 
            case 200:
                res.status(200).json("Peça cadastrada")
                break;
            case 400:
                res.status(400).json("Erro ao cadastrar peça")
                break;
            default:
                res.status(500).json("Erro interno do servidor")
        }

    } catch (error) {
        console.log(error);
    }
})


router.get("/pecas", async(req, res) => {
    try {
        const pecas = await getAllPecas();
        res.status(200).json(pecas);

    } catch (error) {
        console.log(error);
        res.status(500).json("Erro interno do servidor");
    }
})

module.exports = router;