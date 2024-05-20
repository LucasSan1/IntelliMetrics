const router = require('express').Router();
const { novoDocumento } = require("../controllers/relatorioMedicao")

router
    
    .post('/module', (req, res) => {
        let resulatdo = novoDocumento()
        if(resulatdo){
            res.status(200).json("Documento criado com sucesso!")
        }else{
            res.status(400).json("Erro ao criar documento!")
        }
    })
    
module.exports = router