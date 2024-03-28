const router = require('express').Router();

const{ getUsers, registerUser, getUserByID, deleteUser } = require("../controllers/controllersUser");

//Rotas de usuarios
router

    .post("/cadastroMembro", async(req, res) => {

        try{
            const nome = req.body.nome;
            const email = req.body.email;
            const cargo = req.body.cargo;

            let resultCad= await registerUser(
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
                case 409:
                    res.status(409).json('Este e-mail já está em uso')
                    break;
                default:
                    res.status(500).json('Erro interno do servidor')
            }
        
        } catch(error){
            console.log(error)
        }

    })

    .get("/usuarios", async (req, res) => {
        try {
            const users = await getUsers();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json('Erro interno do servidor');
        }
    })

    .get("/usuario/:id", async (req, res) => {
        const id_user = req.params.id

        try {
            const usuario = await getUserByID(id_user);
            res.status(200).json(usuario)
        } catch(error) {
            console.log(error);
            res.status(500).json('Erro interno do servidor'); 
        }
    })

    .delete('/usuario/:id', async(req, res) => {
        const id_user = req.params.id;

        try{
            const deletar = await deleteUser(id_user);
            res.status(200).json("Usuario deletado com sucesso");
        } catch(error) {
            console.log(error);
            res.status(500).json('Erro interno do servidor'); 
        }
    })

module.exports = router;