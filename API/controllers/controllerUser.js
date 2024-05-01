const db = require('../connector/conn');

const createUser = async (nome, email, cargo) => {
    try {
        if (!nome || !email || !cargo) {
            return 400
        }
        // Verificar se um usuário com o e-mail fornecido já existe
        const verificarUser = await new Promise((resolve, reject) => {
            db.query(`SELECT * FROM usuarios WHERE email = '${email}'`,
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                }
            );
        });
        if (verificarUser.length > 0) {
            return 409;
        }
        
        //Se não existir nenhum usuario com esse email cadastrado, inserir os dados do novo usuario 
        const inserir = db.query(`call criarUsuario('${nome}', '${email}', '${cargo}')`)
        
        if (inserir) {
            return 200
        } else {
            return 400
        }

    } catch (error) {
        return 500;
    }

}

const login = async (email, senha) => {
    try {
        if (!email || !senha) {
            return 401
        }
        return await new Promise((resolve, reject) => {
            db.query(`SELECT * FROM usuarios WHERE email = '${email}' and senha = '${senha}'`,
                (erro, results) => {
                    if (erro) {
                        reject(500);
                        return;
                    }
                    else if (results.length === 0) {
                        resolve(400)
                        return
                    }
                    resolve(results)
                }
            );
        });
    } catch (error) {
        return 500;
    }
};

// busca todos os colaboradores
const getCol = async () => {
    return await new Promise((resolve, reject) => {
        db.query(`SELECT * FROM usuarios`,
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
// busca o colaborador selecionado
const getColById = async (idUser) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM usuarios WHERE pk_idUsuario = '${idUser}'`,
            (erro, results) => {
                if (erro) {
                    reject(erro);
                    return;
                }
                resolve(results)
            }
        );
    });
}
// deleta o colaborador selecionado 
const deleteCol = async (idUser, nome) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM usuarios WHERE pk_idUsuario = ${idUser}`,
            (erro, results) => {
                if (erro) {
                    reject(500);
                    return;
                }
                else if (results.affectedRows === 0) {
                    resolve(400)
                }
                resolve(200)
            }
        );
    });
}
// atualiza o cadastro do colaborador 
const putCol = async (idUser, email, senha, nome) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE usuarios SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE pk_idUsuario = '${idUser}'`,
            (erro, results) => {
                if (erro) {
                    reject(erro);
                    return;
                }
                else if (results.affectedRows == 0) {
                    resolve(400)
                }
                resolve(results)
            }
        );
    });
}
module.exports = {
    createUser,
    getCol,
    getColById,
    deleteCol,
    putCol,
    login
}