const db = require('../connector/conn')

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

        if(!save){
            return 400;
        } else {
            return 200;
        }

    } catch(error){
        console.log(error)
        return 500;
    }
    
}

const getCertificateOrders = async() => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ordensCalibracao`,
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