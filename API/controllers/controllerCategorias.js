// CREATE TABLE categorias(
// 	pk_idCategoria int  PRIMARY KEY AUTO_INCREMENT,
//     nome varchar(30) NOT NULL
// );

const db = require('../connector/conn');

const registerCategoria = async(nome) => {
    
    const save = db.query(`
    CALL cadastrarCategoria( '${nome}' ) `);

    if (!save) {
        return 400;
    } else {
        return 200;
    }
}

const updateCategoria = async(idCategoria, nome) => {
    const update = await db.query(`
    CALL modificarCategoria ('${idCategoria}', '${nome}' ) `);

    if (update.affectedRows === 0) {
        return 404;
    } else {
        return 200;
    }
}

module.exports = {
    registerCategoria,
    updateCategoria
}