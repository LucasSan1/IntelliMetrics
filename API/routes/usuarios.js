const router = require('express').Router();
const db = require("../connector/conn")
const validacaoUsuario = require("../validation/usuariosVal");

// const { generateToken, verifica, removerToken } = require("../controller/token");
const { createUser, getCol, getColById, disableUser, enableUser, putPass, putUser, login, inserirToken } = require("../controllers/controllerUser");
const { middlewareValidarRota } = require("../middleware/authMiddleware");

router
  // criar um perfil
  .post("/newUser", async (req, res) => {
    try {
      
      const { nome, email, cargo } = req.body;

      const valUsuario = {
        nome,
        email,
        cargo
      }
      
      try{
        const usuarioValidado = validacaoUsuario.parse(valUsuario);

        let resultado = await createUser(
          usuarioValidado.nome.toLowerCase(),
          usuarioValidado.email,
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
      } catch (validationError) {
        // Captura os erros de validação e envia como resposta
        return res.status(400).json({ error: validationError.errors });
      }

    } catch (error) {
      console.log(error)
    }
  })
  
  .put("/disableUser", middlewareValidarRota, async (req, res) => {
    try {
        const {email} = req.body
        
        if(req.cargo != "gestor"){
            res.status(401).json("Não autorizado")
        }

      let resultado = await disableUser(
        email.toLowerCase()
      );
      switch (resultado) {
        case 200:
          res.status(200).json('Usuário desativado')
          break;
        case 400:
          res.status(400).json('Usuário já esta desativado')
          break;
        default:
          res.status(500).json('Erro interno do servidor')
      }

    } catch (error) {
      console.log(error)
    }
  })

  .put("/enableUser", middlewareValidarRota, async (req, res) => {
    try {
        const {email} = req.body

      let resultado = await enableUser(
        email.toLowerCase()
      );
      switch (resultado) {
        case 200:
          res.status(200).json('Usuário ativado')
          break;
        case 400:
          res.status(400).json('Usuário já esta ativo')
          break;
        default:
          res.status(500).json('Erro interno do servidor')
      }

    } catch (error) {
      console.log(error)
    }
  })

  .get("/allUsers", async (req, res) => {
    try {
    
      let resultado = await getCol()
      res.status(200).json(resultado);

    } catch (error) {
      console.log(error)
    }
  })

  .get("/user/:id", async (req, res) => {
    try {
      const id = req.params.id;

      let resultado = await getColById(
        id
      )
      if(resultado){
        res.status(200).json(resultado);
      } else{
        res.status(404).json("Usuario Não Encontrado")
      }
      
    } catch (error) {
      console.log(error)
    }
  })

  // atualizar senha usuario
  .put("/updatePass", async (req, res) => {
    try {
      const { email, senha } = req.body;

      let resultado = await putPass(
        email.toLowerCase(),
        senha
      );

      switch(resultado){
        case 404:
          res.status(404).json("Usuário Não Encontrado")
          break
        case 200:
            res.status(200).json("Senha atualizada")
            break;
        case 400:
            res.status(400).json("Não foi possivel redefinir senha")
            break;
        default:
            res.status(500).json("Erro interno do servidor")
            break;
      }
 
    } catch (error) {
      console.log(error)
    }

  })
  
  // atualizar token
  .put("/user/login", async (req, res) => {
    try {

      const { email, senha } = req.body;
      let resultado = await login(
        email.toLowerCase(),
        senha
      );

      switch(resultado){
        case 401:
            res.status(401).json("Credenciais inválidas")
          break;
        case 404:
          res.status(404).json("Usuário não encontrado")
          break;
      }
      if(resultado != 401 && resultado != 404){

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

            db.query(`CALL inserirToken('${email}', '${token}')`, 
            (error, results) => {
              if (error) {
                res.status(500).json({ mensagem: "Erro ao inserir o token no banco de dados" });
                return;
              }
              res.json({ mensagem: "Login Efetuado com Sucesso", Nome: resultado[0].nome, cargo: resultado[0].cargo, token });
            });

          });

      }
     
    } catch (error) {

      res.status(erro.status).json(error.message);
    }

  })

  //atualiza o user
  .put("/updateUser", async (req, res) => {
    try {

      const { email, nome, cargo } = req.body;

      const valUsuario = {
        nome,
        email,
        cargo
      }
      
      try{
        const usuarioValidado = validacaoUsuario.parse(valUsuario);

        let resultado = await putUser(
          usuarioValidado.nome.toLowerCase(),
          usuarioValidado.email,
          usuarioValidado.cargo.toLowerCase()
        )

        switch (resultado) {
          case 200:
            res.status(200).json('Usuário atualizado')
            break;
          case 400:
            res.status(400).json('Erro ao atualizar usuário')
            break;
          default:
            res.status(500).json('Erro interno do servidor')
        }
      } catch (validationError) {
        // Captura os erros de validação e envia como resposta
        return res.status(400).json({ error: validationError.errors });
      }

    } catch (error) {
      console.log(error)
    }
  })

module.exports = router;

