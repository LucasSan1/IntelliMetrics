const router = require("express").Router();

// Importa a função de cálculo de tendência externa do paquímetro
const { calculoTendenciaExterna, calculoParalelismoOrelhas, calculoParalelismoBicos, calculoMedInterna, calculoMedRessalto, calculoMedProfundidade, incertezaUA, incertezaUP, incertezaERES, incertezaL1, incertezaL2, incertezaUC, incertezaUE } = require("../util/calculosPaquimetro");

router
  // Rota para calcular a tendência externa do paquímetro
  .post("/caliperCalculation", async (req, res) => {
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

  .post("/caliperUncertainty", async(req, res) =>{
    
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
.post("/caliperParallelismo", async (req, res) =>{
  try{
    const {novoValorNominalOrelha, novoValorProxOrelha1,novoValorProxOrelha2, novoValorProxOrelha3, novoValorAfasOrelha1, novoValorAfasOrelha2, novoValorAfasOrelha3, ovoValorNominalBico, novoValorProxBico1, novoValorProxBico2, novoValorProxBico3, novoValorAfasBico1, novoValorAfasBico2, novoValorAfasBico3} = req.body;
    

    let result = await insertMicrometro(
      novoValorNominalOrelha, novoValorProxOrelha1,novoValorProxOrelha2, novoValorProxOrelha3, novoValorAfasOrelha1, novoValorAfasOrelha2, novoValorAfasOrelha3, ovoValorNominalBico, novoValorProxBico1, novoValorProxBico2, novoValorProxBico3, novoValorAfasBico1, novoValorAfasBico2, novoValorAfasBico3
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

// rota para atualizar  os valores de paralelismo paquimetro
.put("/caliperParallelismo/:id", async(req, res)=>{
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
.post ("/externalmeasurements", async(req, res)=>{
  try{
    const {novoVn1,novoVn1_1, novoVn1_2, novoVn1_3, novoVn2, novoVn2_1, novoVn2_2, novoVn2_3, novoVn3, novoVn3_1, novoVn3_2, novoVn3_3, novoVn4,novoVn4_1, novoVn4_2, novoVn4_3, novoVn5, novoVn5_1, novoVn5_2, novoVn5_3,  novoVn6, novoVn6_1,  novoVn6_2,  novoVn6_3, novoVn7,novoVn7_1, novoVn7_2, novoVn7_3,  novoVnExtra1, novoVnExtra1_1, novoVnExtra1_2, novoVnExtra1_3, novoVnExtra2, novoVnExtra2_1, novoVnExtra2_2, novoVnExtra2_3, novoVnExtra3,novoVnExtra3_1, novoVnExtra3_2, novoVnExtra3_3} = req.body;
    
    let result = await insertMedExt(
      novoVn1,novoVn1_1, novoVn1_2, novoVn1_3, novoVn2, novoVn2_1, novoVn2_2, novoVn2_3, novoVn3, novoVn3_1, novoVn3_2, novoVn3_3, novoVn4,novoVn4_1, novoVn4_2, novoVn4_3, novoVn5, novoVn5_1, novoVn5_2, novoVn5_3,  novoVn6, novoVn6_1,  novoVn6_2,  novoVn6_3, novoVn7,novoVn7_1, novoVn7_2, novoVn7_3,  novoVnExtra1, novoVnExtra1_1, novoVnExtra1_2, novoVnExtra1_3, novoVnExtra2, novoVnExtra2_1, novoVnExtra2_2, novoVnExtra2_3, novoVnExtra3,novoVnExtra3_1, novoVnExtra3_2, novoVnExtra3_3
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

// rota para atualizar a medição externa 
.put ("/externalmeasurements/:id", async(req, res)=>{
  try{
    const { alterarVn1,alterarVn1_1, alterarVn1_2, alterarVn1_3,alterarVn2, alterarVn2_1, alterarVn2_2, alterarVn2_3, alterarVn3, alterarVn3_1, alterarVn3_2, alterarVn3_3,alterarVn4,alterarVn4_1,alterarVn4_2, alterarVn4_3,alterarVn5, alterarVn5_1, alterarVn5_2, alterarVn5_3,alterarVn6,alterarVn6_1, alterarVn6_2, alterarVn6_3, alterarVn7, alterarVn7_1, alterarVn7_2, alterarVn7_3, alterarVnExtra1, alterarVnExtra1_1, alterarVnExtra1_2, alterarVnExtra1_3,  alterarVnExtra2,  alterarVnExtra2_1,  alterarVnExtra2_2,  alterarVnExtra2_3,  alterarVnExtra3,  alterarVnExtra3_1,  alterarVnExtra3_2,  alterarVnExtra3_3} = req.body;
    const idMedicaoExterna = req.params;

    let atualiza = await upMedExt(
      alterarVn1,alterarVn1_1, alterarVn1_2, alterarVn1_3,alterarVn2, alterarVn2_1, alterarVn2_2, alterarVn2_3, alterarVn3, alterarVn3_1, alterarVn3_2, alterarVn3_3,alterarVn4,alterarVn4_1,alterarVn4_2, alterarVn4_3,alterarVn5, alterarVn5_1, alterarVn5_2, alterarVn5_3,alterarVn6,alterarVn6_1, alterarVn6_2, alterarVn6_3, alterarVn7, alterarVn7_1, alterarVn7_2, alterarVn7_3, alterarVnExtra1, alterarVnExtra1_1, alterarVnExtra1_2, alterarVnExtra1_3,  alterarVnExtra2,  alterarVnExtra2_1,  alterarVnExtra2_2,  alterarVnExtra2_3,  alterarVnExtra3,  alterarVnExtra3_1,  alterarVnExtra3_2,  alterarVnExtra3_3
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
.post ("/resultCaliper", async(req, res)=>{
  try{
    const {nrCertificado, idInstrumento,idParalelismoPaq, idMedExterna, idMedInterna,idMedRessalto, idMedProfundidade, novoTecnico, novoResponsável, novaDataCalibracao, novaInspecao, novoTipoEscala, novaVersaoMetodo,  novoTempInicial, novoTempFinal} = req.body;

    let result = await insertResultPaq(
      nrCertificado, idInstrumento,idParalelismoPaq, idMedExterna, idMedInterna,idMedRessalto, idMedProfundidade, novoTecnico, novoResponsável, novaDataCalibracao, novaInspecao, novoTipoEscala, novaVersaoMetodo,  novoTempInicial, novoTempFinal

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

//controller para alterar o resultado do paquimetro



module.exports = router;