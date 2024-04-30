const router = require("express").Router();

// Importa as funções de cálculo da planicidade e paralelismo do micrômetro
const { calculoPlaneza, calculoParalelismo, controleDimensional, incerteza_medAU, incerteza_medERES, incertez_medl1, incerteza_medPAR } = require("../util/calculosMicrometro");

router
     // Rota para calcular a planicidade do micrômetro
    .post("/calculateMicrometer", async (req, res) => {

        const {cMovel, cFixo, dadosParalelismo, dadosControle, faixaCalibrada, valorDivResolucao, dig_anal} = req.body

        try {
  
           const response =  {} 
           req.desvpadMedio = 0
           req.ultimoValor = 0


            !!dadosParalelismo == true ? response.calculoParalelismo =  calculoParalelismo(dadosParalelismo) : response.calculoParalelismo = "Sem dados" 

            !!cMovel == true && !!cFixo == true ? response.calculoPlaneza = calculoPlaneza(cFixo, cMovel) : response.calculoParalelismo = "Sem dados"

            !!dadosControle == true && !!faixaCalibrada == true ? response.controleDimensional = controleDimensional(dadosControle, faixaCalibrada, req) : response.controleDimensional = "Sem dados"


            // calculo incerteza micromico 
            !!faixaCalibrada == true ? response.incertez_medAU = incerteza_medAU(req) : response.incertez_medAU = "Sem dados"

            !!valorDivResolucao == true ? response.incerteza_medEres = incerteza_medERES(valorDivResolucao, dig_anal) : response.incerteza_medERES = "Sem dados"

            !!valorDivResolucao == true ? response.incerteza_medPAR = incerteza_medPAR(valorDivResolucao, dig_anal) : response.incerteza_medPAR = "Sem dados"
            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })

   // .post("/incertezaMicrometro", async(req, res) =>{
    //     const {faixaCalibrada} = req.body



    //     try{
    //         const response =  {}

           



    //         return res.status(200).json(response)

    //     } catch (error) {
    //         console.log(error); // Registra o erro no console
    //     }
    // })

module.exports = router;
