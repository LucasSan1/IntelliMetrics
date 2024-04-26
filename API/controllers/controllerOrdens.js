const db = require('../connector/conn')

// Função para registrar uma nova ordem de calibração
const registerOrder = async(fk_idCliente, fk_idUsuario, titulo, tipo, descricao, dataInicio, dataTermino, contratante, email, telefone, status)  => {
    try{
        const save =  await new Promise((resolve, reject) =>{ 
                db.query(`
                CALL criarOrdens( '${fk_idCliente}', '${fk_idUsuario}', '${titulo}', '${tipo}', '${descricao}', '${dataInicio}', '${dataTermino}', '${contratante}', '${email}', '${telefone}', '${status}' )
                `),
            (error, results) => {
                if (error) {
                    reject(error);
                    return;
                } else {
                    resolve(results);
                }
            }
      });

     // Verificar se a inserção foi bem-sucedida
        if(!save){
            return 400; // Retorna status 400 se não foi bem-sucedido
        } else {
            return 200; // Retorna status 200 se foi bem-sucedido
        }

    } catch(error){
        console.log(error)
        return 500; // Retorna status 500 em caso de erro
    }   
}

// Função para obter todas as ordens de calibração
const getCertificateOrders = async() => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ordensCalibracao`,
          (erro, results) => {
            if (erro) {
              reject(erro); // Rejeita a promessa em caso de erro
              return;
            }
            resolve(results); // Resolve a promessa com os resultados
          }
        );
      });
}

// Função para obter uma ordem de calibração pelo seu ID 
const getOrdersById = async(id_certificate) => {
    return new Promise((resolve, reject) => {
        db.query(`
        CALL infosOrdens (${id_certificate})
        `),
            (erro, results) => {
                if (erro) {
                    reject(erro);
                    return;
                }
                resolve(results);
            }
        ;
      });

}

const updateOrders = async(pk_idOs, fk_idCliente, fk_idUsuario, titulo, tipo, descricao, dataInicio, dataTermino, contratante, email, telefone) =>{
    return new Promise((resolve, reject) => {
        db.query(`
        CALL modificarOrdem( '${pk_idOs}', '${fk_idCliente}', '${fk_idUsuario}', '${titulo}', '${tipo}', '${descricao}', '${dataInicio}', '${dataTermino}', '${contratante}', '${email}', '${telefone}' )
        `),
        (error, results) => {
            if (error){
                reject (error);
                return;
            } else {
                resolve (results)
            }
        }
    })
}

const ordemConcluida = async(id_certificate) => {
    try {
        const concluirOrdem = await db.query(`CALL concluirOrdem '${id_certificate}' `)

        if (concluirOrdem.lenght == 9){
            return 200;
        }
        const desmarcarOrdemComoConcluida = db.query(`
        CALL desmarcarOrdemComoConcluida ('${id_certificate}')
        `)
        if (!desmarcarOrdemComoConcluida){
            return 400;
        } else {
            return 200;
        }
    } catch (error) {
        console.log(error);
        return 500;
    }
}

module.exports = { 
   registerOrder,
   getCertificateOrders,
   getOrdersById,
   updateOrders,
   ordemConcluida
  };