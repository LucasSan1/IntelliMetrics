const router = require('express').Router();

const{ controllerMembro } = require("../controllers/controllercad");

router.post("/cadastroMembro", async(req, res) => {

    try{
        const nome = req.body.nome;
        const email = req.body.email;
        const cargo = req.body.cargo;

        let resultCad= await controllerMembro(
           nome,
           email,
           cargo
          );

          switch(resultCad){
            case 200:
                res.status(200).json('Usuario cadastrado')
                break;
            case 400:
                res.status(400).json('Erro ao cadastrar usuario')
                break;
            default:
                res.status(500).json('Erro interno do servidor')
          }
       
    } catch(error){
        console.log(error)
    }

});



module.exports = router;