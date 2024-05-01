const router = require('express').Router();
const validacaoUsuario = require("../validation/usuariosVal");

// const { generateToken, verifica, removerToken } = require("../controller/token");
const { createUser, getCol, getColById, deleteCol, putCol, login } = require("../controllers/controllerUser");
const { middlewareValidarJWT } = require("../middleware/authMiddleware");

router
  // criar um perfil
  .post("/newUser", async (req, res) => {
    try {

      const { email, nome, cargo } = req.body;

      const valUsuario = {
        nome,
        email,
        cargo
      }
      
      const usuarioValidado = validacaoUsuario.parse(valUsuario);

      let resultado = await createUser(
        usuarioValidado.nome.toLowerCase(),
        usuarioValidado.email.toLowerCase(),
        usuarioValidado.cargo.toLowerCase()
      )

      switch (resultado) {
        case 200:
          res.status(200).json('Usuário cadastrado')
          break;
        case 409:
          res.status(409).json('Este e-mail já está em uso')
          break;
        case 400:
          res.status(400).json('Erro ao cadastrar usuário')
          break;
        default:
          res.status(500).json('Erro interno do servidor')
      }

    } catch (error) {
      console.log(error)
    }
  })
  
  .delete("/collaborator/:id", middlewareValidarJWT, async (req, res) => {
    try {
      const id = req.params.id;
      const nome = req.body.nome;

      let resultado = await deleteCol(
        id,
        nome.toLowerCase()
      );
      switch (resultado) {
        case 200:
          res.status(200).json('Usuário deletado')
          break;
        case 400:
          res.status(400).json('Usuário já deletado')
          break;
        default:
          res.status(500).json('Erro interno do servidor')
      }

    } catch (error) {
      console.log(error)
    }
  })
  .get("/collaborator", middlewareValidarJWT, async (req, res) => {
    try {
      const email = req.body.email;

      let resultado = await getCol(
        email.toLowerCase()
      )
      res.status(200).json(resultado);

    } catch (error) {
      console.log(error)
    }
  })

  .get("/collaborator/:id", middlewareValidarJWT, async (req, res) => {
    try {
      const id = req.params.id;

      let resultado = await getColById(
        id
      )
      res.status(200).json(resultado);


    } catch (error) {
      console.log(error)
    }
  })
  // atualizar usuario
  .put("/collaboratorUP/:id", middlewareValidarJWT, async (req, res) => {
    try {
      const id = req.params.id;
      const { email, senhaNova, nome } = req.body;



      let resultado = await putCol(
        id,
        email.toLowerCase(),
        senhaNova,
        nome.toLowerCase()
      );
      if (resultado === 400) {
        res.status(200).json("Cliente Não Encontrado")
      } else if (resultado) {
        res.status(200).json("Cliente atualizado")
      } else {
        res.status(500).json("Erro interno do servidor")
      }

    } catch (error) {
      console.log(error)
    }

  })
  // atualizar token
  .put("/collaborator/login", async (req, res) => {
    try {

      const { email, senha } = req.body;
      let resultado = await login(

        email.toLowerCase(),
        senha.toLowerCase()

      );


      if (resultado === 401) {
        res.status(400).json("Preencha todos os campos")
      }

      if (resultado === 400) {
        res.status(400).json("Credenciais inválidas")
      }
      const dadosUsuario = { email, senha }
      const dotenv = require("dotenv");
      const jwt = require("jsonwebtoken");
      dotenv.config()
      jwt.sign(dadosUsuario, process.env.CHAVEPRIVADA, { expiresIn: 5 }, (err, token) => {
        if (err) {
          res
            .status(500)
            .json({ mensagem: "Erro ao gerar o JWT" });

          return;
        }

        res.set("json", token).json({ mensagem: "Login Efetuado com Sucesso", Nome: resultado[0].nome, cargo: resultado[0].cargo, token});
        res.end();
      });
    } catch (error) {
      res.status(500).json('Erro interno do servidor');
    }

  })


module.exports = router;

