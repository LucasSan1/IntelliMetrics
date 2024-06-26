const router = require("express").Router();

const {
  registerInstrumento,
  getAllInstrumentos,
  updateInstrumento,
  getInstrumentoById,
} = require("../controllers/controllerInstrumentos");
const validacaoInstrumentos = require("../validation/instrumentosVal");
const { middlewareValidarJWT } = require("../middleware/authMiddleware");

router
  // Rota para cadastrar um novo instrumento
  .post("/registerTools", async (req, res) => {
    try {
      // Extrai os dados do corpo da requisição
      const { idCliente, idOs, idCategoria, nome, nSerie, identificacaoCliente, fabricante, faixaNominalNum, faixaNominalUni, divisaoResolucaoNum, divisaoResolucaoUni, orgaoResponsavel, estadoEmbalagem } = req.body;

      const valInstrumento = {
        idCliente,
        idOs,
        idCategoria,
        nome,
        nSerie,
        identificacaoCliente,
        fabricante,
        faixaNominalNum,
        faixaNominalUni,
        divisaoResolucaoNum,
        divisaoResolucaoUni,
        orgaoResponsavel,
        estadoEmbalagem
      };

      try {

        const instrumentoValidado = validacaoInstrumentos.parse(valInstrumento);

        // Chama a função para registrar um novo instrumento
        let resultCad = await registerInstrumento(
          instrumentoValidado.idCliente,
          instrumentoValidado.idOs,
          instrumentoValidado.idCategoria,
          instrumentoValidado.nome,
          instrumentoValidado.nSerie,
          instrumentoValidado.identificacaoCliente,
          instrumentoValidado.fabricante,
          instrumentoValidado.faixaNominalNum,
          instrumentoValidado.faixaNominalUni,
          instrumentoValidado.divisaoResolucaoNum,
          instrumentoValidado.divisaoResolucaoUni,
          instrumentoValidado.orgaoResponsavel,
          instrumentoValidado.estadoEmbalagem
        );

        // Verifica o resultado do cadastro e retorna a resposta adequada
        switch (resultCad) {
          case 200:
            res.status(200).json("Instrumento cadastrado");
            break;
          case 400:
            res.status(400).json("Erro ao cadastrar instrumento");
            break;
          default:
            res.status(500).json("Erro interno do servidor");
        }
      } catch (validationError) {
        // Captura os erros de validação e envia como resposta
        return res.status(400).json({ error: validationError.errors });
      }

    } catch (error) {
      console.log(error); // Registra o erro no console
      res.status(500).json("Erro interno do servidor");
    }
  })

  // Rota para atualizar um instrumento pelo seu ID
  .put("/updateTools/:id", async (req, res) => {
    try {
      const id_instrumento = req.params.id;

      const {
        idCliente,
        idOs,
        idCategoria,
        nome,
        nSerie,
        identificacaoCliente,
        fabricante,
        faixaNominalNum,
        faixaNominalUni,
        divisaoResolucaoNum,
        divisaoResolucaoUni,
        orgaoResponsavel,
        estadoEmbalagem
      } = req.body;

      const valInstrumento = {
        idCliente,
        idOs,
        idCategoria,
        nome,
        nSerie,
        identificacaoCliente,
        fabricante,
        faixaNominalNum,
        faixaNominalUni,
        divisaoResolucaoNum,
        divisaoResolucaoUni,
        orgaoResponsavel,
        estadoEmbalagem
      };

      try {

        const instrumentoValidado = validacaoInstrumentos.parse(valInstrumento);

        // Chama a função para atualizar um instrumento pelo ID
        let resultUpdate = await updateInstrumento(
          id_instrumento,
          instrumentoValidado.idCliente,
          instrumentoValidado.idOs,
          instrumentoValidado.idCategoria,
          instrumentoValidado.nome,
          instrumentoValidado.nSerie,
          instrumentoValidado.identificacaoCliente,
          instrumentoValidado.fabricante,
          instrumentoValidado.faixaNominalNum,
          instrumentoValidado.faixaNominalUni,
          instrumentoValidado.divisaoResolucaoNum,
          instrumentoValidado.divisaoResolucaoUni,
          instrumentoValidado.orgaoResponsavel,
          instrumentoValidado.estadoEmbalagem
        );

        // Verifica o resultado da atualização e retorna a resposta adequada
        switch (resultUpdate) {
          case 200:
            res.status(200).json("Instrumento atualizado");
            break;
          case 400:
            res.status(400).json("Erro ao atualizar instrumento");
            break;
          default:
            res.status(500).json("Erro interno do servidor");
        }
      } catch (validationError) {
        // Captura os erros de validação e envia como resposta
        return res.status(400).json({ error: validationError.errors });
      }
      
    } catch (error) {
      console.log(error);
      res.status(500).json("Erro interno do servidor");
    }
  })

  // Rota para obter todos os instrumentos
  .get("/getAllTools", async (req, res) => {
    try {
      // Chama a função para obter todos os instrumentos
      const instrumentos = await getAllInstrumentos();
      res.status(200).json(instrumentos);
    } catch (error) {
      console.log(error); // Registra o erro no console
      res.status(500).json("Erro interno do servidor");
    }
  })

  .get("/getTool/:id", async (req, res) => {
    const id = req.params.id;
    try {
      // Chama a função para obter todos os instrumentos
      const instrumentos = await getInstrumentoById(id);
      res.status(200).json(instrumentos);
    } catch (error) {
      console.log(error); // Registra o erro no console
      res.status(500).json("Erro interno do servidor");
    }
  });

module.exports = router;
