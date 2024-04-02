const router = require("express").Router();

// Importa as funções de cálculo da planicidade e paralelismo do micrômetro
const { calculoPlaneza, calculoParalelismo } = require("../util/calculosMicrometro");

router
     // Rota para calcular a planicidade do micrômetro
    .post("/planezaMicrometro", async (req, res) => {
        try {
            // Obtém os dados necessários da requisição
            const CMovel = req.body.CMovel;
            const CFixo = req.body.CFixo;
            const dados = req.body.dados;

        // Chama as funçoes de cálculo
            // let calcular = await calculoPlaneza(CMovel, CFixo);
            let calcular = await calculoParalelismo(dados)

            // Verifica se o cálculo foi bem-sucedido e retorna a resposta adequada
            if (calcular) {
            res.status(200).json(calcular); // Retorna o resultado do cálculo
            } else {
            res.status(500).json("Erro interno do servidor"); // Retorna erro 500 em caso de falha no cálculo
            }
        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    });

module.exports = router;
