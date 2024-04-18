const db = require('../connector/conn')

// Função para registrar um novo relatório
const registerReport = async(  fk_idCliente, fk_idUsuario, titulo, codigoOrdem, reponsavel, tipo, peca, dataInicio, dataTermino, descricao )  => {
    try{

        const save =  await //new Promise((resolve, reject) => { 
            db.query(`CALL criarRelatorio('${fk_idCliente}', '${fk_idUsuario}', '${titulo}', '${codigoOrdem}', '${reponsavel}', '${tipo}', '${peca}' '${dataInicio}', '${dataTermino}', '${descricao}')`)
      
    // Verifica se a inserção foi bem-sucedida 
        if(!save){
            return 400; // Retorna 400 se não foi bem-sucedida
        } else {
            return 200; // Retorna 200 se foi bem-sucedida
        }

    } catch(error){
        console.log(error)
        return 500; // Retorna 500 em caso de erro

    }
    
}

// Função para obter todos os relatórios
const getAllReports = async() => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ---Nome tabela---`,
        // call --nome da procedure-- (parametros)
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

// Função para obter um relatório pelo seu ID
const getReportById = async(id_report) => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM ---Nome tabela--- WHERE pk_idRelatorio = ${id_report}`,
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

// função para obter as informações de dentro do relatório
const getallinfos = async(idPeca, infoUsuario, InfoPeca, infoMaterial, InfoDesenho, infoDescricao) =>{
    return new Promise((resolve, reject) => {
        db.query(`CALL infoRelatorio (${idPeca, infoUsuario, InfoPeca, infoMaterial, InfoDesenho, infoDescricao})`),
        (error, results) => {
            if(error){
                reject(error);
                return;
            }
            resolve(results);
        };
    });
}
    



module.exports = {
    registerReport,
    getAllReports,
    getReportById
}