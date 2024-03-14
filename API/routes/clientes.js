// import { Router } from "express";
const router = require('express').Router();
const { registerCliente, getClientes, getClienteById, deleteCliente } = require('../controllers/controllerCliente')

router.post("/cadastroCliente", async(req, res) => {
    try {
        const pk_idCliente = req.params.id;
        const nome = req.body.nome;
        const representante = req.body.representante;
        const email = req.body.email;
        const telefone = req.body.telefone;
        const endereço = req.body.endereço;
        const cnpj = req.body.cnpj;

        let resultCad = await registerCliente(
            pk_idCliente,
            nome,
            representante,
            email,
            telefone,
            endereço,
            cnpj
        );

        switch (resultCad) { 
            case 200:
                res.status(200).json("Cliente cadastrado")
                break;
            case 400:
                res.status(400).json("Erro ao cadastrar cliente")
                break;
            case 409:
                res.status(409).json("Este email já está em uso")
                break;
            default:
                res.status(500).json("Erro interno do servidor")
        }

    } catch (error) {
        console.log(error)
    }
})
 

router.get("/clientes", async(req, res) => {
    try {
        const clientes = await getClientes();
        res.status(200).json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).json("Erro interno do servidor");
    }
})


router.get("/clientes/:id", async(req, res) => {
    const pk_idCliente = req.params.id;

    try {
        const cliente = await getClienteById(pk_idCliente);
        res.status(200).json(cliente);

    } catch (error) {
        console.log(error);
        res.status(500).json("Erro interno no servidor")
    }
})


router.delete("/clientes/:id", async(req, res) => {
    const pk_idCliente = req.params.id;

    try {
        const cliente = await deleteCliente(pk_idCliente);
        res.status(200).json("Cliente deletado com sucesso");

    } catch (error) {
        console.log(error);
        res.status(500).json("Erro interno no servidor")
    }
})


module.exports = router;