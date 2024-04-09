const router = require('express').Router();

// Importa a função de cálculo de tendência externa do paquímetro
const { calculoTendenciaExterna } = require("../util/calculosPaquimetro");

router
    // Rota para calcular a tendência externa do paquímetro
    .post("/tendenciaPaquimetro", async(req, res) => {
        try {
            // Obtém os dados necessários da requisição
            const arrayPrimeiraLinha = req.body.dados;
            const arraySegundaLinha = req.body.dados2;
            const arrayTerceiraLinha = req.body.dados3;
            const arrayQuartaLinha = req.body.dados4;
            const arrayQuintaLinha = req.body.dados5;
            const arraySextaLinha = req.body.dados6;
            const arraySetimaLinha = req.body.dados7;

            // Chama a função de cálculo de tendência externa passando os arrays de dados
            let calcular = await calculoTendenciaExterna(
                arrayPrimeiraLinha,
                arraySegundaLinha,
                arrayTerceiraLinha,
                arrayQuartaLinha,
                arrayQuintaLinha,
                arraySextaLinha,
                arraySetimaLinha
            );

            // Verifica se o cálculo foi bem-sucedido e retorna a resposta adequada
            if (calcular) {
                res.status(200).json(calcular); // Retorna o resultado do cálculo
            } else {
                res.status(500).json("Erro interno do servidor"); // Retorna erro 500 em caso de falha no cálculo
            }
        } catch(error) {
            console.log(error); // Registra o erro no console
        }
    });

module.exports = router;