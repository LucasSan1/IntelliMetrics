const db = require('../connector/conn');

const registerCliente = async(pk_idCliente, nome, representante, email, telefone, endereço, cnpj) => {
    try {
        const existingCliente = await new Promise((resolve, reject) =>{
            db.query(`SELECT * FROM clientes WHERE email = '${email}'`),
            (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            }
        })
 
        const save = db.query(`INSERT INTO clientes (pk_idCliente, nome, representante, email, telefone, endereço, cnpj) value ('${pk_idCliente}', '${nome}', '${representante}', '${email}', '${telefone}', '${endereço}', '${cnpj}') `)

        if (!save){
            return 400;
        } else {
            return 200;
        }

    } catch (error) {
        console.log(error);
        return 500;
    }
}

const getClientes = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM clientes`,
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


const getClienteById = async (pk_idCliente) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM clientes WHERE pk_idCliente = ${pk_idCliente}`,
        (error, results) => {
            if (error) {
                reject(error);
                return;
            } else {
                resolve(results);
            }
        }
        )
    }) 
}

const deleteCliente = async (pk_idCliente) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM clientes WHERE pk_idCliente = ${pk_idCliente}`,
        (error, results) => {
            if (error) {
                reject (error);
                return;
            } else {
                resolve (results);
            }
        }
        )
    })
}

module.exports = {
    registerCliente,
    getClientes,
    getClienteById,
    deleteCliente
}