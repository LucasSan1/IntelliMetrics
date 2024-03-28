const router = require("express").Router();

const { calculoPlaneza } = require("../util/calculosMicrometro");

router

    .post("/planezaMicrometro", async (req, res) => {
        try {
            const CMovel = req.body.CMovel;
            const CFixo = req.body.CFixo;

            let calcular = await calculoPlaneza(CMovel, CFixo);

            if (calcular) {
            res.status(200).json(calcular);
            } else {
            res.status(500).json("Erro interno do servidor");
            }
        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
