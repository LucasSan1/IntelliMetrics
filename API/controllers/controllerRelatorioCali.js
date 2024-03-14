const db = require('../connector/conn')

const registerReport = async(  fk_idCliente, fk_idUsuario, titulo, codigoOrdem, reponsavel, tipo, peca, dataInicio, dataTermino, descricao )  => {
    try{

        const save =  await //new Promise((resolve, reject) => { 
            db.query(`INSERT INTO ---Nome tabela----(fk_idCliente, fk_idUsuario, titulo, codigoOrdem, responsavel, tipo, peca, dataInicio, dataTermino, descricao) VALUES('${fk_idCliente}', '${fk_idUsuario}', '${titulo}', '${codigoOrdem}', '${reponsavel}', '${tipo}', '${peca}' '${dataInicio}', '${dataTermino}', '${descricao}')`)
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

const getAllReports = async() => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ---Nome tabela---`,
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

const getReportById = async(id_report) => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ---Nome tabela--- WHERE pk_idRelatorio = ${id_report}`,
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
    registerReport,
    getAllReports,
    getReportById
}