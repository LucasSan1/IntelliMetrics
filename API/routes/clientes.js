// import { Router } from "express";
const router = require('express').Router();

const { registerCliente, getClientes, getClienteById, deleteCliente, updateCliente } = require('../controllers/controllerCliente');

router

    .post("/cadastroCliente", async(req, res) => {
        try {
            const nomeEmpresa = req.body.nome;
            const representante = req.body.representante;
            const email = req.body.email;
            const telefone = req.body.telefone;
            const endereco = req.body.endereco;
            const cnpj = req.body.cnpj;

            let resultCad = await registerCliente(
                nomeEmpresa,
                representante,
                email,
                telefone,
                endereco,
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
            console.log(error);
        }
    })
 

    .get("/clientes", async(req, res) => {
        try {
            const clientes = await getClientes();
            res.status(200).json(clientes);

        } catch (error) {
            console.log(error);
            res.status(500).json("Erro interno do servidor");
        }
    })


    .get("/clientes/:id", async(req, res) => {
        const id_cliente = req.params.id;

        try {
            const cliente = await getClienteById(id_cliente);
            res.status(200).json(cliente);

        } catch (error) {
            console.log(error);
            res.status(500).json("Erro interno no servidor")
        }
    })


    .delete("/clientes/:id", async(req, res) => {
        const id_cliente = req.params.id;

        try {
            const cliente = await deleteCliente(id_cliente);
            res.status(200).json("Cliente deletado com sucesso");

        } catch (error) {
            console.log(error);
            res.status(500).json("Erro interno no servidor")
        }
    })

    .put("/clientes/:id", async (req, res) => {
        try {
            const id_cliente = req.params.id;
            const nome = req.body.nome;
            const representante = req.body.representante;
            const email = req.body.email;
            const telefone = req.body.telefone;
            const endereço = req.body.endereço;
            const cnpj = req.body.cnpj;

            let resultUpdate = await updateCliente(
                id_cliente,
                nome,
                representante,
                email,
                telefone,
                endereço,
                cnpj
            )
            
            if(resultUpdate){
                res.status(200).json("Cliente atualizado")
            } else{
                res.status(500).json("Erro interno do servidor")
            }
     

        } catch (error) {
            console.log(error);
        }
    })

module.exports = router;