const router = require('express').Router();
const { infoRelatoirios } = require("../controllers/controllerRelatorioMedicao")

router
    
    .post('/module', (req, res) => {
        const {dados} = req.body

        let resultado = infoRelatoirios(dados)

        if(resultado){
            res.status(200).json("Documento criado com sucesso!")
        }else{
            res.status(400).json("Erro ao criar documento!")
        }
    })
    
module.exports = router
