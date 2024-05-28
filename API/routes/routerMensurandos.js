const router = require('express').Router();
const { infoRelatoirios } = require("../controllers/controllerRelatorioMedicao")

router
    
    .post('/mensurandos', (req, res) => {
        const {dados} = req.body

        try{
            let resultado = infoRelatoirios(dados)

            if(resultado){
                res.status(200).json("Documento criado com sucesso!")
            }else{
                res.status(400).json("Erro ao criar documento!")
            }
        } catch(err) {
            console.log(err)
            res.status(500).json("Erro interno do servidor")
        }
        
    })
    
module.exports = router
