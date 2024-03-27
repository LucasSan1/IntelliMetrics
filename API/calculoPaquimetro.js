const router = require('express').Router();

const { calculoTendenciaExterna } = require("../util/calculosPaquimetro")

router

    .post("/dadosPaquimetro", async(req, res) => {
        try{

            const arrayPrimeiraLinha = req.body.dados;
            const arraySegundaLinha = req.body.dados2;
            const arrayTerceiraLinha = req.body.dados3;
            const arrayQuartaLinha = req.body.dados4;
            const arrayQuintaLinha = req.body.dados5;
            const arraySextaLinha = req.body.dados6;
            const arraySetimaLinha = req.body.dados7;

            let calcular = await calculoTendenciaExterna(
                arrayPrimeiraLinha,
                arraySegundaLinha,
                arrayTerceiraLinha,
                arrayQuartaLinha,
                arrayQuintaLinha,
                arraySextaLinha,
                arraySetimaLinha
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