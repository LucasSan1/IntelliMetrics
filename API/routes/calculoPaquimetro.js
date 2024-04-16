const router = require("express").Router();

// Importa a função de cálculo de tendência externa do paquímetro

const { calculoTendenciaExterna, calculoParalelismoOrelhas } = require("../util/calculosPaquimetro");

router
  // Rota para calcular a tendência externa do paquímetro
  .post("/calcPaquimetro", async (req, res) => {
    const { valorNominalMedExterna, valorIndicado, valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara } = req.body;

    try {
      const response = {};

      !!valorNominalMedExterna == true && !!valorIndicado == true ? response.medicaoExterna = calculoTendenciaExterna( valorIndicado, valorNominalMedExterna) : response.medicaoExterna = "Sem dados";

      !!valorIndicadoAfasOrelhas == true && !!valorIndicadoProxOrelhas == true ? response.calculosPararelismo = calculoParalelismoOrelhas(valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara) : response.calculosPararelismo = "Sem dados"

      return res.status(200).json(response)

    } catch (error) {
      console.log(error); // Registra o erro no console
    }
  });

module.exports = router;
