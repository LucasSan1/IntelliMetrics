const db = require('../connector/conn')

// Função para registrar uma nova ordem de calibração
const registerOrder = async( fk_idCliente, fk_iUsuario, titulo, descricao, dataInicio, dataTermino, contratante, telefone, email)  => {
    try{

        const save =  await //new Promise((resolve, reject) => { 
            db.query(`INSERT INTO ordensCalibracao(fk_idCliente, fk_idUsuario, titulo, descricao, dataInicio, dataTermino, contratante, telefone, email) VALUES('${fk_idCliente}', '${fk_iUsuario}', '${titulo}', '${descricao}', '${dataInicio}', '${dataTermino}', '${contratante}', '${telefone}', '${email}')`)
    //         (error, results) => {
    //             if (error) {
    //                 reject(error);
    //                 return;
    //             }
    //             resolve(results);
    //         }
    //     );
    //   });

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
        db.query(`SELECT * FROM ordensCalibracao WHERE pk_idOsCalibracao= ${id_certificate}`,
            (erro, results) => {
                if (erro) {
                    reject(erro);
                    return;
                }
                resolve(results);
            }
        );
      });

}

module.exports = { 
   registerOrder,
   getCertificateOrders,
   getOrdersById
  };