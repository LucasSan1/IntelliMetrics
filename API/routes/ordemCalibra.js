const router = require('express').Router();

const { registerOrder, getCalibraOrders, deleteOrCalibra } = require("../controllers/controllerCalibra")

router

    .post("/registerOrder", async(req, res) => {
        
        try{
            const fk_idCliente = req.body.fk_idCliente; 
            const fk_iUsuario = req.body.fk_iUsuario;
            const titulo = req.body.titulo; 
            const descricao = req.body.descricao; 
            const dataInicio = req.body.dataInicio; 
            const dataTermino = req.body.dataTermino; 
            const contratante = req.body.contratante; 
            const telefone = req.body.telefone; 
            const email = req.body.email; 

            let register = await registerOrder(
                fk_idCliente,
                fk_iUsuario,
                titulo,
                descricao,
                dataInicio,
                dataTermino,
                contratante,
                telefone,
                email
            )

            switch(register){
                case 200:
                    res.status(200).json("Ordem de calibração cadastrada com sucesso")
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar ordem de calibração")
                    break;
                case 409:
                    res.status(409).json("ID ja cadastrada")
                    break;
                default:
                    res.status(500).json("Erro interno do servidor")
            }

        } catch(error){
            console.log(error)
        }

    })

    .get("/allCalibraOrders", async(req, res) => {
        try {
            const users = await getCalibraOrders();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json('Erro interno do servidor');
        }
    })

    .delete("/deleteOrCalibra/:id", async(req, res) => {
        const id_order = req.params.id;

        try{
            const deletar = await deleteOrCalibra(id_order);
            res.status(200).json("Ordem de calibração deletada com sucesso");
        } catch(error) {
            console.log(error);
            res.status(500).json('Erro interno do servidor'); 
        }
    })


module.exports = router