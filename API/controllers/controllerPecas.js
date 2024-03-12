const db = require("../connector/conn");

const registerPeca = async(fk_idOsMedicao, fk_idCliente, nome, material, nDesehno) => {
    
    const save = db.query(`INSERT INTO pecas(fk_idOsMedicao, fk_idCliente, nome, material, nDesehno) value ( '${fk_idOsMedicao}', '${fk_idCliente}' ,'${nome}' ,'${material}' ,'${nDesehno} ') `)

    if (!save) {
        return 400;
    } else {
        return 200;
    }
}

const getAllPecas = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM pecas`,
        (error, results) => {
            if (error) {
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
    getAllPecas
}