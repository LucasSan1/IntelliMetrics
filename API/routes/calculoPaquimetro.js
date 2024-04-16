const router = require("express").Router();

// Importa a função de cálculo de tendência externa do paquímetro
const { calculoTendenciaExterna, calculoParalelismoOrelhas, calculoParalelismoBicos, calculoMedInterna, calculoMedRessalto, calculoMedProfundidade } = require("../util/calculosPaquimetro");

router
  // Rota para calcular a tendência externa do paquímetro
  .post("/calcPaquimetro", async (req, res) => {
    const { valorNominalMedExterna, valorIndicado, valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara, valorIndicadoProxBicos, valorIndicadoAfasBicos, valorNominalMedInterna, valorIndicadoMedInterna, valorNominalMedRessalto, valorIndicadoMedRessalto, valorNominalMedProf, valorIndicadoMedProf} = req.body;

    try {
      const response = {};

      !!valorNominalMedExterna == true && !!valorIndicado == true ? response.medicaoExterna = calculoTendenciaExterna( valorIndicado, valorNominalMedExterna) : response.medicaoExterna = "Sem dados";

      !!valorIndicadoAfasOrelhas == true && !!valorIndicadoProxOrelhas == true ? response.calculosPararelismoOrelhas = calculoParalelismoOrelhas(valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara) : response.calculosPararelismoOrelhas = "Sem dados"

      !!valorIndicadoAfasBicos == true && !!valorIndicadoProxBicos == true ? response.calculosPararelismoBicos = calculoParalelismoBicos(valorIndicadoProxBicos, valorIndicadoAfasBicos, valorNominalPara ) : response.calculoParalelismoBicos = "Sem dados"

      !!valorNominalMedInterna == true && !!valorIndicadoMedInterna == true ? response.tendenciasMedInterna = calculoMedInterna(valorNominalMedInterna, valorIndicadoMedInterna) : response.tendenciasMedInterna = "Sem dados"

      !!valorNominalMedRessalto == true && !!valorIndicadoMedRessalto == true ? response.tendenciasMedRessalto = calculoMedRessalto(valorNominalMedRessalto, valorIndicadoMedRessalto ) : response.tendenciasMedRessalto = "Sem dados"

      !!valorNominalMedProf == true && !!valorIndicadoMedProf ==  true ? response.tendenciasMedProfundidade = calculoMedProfundidade(valorIndicadoMedProf, valorNominalMedProf) : response.tendenciasMedProfundidade = "Sem dados"

      return res.status(200).json(response)

    } catch (error) {
      console.log(error); // Registra o erro no console
    }
  });

module.exports = router;
