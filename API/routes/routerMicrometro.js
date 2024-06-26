const router = require("express").Router();

// Importa as funções de cálculo da planicidade e paralelismo do micrômetro
const { calculoPlaneza, calculoParalelismo, controleDimensional, incerteza_medAU, incerteza_UP, incerteza_medERES, incertez_medl1, incertez_medl2, incerteza_medPAR, incertez_medEader, incertezaUC, incetPara0_25, incertplaneza0_25,   incetPara25_50, incertplaneza25_50, incetPara50_100, incertplaneza50_100 } = require("../util/calculosMicrometro");

const { insertMicrometro, upMicroParalelismo, insertDimensionalMicro, upDimencionalMicro, insertResult, upResultMicro, insertPlaneza, upPlanezaMicro} = require("../controllers/controllerMicrometro")

router
     // Rota para calcular a planicidade do micrômetro
    .post("/calculateMicrometro", async (req, res) => {

        const {cMovel, cFixo, dadosParalelismo, dadosControle, faixaCalibrada, valorDivResolucao, dig_anal} = req.body

        try {
  
           const response =  {} 
           req.desvpadMedio = 0
           req.ultimoValor = 0
           req.primeiroValor = 0
           req.incerteza = []
           req.desvpadPara3Ult = 0
           req.valParaMM = 0
           req.CFixo = 0 
           req.CMovel = 0


            !!dadosParalelismo == true ? response.calculoParalelismo =  calculoParalelismo(dadosParalelismo, req) : response.calculoParalelismo = "Sem dados" 

            !!cMovel == true && !!cFixo == true ? response.calculoPlaneza = calculoPlaneza(cFixo, cMovel, req) : response.calculoParalelismo = "Sem dados"

            !!dadosControle == true && !!faixaCalibrada == true ? response.controleDimensional = controleDimensional(dadosControle, faixaCalibrada, req) : response.controleDimensional = "Sem dados"


            // calculo incerteza micromico 
            !!faixaCalibrada == true ? response.incerteza_medAU = incerteza_medAU(req) : response.incerteza_medAU = "Sem dados"

            !!valorDivResolucao == true ? response.incerteza_UP = incerteza_UP(req) :  response.incerteza_UP ="semm dados"

            !!valorDivResolucao == true ? response.incerteza_medEres = incerteza_medERES(valorDivResolucao, dig_anal, req) : response.incerteza_medERES = "Sem dados"

            !!valorDivResolucao == true ? response.incerteza_medl1 = incertez_medl1(req) : response.incerteza_medl1 = "Sem dados"
            
            !!valorDivResolucao == true ? response.incerteza_medl2 = incertez_medl2(req) : response.incerteza_medl2 = "Sem dados"

            !!valorDivResolucao == true ? response.incerteza_medPAR = incerteza_medPAR(valorDivResolucao, dig_anal, req) : response.incerteza_medPAR = "Sem dados"

            !!valorDivResolucao == true ? response.incerteza_medEader = incertez_medEader(req) : response.incerteza_medEader =  "Sem dados"
            
            !!valorDivResolucao == true ? response.incertezaUC = incertezaUC(req) : response.incertezaUC = "Sem dados"

            !!valorDivResolucao == true ? response.incertezaPara0_25 = incetPara0_25(req) : response.incertezaPara0_25 = "Sem dados"

            !!valorDivResolucao == true ? response.incertezaPlaneza0_25 = incertplaneza0_25(req) : response.incertezaPlaneza0_25 = "Sem dados"

            !!valorDivResolucao == true ? response.incertezaPara25_50 = incetPara25_50(req) : response.incertezaPara25_50 = "Sem dados"

            !!valorDivResolucao == true ? response.incertezaPlaneza25_50 = incertplaneza25_50(req) : response.incertezaPlaneza25_50 = "Sem dados"

            !!valorDivResolucao == true ? response.incertezaPara50_100 = incetPara50_100(req) : response.incertezaPara50_100 = "Sem dados"

            !!valorDivResolucao == true ? response.incertezaPlaneza50_100 = incertplaneza50_100(req) : response.incertezaPlaneza50_100 = "Sem dados"

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



  // rota para inserir paralelismo do micrometro
.post("/inserirMicrometroParalelismo", async (req, res) =>{
    try{
        const { novovalorNominal1, novovalorNominal2, novovalorNominal3, novovalorNominal4, novocMovelcFixo1, novocMovelcFixo2, novocMovelcFixo3, novocMovelcFixo4, novocMovelcFixo5, novocMovelcFixo6 } = req.body
        
        let result = await insertMicrometro(
            novovalorNominal1,novovalorNominal2,novovalorNominal3,novovalorNominal4,novocMovelcFixo1, novocMovelcFixo2,novocMovelcFixo3,novocMovelcFixo4,novocMovelcFixo5, novocMovelcFixo6 
        );
        switch (result) {
            case 200:
              res.status(200).json(" valor inserido com sucesso")
              break;
      
            case 400:
              res.status(401).json('erro ao inserir ')
              break;
      
            default:
              res.status(500).json('Erro interno do servidor')
          }
    }catch (error) {
        console.log(error)
      }
})  


// rota para atualizar o paralelismo micrometro
.put("/updateMicrometroParalelismo/:id", async(req, res) =>{
    try{
        const { novovalorNominal1,  novovalorNominal2, novovalorNominal3,  novovalorNominal4,  novocMovelcFixo1,  novocMovelcFixo2,  novocMovelcFixo3,  novocMovelcFixo4,  novocMovelcFixo5,  novocMovelcFixo6}= req.body;

        const idParalelismo = req.params.id;

        let atualiza = await upMicroParalelismo(
            idParalelismo, novovalorNominal1,  novovalorNominal2, novovalorNominal3,  novovalorNominal4,  novocMovelcFixo1,  novocMovelcFixo2,  novocMovelcFixo3,  novocMovelcFixo4,  novocMovelcFixo5,  novocMovelcFixo6

        );
        switch(atualiza){
            case 200:
                res.status(200).json('Paralelismo atualizado');
                break;
            case 400:
                res.status(400).json('Erro ao atualizar Paralelismo');
                break;
            case 404:
                res.status(404).json('Relatório não encontrado');
                break;
            default:
                res.status(500).json('Erro interno do servidor');
        }
    }catch (error) {
        console.log(error)
      }
})


// rota para inserir controle dimencional 
.post("/inserirControleDimencional", async (req, res) =>{
    try{
        const { novoVp1,novoVp1_1,novoVp1_2, novoVp1_3,novoVp2,novoVp2_1,novoVp2_2,novoVp2_3,novoVp3,novoVp3_1,novoVp3_2, novoVp3_3,novoVp4,novoVp4_1, novoVp4_2, novoVp4_3,novoVp5, novoVp5_1, novoVp5_2,novoVp5_3, novoVp6,novoVp6_1, novoVp6_2,novoVp6_3, novoVp7,novoVp7_1, novoVp7_2, novoVp7_3,novoVp8,novoVp8_1, novoVp8_2, novoVp8_3,novoVp9, novoVp9_1, novoVp9_2, novoVp9_3,novoVp10,novoVp10_1, novoVp10_2, novoVp10_3, novoVp11, novoVp11_1, novoVp11_2, novoVp11_3 } = req.body
        
        let result = await insertDimensionalMicro(
            novoVp1,novoVp1_1,novoVp1_2, novoVp1_3,novoVp2,novoVp2_1,novoVp2_2,novoVp2_3,novoVp3,novoVp3_1,novoVp3_2, novoVp3_3,novoVp4,novoVp4_1, novoVp4_2, novoVp4_3,novoVp5, novoVp5_1, novoVp5_2,novoVp5_3, novoVp6,novoVp6_1, novoVp6_2,novoVp6_3, novoVp7,novoVp7_1, novoVp7_2, novoVp7_3,novoVp8,novoVp8_1, novoVp8_2, novoVp8_3,novoVp9, novoVp9_1, novoVp9_2, novoVp9_3,novoVp10,novoVp10_1, novoVp10_2, novoVp10_3, novoVp11, novoVp11_1, novoVp11_2, novoVp11_3
        );
        switch (result) {
            case 200:
              res.status(200).json(" valor inserido com sucesso")
              break;
      
            case 400:
              res.status(401).json('erro ao inserir ')
              break;
      
            default:
              res.status(500).json('Erro interno do servidor')
          }
    }catch (error) {
        console.log(error)
      }
}) 


//rota para alterar o resultado
.put("/updateResultadoMicrometro/:id", async(req, res) =>{
    const antigoNrCertificad = req.params.id
    try{
        const {alterarNrCertificado,idControle, idPlaneza, idParalelismoMicro,  idInstrumento, alterarTecnico,  alterarResponsável, alterarFaixaCalibradaNum, alterarFaixaCalibradaUni, alterarDataCalibracao, alterarInspecao, alterarTipoEscala, alterarVersaoMetodo, alterarTempInicia, alterarTempFinal}= req.body;
        

        let atualiza = await upResultMicro(
            antigoNrCertificad,alterarNrCertificado,idControle, idPlaneza, idParalelismoMicro,  idInstrumento, alterarTecnico,  alterarResponsável, alterarFaixaCalibradaNum, alterarFaixaCalibradaUni, alterarDataCalibracao, alterarInspecao, alterarTipoEscala, alterarVersaoMetodo, alterarTempInicia, alterarTempFinal

        );
        switch(atualiza){
            case 200:
                res.status(200).json('Controle dimensional atualizado');
                break;
            case 400:
                res.status(400).json('Erro ao atualizar controle dimensional');
                break;
            case 404:
                res.status(404).json('Relatório não encontrado');
                break;
            default:
                res.status(500).json('Erro interno do servidor');
        }
    }catch (error) {
        console.log(error)
      }
})

//  rota  para inserir o resultado do micrometro
.post("/inserirResultadoMicrometro", async (req, res) =>{
    try{
        const {nrCertificado,idControle,idPlaneza,idParalelismoMicro,idInstrumento,novoTecnico,novoResponsável,novaFaixaCalibradaNum,novaFaixaCalibradaUni, novaDataCalibracao,novaInspecao, novoTipoEscala, novaVersaoMetodo,novoTempInicial, novoTempFinal } = req.body;
        
        let result = await insertResult(
            nrCertificado,idControle,idPlaneza,idParalelismoMicro,idInstrumento,novoTecnico,novoResponsável,novaFaixaCalibradaNum,novaFaixaCalibradaUni, novaDataCalibracao,novaInspecao, novoTipoEscala, novaVersaoMetodo,novoTempInicial, novoTempFinal
        );
        switch (result) {
            case 200:
              res.status(200).json(" valor inserido com sucesso")
              break;
      
            case 400:
              res.status(401).json('erro ao inserir ')
              break;
      
            default:
              res.status(500).json('Erro interno do servidor')
          }
    }catch (error) {
        console.log(error)
      }
}) 

// inserção de planeza
.post("/insertPlaneza", async (req, res) =>{
    try{
        const { CMovel1,CMovel2, CMovel3, CFixo1, CFixo2, CFixo3 } = req.body;
        
        let result = await insertPlaneza(
            CMovel1, CMovel2, CMovel3, CFixo1, CFixo2, CFixo3
        );
        switch (result) {
            case 200:
              res.status(200).json(" valor inserido com sucesso")
              break;
      
            case 400:
              res.status(401).json('erro ao inserir ')
              break;
      
            default:
              res.status(500).json('Erro interno do servidor')
          }
    }catch (error) {
        console.log(error)
      }
}) 

//  rota alteração de planeza

.put("/updatePlaneza/:id", async(req, res) =>{
    try{
        const { CMovel1, CMovel2, CMovel3, CFixo1, CFixo2, CFixo3}= req.body;
        const idPlaneza = req.params.id;

        let atualiza = await upPlanezaMicro(
            idPlaneza, CMovel1, CMovel2, CMovel3, CFixo1, CFixo2, CFixo3

        );
        switch(atualiza){
            case 200:
                res.status(200).json('Planeza atualizado');
                break;
            case 400:
                res.status(400).json('Erro ao atualizar Planeza');
                break;
            case 404:
                res.status(404).json('Relatório não encontrado');
                break;
            default:
                res.status(500).json('Erro interno do servidor');
        }
    }catch (error) {
        console.log(error)
      }
})



module.exports = router;
