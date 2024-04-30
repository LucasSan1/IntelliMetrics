const db = require("../connector/conn");

// Função para registrar uma nova peça
const registerPeca = async(fk_idOs  , fk_idCliente, nome, material, nDesenho, descricao) => {
    
    // Insere os dados da peça no banco de dados
    const save = db.query(`CALL cadastrarPeca
     ( '${fk_idOs}', '${fk_idCliente}' ,'${nome}' ,'${material}' ,'${nDesenho}, ${descricao} ') `)

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
const updatePeca = async (idPeca, fk_idOs, fk_idCliente, nome, material, nDesenho, descricao) => {
    const update = await db.query(`
    CALL alterarPeca ('${idPeca}', '${fk_idOs}', '${fk_idCliente}', '${nome}', '${material}', '${nDesenho}', '${descricao}' ) `)
        if (update.affectedRows === 0) {
            return 404; // Retorna status 404 se não foi possível encontrar a peça para atualização
        } else {
            return 200; // Retorna status 200 se foi bem-sucedido
        } 
}

module.exports = {
    registerPeca,
    getAllPecas,
    getPecaById,
    updatePeca
}
