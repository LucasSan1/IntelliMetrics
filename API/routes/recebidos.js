const router = require('express').Router();

const {insertReceipt, updateReceipt,getReceiptById,getAllReceipt} = require("../controllers/controllerRecibos");

router
    //rota para cadastrar uma novo recibo
    .post("/insertReceipt", async(req, res) =>{
        try{
            const {idOrdem, idUsuario, novoSetor,novoNProposta, novoNumNotaFiscal, novaDataRecebimento, novoRecebidoPrevisao, novaPrevisaoInicio, novaPrevisaoTermino,dataAssinatura, novoClienteConcorda,novaDataContatada} =req.body;
             

            let registerReceipt = await insertReceipt(

                idOrdem,
                idUsuario,
                novoSetor,
                novoNProposta,
                novoNumNotaFiscal,
                novaDataRecebimento,
                novoRecebidoPrevisao,
                novaPrevisaoInicio,
                novaPrevisaoTermino,
                dataAssinatura,
                novoClienteConcorda,
                novaDataContatada
            );
            switch(registerReceipt){
                case 200:
                    res.status(200).json("Recibo cadastrado com sucesso");
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar recibo");
                    break;
                case 409:
                    res.status(409).json("ID ja cadastrado");
                    break;
                default:
                    res.status(500).json("Erro interno do servidor");
            }
        }catch(error){
            console.log(error);
        }
    })


