// Função para registrar um novo instrumento
const registerInstrumento = async(fk_idCliente, fk_idOsCalibracao, fk_idTipo, nSerie, fabricante, resolucao, unidadeMedida, faixaNominal) => {
    const save = db.query(` INSERT INTO instrumentos(fk_idCliente, fk_idOsCalibracao, fk_idTipo, nSerie, fabricante, resolucao, unidadeMedida, faixaNominal) values ( '${fk_idCliente}', '${fk_idOsCalibracao}', '${fk_idTipo}', '${nSerie}', '${fabricante}', '${resolucao}', '${unidadeMedida}', '${faixaNominal}')`);

    // Verifica se a inserção foi bem-sucedida
    if (!save){
        return 400; // Retorna status 400 se não foi bem-sucedido
    } else {
        return 200; // Retorna status 200 se foi bem-sucedido
    }
}

// Função para obter todos os instrumentos
const getAllInstrumentos = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM instrumentos`,
        (error, results) => {
            if(error) {
                reject(error); // Rejeita a promessa em caso de erro
                return;
            }
            resolve(results); // Resolve a promessa com os resultados
        });
    });
}

// Função para deletar um instrumento pelo seu ID
const deleteInstrumento = async (id_instrumento) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM instrumentos WHERE pk_idinstrumento = ${id_instrumento}`,
        (error, results) =>{
            if (error) {
                reject(error); // Rejeita a promessa em caso de erro
                return;
            }
            resolve(results); // Resolve a promessa com os resultados
        });
    });
}

// Função para atualizar informações de um instrumento pelo seu ID
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
    `);

    // Verifica se a atualização foi bem-sucedida
    if (update.affectedRows === 0) {
        return 404; // Retorna status 404 se não foi possível encontrar o instrumento para atualização
    } else {
        return 200; // Retorna status 200 se foi bem-sucedido
    }
}

module.exports = { 
    registerInstrumento,
    getAllInstrumentos,
    deleteInstrumento,
    updateInstrumento
};