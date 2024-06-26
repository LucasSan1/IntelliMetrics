const db = require("../connector/conn");

// Função para registrar um novo instrumento
const registerInstrumento = async (idCliente, idOs, idCategoria, nome, nSerie, identificacaoCliente, fabricante, faixaNominalNum, faixaNominalUni, divisaoResolucaoNum, divisaoResolucaoUni, orgaoResponsavel, estadoEmbalagem) => {
  
  const save = db.query(
    `CALL cadastrarInstrumento('${idCliente}', '${idOs}', '${idCategoria}', '${nome}', '${nSerie}', '${identificacaoCliente}', '${fabricante}', '${faixaNominalNum}', '${faixaNominalUni}', '${divisaoResolucaoNum}', '${divisaoResolucaoUni}', '${orgaoResponsavel}', '${estadoEmbalagem}')`
  );

  // Verifica se a inserção foi bem-sucedida
  if (!save) {
    return 400; // Retorna status 400 se não foi bem-sucedido
  } else {
    return 200; // Retorna status 200 se foi bem-sucedido
  }
};

// Função para obter todos os instrumentos
const getAllInstrumentos = async () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * from instrumentos`, (error, results) => {
      if (error) {
        reject(error); // Rejeita a promessa em caso de erro
        return;
      }
      resolve(results); // Resolve a promessa com os resultados
    });
  });
};

//  CALL infosInstrumentos(${id_instrumento})
const getInstrumentoById = async (id_instrumento) => {
  const verificarInstru = await new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM instrumentos WHERE pk_idInstrumento = ? ;`, [id_instrumento], 
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });

  if (verificarInstru.length == 0) {
    return 404;
  }

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM instrumentos WHERE pk_idInstrumento = ? ;`, [id_instrumento],
      (error, results) => {
        if (error) {
          reject(error); // Rejeita a promessa em caso de erro
          return;
        }
        resolve(results); // Resolve a promessa com os resultados
      }
    );
  });
};

// Função para atualizar informações de um instrumento pelo seu ID
const updateInstrumento = async (
  id_instrumento,
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
) => {

const verificarInstru = await new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM instrumentos WHERE pk_idInstrumento = ? ;`, [id_instrumento],
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });

  if (verificarInstru.length == 0) {
    return 404;
  }

  return new Promise((resolve, reject) => {
    db.query(
      `CALL modificarInstrumento('${id_instrumento}', '${idCliente}', '${idOs}', '${idCategoria}', '${nome}', '${nSerie}', '${identificacaoCliente}', '${fabricante}', '${faixaNominalNum}', '${faixaNominalUni}', '${divisaoResolucaoNum}', '${divisaoResolucaoUni}', '${orgaoResponsavel}', '${estadoEmbalagem}')`,
      (error, results) => {
        if (error) {
          console.log(error)
          reject(error);
          return;
        }
        resolve(200);
      }
    );
  });
};

module.exports = {
  registerInstrumento,
  updateInstrumento,
  getInstrumentoById,
  getAllInstrumentos,
};
