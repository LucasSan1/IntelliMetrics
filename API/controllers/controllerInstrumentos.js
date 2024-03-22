const db = require('../connector/conn');

    const registerInstrumento = async(fk_idCliente, fk_idOsCalibracao, fk_idTipo, nSerie, fabricante, resolucao, unidadeMedida, faixaNominal) => {

        const save = db.query(` INSERT INTO instrumentos(fk_idCliente, fk_idOsCalibracao, fk_idTipo, nSerie, fabricante, resolucao, unidadeMedida, faixaNominal) values ( '${fk_idCliente}', '${fk_idOsCalibracao}', '${fk_idTipo}', '${nSerie}', '${fabricante}', '${resolucao}', '${unidadeMedida}', '${faixaNominal}')`)

        if (!save){
            return 400;
        } else {
            return 200;
        }
    }

const getAllInstrumentos = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM instrumentos`,
        (error, results) => {
            if(error) {
                reject(error);
                return;
            }
            resolve(results);
        }
        )
    })
}

const deleteInstrumento = async (id_instrumento) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM instrumentos WHERE pk_idinstrumento = ${id_instrumento}`,
        (error, results) =>{
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        }
        )
    })
}

const updateInstrumento = async(id_instrumento, fk_idCliente, fk_idOsCalibracao, fk_idTipo, nSerie, fabricante, resolucao, unidadeMedida, faixaNominal) => {

    const update = await db.query(`
    UPDATE instrumentos
    SET fk_idCliente = ${fk_idCliente},
        fk_idOsCalibracao = ${fk_idOsCalibracao},
        fk_idTipo = ${fk_idTipo},
        nSerie = ${nSerie},
        fabricante = ${fabricante}, 
        resolucao = ${resolucao},
        unidadeMedida = ${unidadeMedida},
        faixaNominal = ${faixaNominal}         
    WHERE pk_idinstrumento = ${id_instrumento}
    `)

    if (update.affectedRows === 0) {
        return 404;
    } else {
        return 200;
    }
}


module.exports = {
    registerInstrumento,
    getAllInstrumentos,
    deleteInstrumento,
    updateInstrumento
}