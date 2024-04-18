const router = require('express').Router();
const {validacaoCliente} = require("../validation/clientesVal")

// Importa as funções do controlador relacionadas aos clientes
const { registerCliente, getClientes, getClienteById, deleteCliente, updateCliente } = require('../controllers/controllerCliente');

router
    // Rota para cadastrar um novo cliente
    .post("/cadastroCliente", async(req, res) => {
        try {
            // Extrai os dados do corpo da requisição
            const {nomeEmpresa, representante, email, telefone, endereco , cnpj, status} = req.body
            
            const valCliente = {
                nomeEmpresa,
                representante,
                email,
                telefone,
                endereco,
                cnpj,
                status
            }
            
            const clienteValidado = validacaoCliente.parse(valCliente);

            // Chama a função para registrar um novo cliente
            let resultCad = await registerCliente(
                nomeEmpresa,
                representante,
                email,
                telefone,
                endereco,
                cnpj,
                status
            );

            // Verifica o resultado do cadastro e retorna a resposta adequada
            switch (resultCad) { 
                case 200:
                    res.status(200).json("Cliente cadastrado");
                    break;
                case 400:
                    res.status(400).json("Erro ao cadastrar cliente");
                    break;
                case 409:
                    res.status(409).json("Este email já está em uso");
                    break;
                default:
                    res.status(500).json("Erro interno do servidor");
            }

        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })
 
    // Rota para obter todos os clientes
    .get("/clientes", async(req, res) => {
        try {
            // Chama a função para obter todos os clientes
            const clientes = await getClientes();
            res.status(200).json(clientes);

        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json("Erro interno do servidor");
        }
    })

    // Rota para obter um cliente pelo seu ID
    .get("/clientes/:id", async(req, res) => {
        const id_cliente = req.params.id;

        try {
            // Chama a função para obter um cliente pelo ID
            const cliente = await getClienteById(id_cliente);
            res.status(200).json(cliente);

        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json("Erro interno no servidor");
        }
    })

    // Rota para deletar um cliente pelo seu ID
    .delete("/clientes/:id", async(req, res) => {
        const id_cliente = req.params.id;

        try {
            // Chama a função para deletar um cliente pelo ID
            const cliente = await deleteCliente(id_cliente);
            res.status(200).json("Cliente deletado com sucesso");

        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json("Erro interno no servidor");
        }
    })

    // Rota para atualizar um cliente pelo seu ID
    .put("/clientes/:id", async (req, res) => {
        try {
            const id_cliente = req.params.id;
            const nome = req.body.nome;
            const representante = req.body.representante;
            const email = req.body.email;
            const telefone = req.body.telefone;
            const endereço = req.body.endereço;
            const cnpj = req.body.cnpj;
            const status = req.body.status;

            // Chama a função para atualizar um cliente pelo ID
            let resultUpdate = await updateCliente(
                id_cliente,
                nome,
                representante,
                email,
                telefone,
                endereço,
                cnpj,
                status
            )
            
            // Verifica o resultado da atualização e retorna a resposta adequada
            if(resultUpdate){
                res.status(200).json("Cliente atualizado");
            } else{
                res.status(500).json("Erro interno do servidor");
            }
        } catch (error) {
            console.log(error); // Registra o erro no console
        }
    })

module.exports = router;
