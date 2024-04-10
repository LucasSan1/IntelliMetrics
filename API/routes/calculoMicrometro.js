const router = require("express").Router();

// Importa as funções de cálculo da planicidade e paralelismo do micrômetro
const { calculoPlaneza, calculoParalelismo, controleDimensional } = require("../util/calculosMicrometro");

router
     // Rota para calcular a planicidade do micrômetro
    .post("/planezaMicrometro", async (req, res) => {

        const {cMovel, cFixo, dadosParalelismo, dadosControle} = req.body

        try {
  
           const response =  {}

            !!dadosParalelismo == true ? response.calculoParalelismo =  calculoParalelismo(dadosParalelismo) : response.calculoParalelismo = "Sem dados" 
            !!cMovel == true && !!cFixo == true ? response.calculoPlaneza = calculoPlaneza(cFixo, cMovel) : response.calculoParalelismo = "Sem dados"
            !!dadosControle == true ? response.controleDimensional = controleDimensional(dadosControle) : response.controleDimensional = "Sem dados"

            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    });

module.exports = router;
