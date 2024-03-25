const router = require('express').Router();

const { calculoTendenciaExterna } = require("../util/calculosPaquimetro")

router

    .post("/dadosPaquimetro", async(req, res) => {
        try{

            const arrayDeDados = req.body.dados;
            const arrayDeDados2 = req.body.dados2;
            const arrayDeDados3 = req.body.dados3;
            const arrayDeDados4 = req.body.dados4;
            const arrayDeDados5 = req.body.dados5;
            const arrayDeDados6 = req.body.dados6;
            const arrayDeDados7 = req.body.dados7;

            let calcular = await calculoTendenciaExterna(
                arrayDeDados,
                arrayDeDados2,
                arrayDeDados3,
                arrayDeDados4,
                arrayDeDados5,
                arrayDeDados6,
                arrayDeDados7
            )

            if(calcular){
                res.status(200).json(calcular)  
            } else{
                res.status(500).json("Erro interno do servidor")
            }

        } catch(error) {
            console.log(error)
        }
    })

module.exports = router;