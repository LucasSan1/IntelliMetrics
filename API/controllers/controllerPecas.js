const db = require("../connector/conn");

// Função para registrar uma nova peça
const registerPeca = async(fk_idOsMedicao, fk_idCliente, nome, material, nDesehno) => {
    
    // Insere os dados da peça no banco de dados
    const save = db.query(`CALL cadastrarPeca
     ( '${fk_idOsMedicao}', '${fk_idCliente}' ,'${nome}' ,'${material}' ,'${nDesehno} ') `)

    // Verifica se a inserção foi bem-sucedida
    if (!save) {
        return 400; // Retorna 400 se não foi bem-sucedida
    } else {
        return 200; // Retorna 200 se foi bem-sucedida
    }
}

// Função para obter todas as peças
const getAllPecas = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM pecas`,
        (error, results) => {
            if (error) {
                reject(error); // Rejeita a promessa em caso de erro
                return;
            }
            resolve(results); // Resolve a promessa com os resultados
        }
        )
    })
}

// Função para obter uma peça pelo seu ID
const getPecaById = async (id_peca) => {
    return new Promise((resolve, reject) => {
        db.query(`CALL infosPeca ${id_peca}`,
        (error, results) => {
            if (error) {
                reject(error); // Rejeita a promessa em caso de erro
                return;
            }
            resolve(results); // Resolve a promessa com os resultados
        }
        )
    })
}

// alterar peça
const updatePeca = async (idPeca, idOs, idCliente, alterarNome, alterarMaterial, alterarDesenho, alterarDescricao) => {
    return new Promise((resolve, reject) => {
        db.query(`CALL alterarPeca ${idPeca, idOs, idCliente, alterarNome, alterarMaterial, alterarDesenho, alterarDescricao}`,
        (error, results) => {
            if(error){
                reject(error);
                return;
            }
            resolve(results);
        }
        )
    })
}

module.exports = {
    registerPeca,
    getAllPecas,
    getPecaById,
    updatePeca
}
