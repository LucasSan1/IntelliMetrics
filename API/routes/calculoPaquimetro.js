const router = require("express").Router();

// Importa a função de cálculo de tendência externa do paquímetro
const {
  calculoTendenciaExterna,
  calculosPararelismo,
} = require("../util/calculosPaquimetro");

router
  // Rota para calcular a tendência externa do paquímetro
  .post("/tendenciaPaquimetro", async (req, res) => {
    const { valorNominal, valorIndicado } = req.body;

    try {
      const resposta = {};

      !!valorNominal == true && !!valorIndicado == true
        ? (resposta.medicaoExterna = calculoTendenciaExterna(
            valorIndicado,
            valorNominal
          ))
        : (resposta.medicaoExterna = "Sem dados");
      // !!pararelismo == true ? resposta.calculosPararelismo = calculosPararelismo(pararelismo) : resposta.calculosPararelismo = "Sem dados"
    } catch (error) {
      console.log(error); // Registra o erro no console
    }
  });

module.exports = router;
