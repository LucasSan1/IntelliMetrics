const db = require('../connector/conn');

const getCertificate = async( idInstrumento) =>{
  return new Promise((resolve, reject) =>{
      db.query(` CALL infoscertificado('${idInstrumento}')`,
          (error, results) => {
              if (error){
                  reject (error);
                  return;
              } else {
                  resolve (results)
              }
          }
      );
  });
}

module.exports = {getCertificate};