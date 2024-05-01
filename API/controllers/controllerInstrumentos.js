const db = require('../connector/conn')

// Função para registrar um novo instrumento
const registerInstrumento = async( fk_idCliente, fk_idOs, fk_idCategoria, nome, nSerie, identificacaoCliente, fabricante, faixaNominalNum, faixaNominalUni, divisaoResolucaoNum, divisaoResolucaoUni, orgaoResponsavel ) => {

    const save = db.query(`
    CALL cadastrarInstrumento( '${fk_idCliente}', '${fk_idOs}', '${fk_idCategoria}', '${nome}', '${nSerie}', '${identificacaoCliente}', '${fabricante}', '${faixaNominalNum}', '${faixaNominalUni}', '${divisaoResolucaoNum}', '${divisaoResolucaoUni}', '${orgaoResponsavel}' ) `);

    // Verifica se a inserção foi bem-sucedida
    if (!save){
        return 400; // Retorna status 400 se não foi bem-sucedido
    } else {
        return 200; // Retorna status 200 se foi bem-sucedido
    }
}

// Função para obter todos os instrumentos
const getAllInstrumentos = async() => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * from instrumentos`),
        (error, results) => {
            if(error) {
                reject(error); // Rejeita a promessa em caso de erro
                return;
            }
            resolve(results); // Resolve a promessa com os resultados
        };
    });
}


const getInstrumentoById = async (id_instrumento) => {
    return new Promise((resolve, reject) => {
        db.query(`
        CALL infosInstrumentos (${id_instrumento}) `),
        (error, results) => {
            if(error) {
                reject(error); // Rejeita a promessa em caso de erro
                return;
            }
            resolve(results); // Resolve a promessa com os resultados
        };
    });
}


// Função para atualizar informações de um instrumento pelo seu ID
const updateInstrumento = async(id_instrumento, fk_idCliente, fk_idOs, fk_idCategoria, nome, nSerie, identificacaoCliente, fabricante, faixaNominalNum, faixaNominalUni, divisaoResolucaoNum, divisaoResolucaoUni) => {    
    const update = await db.query(`
    CALL modificarInstrumento ( '${id_instrumento}', '${fk_idCliente}', '${fk_idOs}', '${fk_idCategoria}', '${nome}', '${nSerie}', '${identificacaoCliente}', '${fabricante}', '${faixaNominalNum}', '${faixaNominalUni}', '${divisaoResolucaoNum}', '${divisaoResolucaoUni}' ) `);

    // Verifica se a atualização foi bem-sucedida
    if (update.affectedRows === 0) {
        return 404; // Retorna status 404fabricante se não foi possível encontrar o instrumento para atualização
    } else {
        return 200; // Retorna status 200 se foi bem-sucedido
    }
}

// função para selecionar a categoria do instrumento da ser usado
const registerCategory = async(novaCategoria) =>{
    const register = db.query(`CALL cadastrarCategoria ('${novaCategoria}')`)
    if (!register){
        return 400; // Retorna 400 (Bad Request) se a operação der errado
    } else {
        return 200;   // Retorna 200 (OK) se a operação for bem-sucedida
    }

}

module.exports = { 
    registerInstrumento,
    updateInstrumento,
    getInstrumentoById,
    getAllInstrumentos,
    registerCategory,
};