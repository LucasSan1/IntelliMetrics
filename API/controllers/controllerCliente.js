const db = require('../connector/conn');

// Função para registrar um novo cliente no banco de dados
const registerCliente = async(nomeEmpresa, representante, email, telefone, endereco, cnpj, status) => {
   
    // Verifica se já existe um cliente com o mesmo endereço de e-mail
    try {

        const existingCliente = await new Promise((resolve, reject) =>{
            db.query(`SELECT * FROM clientes WHERE email = '${email}'`,
            (error, results) => {
                if (error) {
                    reject(error); // Rejeita a promessa em caso de er ro
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
        CALL criarCliente ( '${nomeEmpresa}', '${representante}', '${email}', '${telefone}', '${endereco}', '${cnpj}', '${status}' ) `)

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

// SELECT * FROM clientes WHERE pk_idCliente = ${id_cliente}`,
// Função para obter um cliente pelo seu ID
const getClienteById = async (id_cliente) => {
    return new Promise((resolve, reject) => {
        db.query(`
        CALL infosClientes (${id_cliente})`),
        (error, results) => {
            if (error) {
                reject(error);
                return;
            } else {
                resolve(results);
            }
        }
        if(id_cliente){
            return 200;
        }else{
            return 500;
        }
        
    }) 
    
}

// Função para deletar um cliente pelo seu email
// DELETE FROM clientes WHERE pk_idCliente = 
const deleteCliente = async (id_cliente) => {
    return new Promise((resolve, reject) => {
        db.query(`
        CALL exlcuirCliente ('${id_cliente}'`),
        (error, results) => {
            if (error) {
                reject (error);
                return;
            } else {
                resolve (results);
            }
        }
    })
}
// ativar cliente desativado
const activateclient = async (email) => {
try{
    // virifica se o cliente esta desativado
    const clienteAtivo = await new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM clientes WHERE email = ${email}`,
        (error, results) => {
            if (error) {
                reject(error); // Rejeita a promessa em caso de erro
                return;
            }
            resolve(results); // Resolve a promessa com os resultados
        });
    })

    if (clienteAtivo.status == "ativo"){
        return 409;
    }else if (!clienteAtivo){
        return 404;
    }

       const ativar = db.query(` CALL reativarCliente('${email}')`)
       if(!ativar){
        return 400;
       }else{
        return 200;
       }
        
    }

catch(error){
    console.log(error);
    return 500;
}

} 

// Função para atualizar informações de um cliente pelo seu ID
const updateCliente = async(id_cliente, nomeEmpresa, representante, email, telefone, endereco, cnpj, status) => {
    return new Promise((resolve, reject) => {
        db.query(`
        CALL modificarCliente ('${id_cliente}', '${nomeEmpresa}', '${representante}', '${email}', '${telefone}', '${endereco}', '${cnpj}', '${status}') `),   
        (error, results) => {
            if (error) {
                reject (error);
                return;
            }
            resolve (results);
              
        }
    })
}

     
module.exports = {
    registerCliente,
    getClientes,
    getClienteById,
    deleteCliente,
    updateCliente,
    activateclient
}
