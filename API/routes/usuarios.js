const router = require('express').Router();
const validacaoUsuario = require("../validation/usuariosVal")

// Importa as funções do controlador de usuários
const { getUsers, registerUser, getUserByID, deleteUser } = require("../controllers/controllersUser");

// Rotas de usuários
router
    // Rota para cadastrar um novo usuário
<<<<<<< HEAD
    .post("/memberRegistration", async(req, res) => {
=======
    .post("/registerUser", async(req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
        try {
            // Extrai os dados do corpo da requisição
            const {nome, email, cargo, status} = req.body;

            const valUsuario = {
                nome,
                email,
                cargo
            }

            const usuarioValidado = validacaoUsuario.parse(valUsuario);
            // Chama a função para cadastrar um novo usuário
            let resultCad = await registerUser(usuarioValidado.nome, usuarioValidado.email, usuarioValidado.cargo);

            // Verifica o resultado do cadastro e retorna a resposta adequada
            switch(resultCad) {
                case 200:
                    res.status(200).json('Usuário cadastrado');
                    break;
                case 400:
                    res.status(400).json('Erro ao cadastrar usuário');
                    break;
                case 409:
                    res.status(409).json('Este e-mail já está em uso');
                    break;
                default:
                    res.status(500).json('Erro interno do servidor');
            }
        } catch(error) {
            console.log(error); // Registra o erro no console
        }
    })

    // Rota para obter todos os usuários
<<<<<<< HEAD
    .get("/users", async (req, res) => {
=======
    .get("/getAllUsers", async (req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
        try {

            // Chama a função para obter todos os usuários
            const users = await getUsers();
            res.status(200).json(users);





        } catch (error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

    // Rota para obter um usuário pelo seu ID
<<<<<<< HEAD
    .get("user/:id", async (req, res) => {
=======
    .get("/users/:id", async (req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
        const id_user = req.params.id;

        try {
            // Chama a função para obter um usuário pelo ID
            const usuario = await getUserByID(id_user);
            res.status(200).json(usuario);
        } catch(error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

    // Rota para deletar um usuário pelo seu ID
<<<<<<< HEAD
    .delete('/userD elete/:id', async(req, res) => {
=======
    .delete('/deleteUser/:id', async(req, res) => {
>>>>>>> ee504c22583a07b36354942f8b29b1b2c8c5497a
        const id_user = req.params.id;

        try {
            // Chama a função para deletar um usuário pelo ID
            const deletar = await deleteUser(id_user);
            res.status(200).json("Usuário deletado com sucesso");
        } catch(error) {
            console.log(error); // Registra o erro no console
            res.status(500).json('Erro interno do servidor');
        }
    })

module.exports = router;
