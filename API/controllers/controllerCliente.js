const db = require('../connector/conn');


// Função para registrar um novo cliente no banco de dados
const registerCliente = async(nomeEmpresa, representante, email, telefone, endereco, cnpj) => {
   
    try {
         // Verifica se já existe um cliente com o mesmo endereço de e-mail
        const existingCliente = await new Promise((resolve, reject) =>{
            db.query(`SELECT * FROM clientes WHERE email = '${email}'`,
            (error, results) => {
                if (error) {
                    reject(error); // Rejeita a promessa em caso de erro
                    return;
                }
                resolve(results); // Resolve a promessa com os resultados
            });
        })

        if (existingCliente.length > 0) {
            return 409;
          }   
          
        // Insere os detalhes do novo cliente no banco de dados
        const save = db.query(`
        INSERT INTO clientes (nome, representante, email, telefone, endereço, cnpj)
        values ('${nomeEmpresa}', '${representante}', '${email}', '${telefone}', '${endereco}', '${cnpj}') `)

        if (!save){
            return 400; // Retorna 400 (Bad Request) se a operação der errado
        } else {
            return 200;   // Retorna 200 (OK) se a operação for bem-sucedida
        }

    } catch (error) {
        console.log(error);
        return 500;  // Retorna 500 (Internal Server Error) se ocorrer algum erro durante a operação
    }
}

// Função para obter todos os clientes
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

// Função para obter um cliente pelo seu ID
const getClienteById = async (id_cliente) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM clientes WHERE pk_idCliente = ${id_cliente}`,
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

// Função para deletar um cliente pelo seu ID
const deleteCliente = async (id_cliente) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM clientes WHERE pk_idCliente = ${id_cliente}`,
        (error, results) => {
            if (error) {
                reject (error);
                return;
            } else {
                resolve (results);
            }
        })
    })
}

// Função para atualizar informações de um cliente pelo seu ID
const updateCliente = async(id_cliente, nome, representante, email, telefone, endereço, cnpj) => {

    return new Promise((resolve, reject) => {
        db.query(`UPDATE clientes SET nome = "${nome}", representante = "${representante}", email = "${email}", telefone = "${telefone}", endereço = "${endereço}", cnpj = "${cnpj}" WHERE pk_idCliente = "${id_cliente}"`,
        (error, results) => {
            if (error) {
                reject (error);
                return;
            } else {
                resolve (results);
            }
            
        })
    })
}

     
module.exports = {
    registerCliente,
    getClientes,
    getClienteById,
    deleteCliente,
    updateCliente
}