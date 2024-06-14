const router = require("express").Router();

// Importa a função de cálculo de tendência externa do paquímetro
const { calculoTendenciaExterna, calculoParalelismoOrelhas, calculoParalelismoBicos, calculoMedInterna, calculoMedRessalto, calculoMedProfundidade, incertezaUA, incertezaUP, incertezaERES, incertezaL1, incertezaL2, incertezaUC, incertezaUE } = require("../util/calculosPaquimetro");

const {paralelismoPaquimetro, upPaqParalelismo, insertMedExt, upMedExt, insertResultPaq, upResultPaq, insertMedInt, upMedInt, insertMedRes, upMedRes, insertMedPro, upMedPro} = require("../controllers/controllerPaquimetro")
router
  // Rota para calcular a tendência externa do paquímetro
  .post("/calculosPaq", async (req, res) => {
    const { valorNominalMedExterna, valorIndicado, valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara, valorIndicadoProxBicos, valorIndicadoAfasBicos, valorNominalMedInterna, valorIndicadoMedInterna, valorNominalMedRessalto, valorIndicadoMedRessalto, valorNominalMedProf, valorIndicadoMedProf} = req.body;

    try {
      const response = {};

      !!valorNominalMedExterna == true && !!valorIndicado == true ? response.medicaoExterna = calculoTendenciaExterna( valorIndicado, valorNominalMedExterna) : response.medicaoExterna = "Sem dados";


      !!valorIndicadoAfasOrelhas == true && !!valorIndicadoProxOrelhas == true ? response.calculos_Pararelismo_Orelhas = calculoParalelismoOrelhas(valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara) : response.calculos_Pararelismo_Orelhas = "Sem dados"

      !!valorIndicadoAfasBicos == true && !!valorIndicadoProxBicos == true ? response.calculos_Pararelismo_Bicos = calculoParalelismoBicos(valorIndicadoProxBicos, valorIndicadoAfasBicos, valorNominalPara ) : response.calculo_Paralelismo_Bicos = "Sem dados"

      !!valorNominalMedInterna == true && !!valorIndicadoMedInterna == true ? response.tendencias_Medicao_Interna = calculoMedInterna(valorNominalMedInterna, valorIndicadoMedInterna) : response.tendencias_Medicao_Interna = "Sem dados"

      !!valorNominalMedRessalto == true && !!valorIndicadoMedRessalto == true ? response.tendencias_Medicao_Ressalto = calculoMedRessalto(valorNominalMedRessalto, valorIndicadoMedRessalto ) : response.tendencias_Medicao_Ressalto = "Sem dados"

      !!valorNominalMedProf == true && !!valorIndicadoMedProf ==  true ? response.tendencias_Medicao_Profundidade = calculoMedProfundidade(valorIndicadoMedProf, valorNominalMedProf) : response.tendencias_Medicao_Profundidade = "Sem dados"
      
      return res.status(200).json(response)

    } catch (error) {
      console.log(error); // Registra o erro no console
    }
  })

  .post("/incertezaPaq", async(req, res) =>{
    
    const {resolucao, desvpad, faixaNominal} = req.body
    
    try{

      const response = {}

      req.incertezas = []

      !! desvpad == true && !!resolucao == true ? response.incerteza_UA = incertezaUA(resolucao, desvpad, req) : response.incerteza_UA = "Sem dados"

      !!faixaNominal == true ? response.incerteza_UP_EA = incertezaUP(faixaNominal, req) : response.incerteza_UP_EA = "Sem dados"

      !!resolucao == true ? response.inceteza_ERES = incertezaERES(resolucao,req) : response.inceteza_ERES = "Sem dados"

      !!faixaNominal == true ? response.incerteza_L1 = incertezaL1(faixaNominal,req) : response.incerteza_L1 = "Sem dados"

      !!faixaNominal == true ? response.incerteza_L2 = incertezaL2(faixaNominal, req) : response.incerteza_L2 = "Sem dados"

      !!faixaNominal == true ? response.incerteza_UC = incertezaUC(req) : response.incerteza_UC = "Sem dados" 
      
      !!faixaNominal == true ? response.incertezaUE = incertezaUE() : response.incertezaUE = "Sem dados"

      return res.status(200).json(response)

    } catch (error) {
      console.log(error); // Registra o erro no console
    } 
  })

  // rota para inserir o paralelismo do paquimetro
  .post("/inserirParalelismo", async (req, res) =>{
    try{
      const {novoValorNominalOrelha, novoValorProxOrelha1,novoValorProxOrelha2, novoValorProxOrelha3, novoValorAfasOrelha1, novoValorAfasOrelha2, novoValorAfasOrelha3, novoValorNominalBico, novoValorProxBico1, novoValorProxBico2, novoValorProxBico3, novoValorAfasBico1, novoValorAfasBico2, novoValorAfasBico3} = req.body;
      

      let result = await paralelismoPaquimetro(
        novoValorNominalOrelha, novoValorProxOrelha1,novoValorProxOrelha2, novoValorProxOrelha3, novoValorAfasOrelha1, novoValorAfasOrelha2, novoValorAfasOrelha3, novoValorNominalBico, novoValorProxBico1, novoValorProxBico2, novoValorProxBico3, novoValorAfasBico1, novoValorAfasBico2, novoValorAfasBico3
      );
      switch (result) {
        case 200:
          res.status(200).json(" valor inserido com sucesso")
          break;

        case 400:
          res.status(400).json('erro ao inserir ')
          break;

        default:
          res.status(500).json('Erro interno do servidor')
      }
    }catch (error) {
      console.log(error)
    }
  })

  // rota para atualizar  os valores de paralelismo paquimetro
  .put("/calibrarParalelismo/:id", async(req, res)=>{
    try{
      const { alterarValorNominalOrelha, alterarValorProxOrelha1, alterarValorProxOrelha2, alterarValorProxOrelha3, alterarValorAfasOrelha1, alterarValorAfasOrelha2, alterarValorAfasOrelha3, alterarValorNominalBico, alterarValorProxBico1, alterarValorProxBico2, alterarValorProxBico3, alterarValorAfasBico1, alterarValorAfasBico2,  alterarValorAfasBico3} = req.body;
      const pk_idParalelismoPaq = req.params;

      let atualiza = await upPaqParalelismo(
        pk_idParalelismoPaq, alterarValorNominalOrelha, alterarValorProxOrelha1, alterarValorProxOrelha2, alterarValorProxOrelha3, alterarValorAfasOrelha1, alterarValorAfasOrelha2, alterarValorAfasOrelha3, alterarValorNominalBico, alterarValorProxBico1, alterarValorProxBico2, alterarValorProxBico3, alterarValorAfasBico1, alterarValorAfasBico2,  alterarValorAfasBico3
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
      console.log(error); // Registra o erro no console
  }
  })

  // rota para inserir as medições externas 
  .post ("/medicaoExterna", async(req, res)=>{
    try{
      const {novoVn1, novoVn1_1, novoVn1_2, novoVn1_3, novoVn2, novoVn2_1, novoVn2_2, novoVn2_3, novoVn3, novoVn3_1, novoVn3_2, novoVn3_3, novoVn4, novoVn4_1, novoVn4_2, novoVn4_3, novoVn5, novoVn5_1, novoVn5_2, novoVn5_3, novoVn6, novoVn6_1,  novoVn6_2,  novoVn6_3, novoVn7, novoVn7_1, novoVn7_2, novoVn7_3, novoVnExtra1, novoVnExtra1_1, novoVnExtra1_2, novoVnExtra1_3, novoVnExtra2, novoVnExtra2_1, novoVnExtra2_2, novoVnExtra2_3, novoVnExtra3, novoVnExtra3_1, novoVnExtra3_2, novoVnExtra3_3} = req.body;
      
      let result = await insertMedExt(
        novoVn1, novoVn1_1, novoVn1_2, novoVn1_3, novoVn2, novoVn2_1, novoVn2_2, novoVn2_3, novoVn3, novoVn3_1, novoVn3_2, novoVn3_3, novoVn4,novoVn4_1, novoVn4_2, novoVn4_3, novoVn5, novoVn5_1, novoVn5_2, novoVn5_3,  novoVn6, novoVn6_1,  novoVn6_2,  novoVn6_3, novoVn7,novoVn7_1, novoVn7_2, novoVn7_3,  novoVnExtra1, novoVnExtra1_1, novoVnExtra1_2, novoVnExtra1_3, novoVnExtra2, novoVnExtra2_1, novoVnExtra2_2, novoVnExtra2_3, novoVnExtra3,novoVnExtra3_1, novoVnExtra3_2, novoVnExtra3_3
      );
      switch (result) {
        case 200:
          res.status(200).json(" valor inserido com sucesso")
          break;

        case 400:
          res.status(400).json('erro ao inserir ')
          break;

        default:
          res.status(500).json('Erro interno do servidor')
      }
    }catch (error) {
      console.log(error)
    }
  })

  // rota para atualizar a medição externa 
  .put ("/medicaoExterna/:id", async(req, res)=>{
    try{
      const { alterarVn1,alterarVn1_1, alterarVn1_2, alterarVn1_3,alterarVn2, alterarVn2_1, alterarVn2_2, alterarVn2_3, alterarVn3, alterarVn3_1, alterarVn3_2, alterarVn3_3,alterarVn4,alterarVn4_1,alterarVn4_2, alterarVn4_3,alterarVn5, alterarVn5_1, alterarVn5_2, alterarVn5_3,alterarVn6,alterarVn6_1, alterarVn6_2, alterarVn6_3, alterarVn7, alterarVn7_1, alterarVn7_2, alterarVn7_3, alterarVnExtra1, alterarVnExtra1_1, alterarVnExtra1_2, alterarVnExtra1_3,  alterarVnExtra2,  alterarVnExtra2_1,  alterarVnExtra2_2,  alterarVnExtra2_3,  alterarVnExtra3,  alterarVnExtra3_1,  alterarVnExtra3_2,  alterarVnExtra3_3} = req.body;
      const idMedicaoExterna = req.params;

      let atualiza = await upMedExt(
        idMedicaoExterna, alterarVn1,alterarVn1_1, alterarVn1_2, alterarVn1_3,alterarVn2, alterarVn2_1, alterarVn2_2, alterarVn2_3, alterarVn3, alterarVn3_1, alterarVn3_2, alterarVn3_3,alterarVn4,alterarVn4_1,alterarVn4_2, alterarVn4_3,alterarVn5, alterarVn5_1, alterarVn5_2, alterarVn5_3,alterarVn6,alterarVn6_1, alterarVn6_2, alterarVn6_3, alterarVn7, alterarVn7_1, alterarVn7_2, alterarVn7_3, alterarVnExtra1, alterarVnExtra1_1, alterarVnExtra1_2, alterarVnExtra1_3,  alterarVnExtra2,  alterarVnExtra2_1,  alterarVnExtra2_2,  alterarVnExtra2_3,  alterarVnExtra3,  alterarVnExtra3_1,  alterarVnExtra3_2,  alterarVnExtra3_3
      );
      switch(atualiza){
        case 200:
            res.status(200).json('Medições externas atualizada');
            break;
        case 400:
            res.status(400).json('Erro ao atualizar Medições externas');
            break;
        case 404:
            res.status(404).json('Relatório não encontrado');
            break;
        default:
            res.status(500).json('Erro interno do servidor');
    }

    }catch (error) {
      console.log(error); // Registra o erro no console
  }
  })

  //rota para inserir os resultados de paquimetro
  .post("/resultadoPaquimetro", async(req, res)=>{
    try{
      const { nrCertificado, idInstrumento, idParalelismoPaq, idMedExterna, idMedInterna, idMedRessalto, idMedProfundidade, novoTecnico, novoResponsável, novaDataCalibracao, novaInspecao, novoTipoEscala, novaVersaoMetodo, novoTempInicial, novoTempFinal } = req.body;

      let result = await insertResultPaq(
        nrCertificado, idInstrumento, idParalelismoPaq, idMedExterna, idMedInterna, idMedRessalto, idMedProfundidade, novoTecnico, novoResponsável, novaDataCalibracao, novaInspecao, novoTipoEscala, novaVersaoMetodo,  novoTempInicial, novoTempFinal

      );
      switch (result) {
        case 200:
          res.status(200).json("Valor inserido com sucesso")
          break;

        case 400:
          res.status(400).json('Erro ao inserir ')
          break;

        default:
          res.status(500).json('Erro interno do servidor')
      }
    }catch (error) {
      console.log(error)
    }
  })

  //controller para alterar o resultado do paquimetro
  .put("/updateResultadoPaquimetro", async(req, res)=>{
    try{
      const {antigoNrCertificado,alterarNrCertificado,idInstrumento, idParalelismoPaq,idMedExterna, idMedInterna,  idMedRessalto, idMedProfundidade, alterarTecnico, alterarResponsável, alterarDataCalibracao, alterarInspecao, alterarTipoEscala, alterarVersaoMetodo, alterarTempInicial, alterarTempFinal}= req.body;

      let atualiza = await upResultPaq(
        antigoNrCertificado,alterarNrCertificado,idInstrumento, idParalelismoPaq,idMedExterna, idMedInterna,  idMedRessalto, idMedProfundidade, alterarTecnico, alterarResponsável, alterarDataCalibracao, alterarInspecao, alterarTipoEscala, alterarVersaoMetodo, alterarTempInicial, alterarTempFinal
      );
      switch(atualiza){
        case 200:
            res.status(200).json('Resultado paquimetro atualizado');
            break;
        case 400:
            res.status(400).json('Erro ao atualizar o resultado do paquimetro');
            break;
        case 404:
            res.status(404).json('Relatório não encontrado');
            break;
        default:
            res.status(500).json('Erro interno do servidor');
    }


    }catch (error) {
      console.log(error); // Registra o erro no console
  }
  })

  //rota para inserir medições internas
  .post("/medicaoInterna", async(req, res)=>{
    try{
      const {novaPrimeiraMedida, novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3, novaSegundaMedida, novoValorNominal2_1, novoValorNominal2_2, novoValorNominal2_3, novaTerceiraMedida, novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3} = req.body;

      let result = await insertMedInt(
        novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3,novaSegundaMedida, novoValorNominal2_1, novoValorNominal2_2, novoValorNominal2_3, novaTerceiraMedida, novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3
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
  // rota para alterar as medições internas 
  .put("/medicaoInterna/:id", async(req, res)=>{
    try{
      const { alterarPrimeiraMedida, alterarValorNominal1_1, alterarValorNominal1_2, alterarValorNominal1_3, alterarSegundaMedida, alterarValorNominal2_1, alterarValorNominal2_2, alterarValorNominal2_3, alterarTerceiraMedida,alterarValorNominal3_1, alterarValorNominal3_2, alterarValorNominal3_3 }= req.body;
      const idMedicaoInterna = req.params;

      let atualiza = await upMedInt(
        idMedicaoInterna, alterarPrimeiraMedida,alterarValorNominal1_1, alterarValorNominal1_2, alterarValorNominal1_3, alterarSegundaMedida, alterarValorNominal2_1, alterarValorNominal2_2, alterarValorNominal2_3, alterarTerceiraMedida,alterarValorNominal3_1, alterarValorNominal3_2, alterarValorNominal3_3 

      );
      switch(atualiza){
        case 200:
            res.status(200).json('Medições internas atualizado');
            break;
        case 400:
            res.status(400).json('Erro ao atualizar as medições internas');
            break;
        case 404:
            res.status(404).json('Relatório não encontrado');
            break;
        default:
            res.status(500).json('Erro interno do servidor');
    }

    }catch (error) {
      console.log(error); // Registra o erro no console
  }
  })

  // rotas para inserir medições de ressaltos 
  .post("/medicaoRessalto", async(req, res)=>{
    try{
      const {novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3, novaSegundaMedida, novoValorNominal2_1,  novoValorNominal2_2,  novoValorNominal2_3, novaTerceiraMedida,novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3} = req.body;
      
      let result = await insertMedRes(
        novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3, novaSegundaMedida, novoValorNominal2_1,  novoValorNominal2_2,  novoValorNominal2_3, novaTerceiraMedida,novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3
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



  // rota para alterar medições de ressalto
  .put("/medicaoRessalto/:id", async (req, res) =>{
    try{
      const {novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3, novaSegundaMedida, novoValorNominal2_1, novoValorNominal2_2, novoValorNominal2_3, novaTerceiraMedida,novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3} = req.body;
      const idMedicaoRessalto = req.params;

    let atualiza = await upMedRes (
      idMedicaoRessalto, novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3, novaSegundaMedida, novoValorNominal2_1, novoValorNominal2_2, novoValorNominal2_3, novaTerceiraMedida,novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3
    );
    switch(atualiza){
      case 200:
          res.status(200).json('Medições de ressalto atualizado');
          break;
      case 400:
          res.status(400).json('Erro ao atualizar as medições de ressalto');
          break;
      case 404:
          res.status(404).json('Relatório não encontrado');
          break;
      default:
          res.status(500).json('Erro interno do servidor');
  }
    }catch (error) {
      console.log(error); // Registra o erro no console
  }
  })

  // rota para adicionar medições de profundidade
  .post("/medicaoProfundidade", async (req, res) =>{
    try{
      const {nova_primeiraMedida, novo_valorNominal1_1,novo_valorNominal1_2, novo_valorNominal1_3, nova_segundaMedida, novo_valorNominal2_1, novo_valorNominal2_2, novo_valorNominal2_3, nova_terceiraMedida, novo_valorNominal3_1, novo_valorNominal3_2, novo_valorNominal3_3} = req.body;

      let result = await insertMedPro (
        nova_primeiraMedida, novo_valorNominal1_1,novo_valorNominal1_2, novo_valorNominal1_3, nova_segundaMedida, novo_valorNominal2_1, novo_valorNominal2_2, novo_valorNominal2_3, nova_terceiraMedida, novo_valorNominal3_1, novo_valorNominal3_2, novo_valorNominal3_3
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

  // rota para alterar as medições de profundidade

  .put("/updateDepthMeasurements/:id", async (req, res) =>{
    try{
      const {nova_primeiraMedida, novo_valorNominal1_1, novo_valorNominal1_2, novo_valorNominal1_3, nova_segundaMedida, novo_valorNominal2_1, novo_valorNominal2_2, novo_valorNominal2_3,nova_terceiraMedida, novo_valorNominal3_1, novo_valorNominal3_2, novo_valorNominal3_3 } = req.body;
      const idMedicao = req.params.idMedicao;

      let atualiza = await upMedPro(
        nova_primeiraMedida, novo_valorNominal1_1, novo_valorNominal1_2, novo_valorNominal1_3, nova_segundaMedida, novo_valorNominal2_1, novo_valorNominal2_2, novo_valorNominal2_3,nova_terceiraMedida, novo_valorNominal3_1, novo_valorNominal3_2, novo_valorNominal3_3 
      );
      switch(atualiza){
        case 200:
            res.status(200).json('Medições de profundidade atualizado');
            break;
        case 400:
            res.status(400).json('Erro ao atualizar as medições de profundidade');
            break;
        case 404:
            res.status(404).json('Relatório não encontrado');
            break;
        default:
            res.status(500).json('Erro interno do servidor');
    }
    }catch (error) {
      console.log(error); // Registra o erro no console
  }
  })


//



module.exports = router;