const router = require('express').Router();

const { registerCategoria, updateCategoria } = require("../controllers/controllerCategorias")
const validacaoCategoria = require("../validation/categoriasVal")

router
    .post("/registerCategory", async(req, res) => {
        try {
            const nome = req.body.nome;

            const valCategoria = {
                nome
            };

            const categoriaValidada = validacaoCategoria.parse(valCategoria);

            let resultCad = await registerCategoria(
                categoriaValidada.nome
            );

            switch (resultCad) { 
                case 200:
                    res.status(200).json("Instrumento cadastrado");
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar instrumento");
                    break;
                default:
                    res.status(500).json("Erro interno do servidor");
            }

        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json("Erro interno do servidor");
        }
    })

    .put("/updateCategory/:id", async(req, res) => {
        try {
            const idCategoria = req.params.id;
            const nome = req.body.nome;

            const valCategoria = {
                nome
            }

            const categoriaValidada = validacaoCategoria.parse(valCategoria);

            let resultUpdate = await updateCategoria(
                idCategoria,
                categoriaValidada.nome
            )
            
            switch(resultUpdate){
                case 200:
                    res.status(200).json('Instrumento atualizado');
                    break;
                case 400:
                    res.status(400).json('Erro ao atualizar instrumento');
                    break;
                default:
                    res.status(500).json('Erro interno do servidor');
            }

        } catch (error) {
            console.log(error);
            res.status(500).json("Erro interno do servidor");
        }
    })

module.exports = router; 
