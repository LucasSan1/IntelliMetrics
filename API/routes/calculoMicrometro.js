const router = require("express").Router();

// Importa as funções de cálculo da planicidade e paralelismo do micrômetro
const { calculoPlaneza, calculoParalelismo, controleDimensional, incerteza_AU } = require("../util/calculosMicrometro");

router
     // Rota para calcular a planicidade do micrômetro
    .post("/calculateMicrometer", async (req, res) => {

        const {cMovel, cFixo, dadosParalelismo, dadosControle, faixaCalibrada} = req.body

        try {
  
           const response =  {}

            !!dadosParalelismo == true ? response.calculoParalelismo =  calculoParalelismo(dadosParalelismo) : response.calculoParalelismo = "Sem dados" 

            !!cMovel == true && !!cFixo == true ? response.calculoPlaneza = calculoPlaneza(cFixo, cMovel) : response.calculoParalelismo = "Sem dados"

            !!dadosControle == true && !!faixaCalibrada == true ? response.controleDimensional = controleDimensional(dadosControle, faixaCalibrada) : response.controleDimensional = "Sem dados"

            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })

    .post("/uncertaintyMicrometer", async(req, res) =>{
        const {faixaCalibrada} = req.body

        try{
            const response =  {}

            !!faixaCalibrada == true ? response.incertez_AU = incerteza_AU() : response.incertez_AU = "Sem dados"



            return res.status(200).json(response)

        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })

module.exports = router;
