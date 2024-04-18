const db = require('../connector/conn');

// Função para registrar um novo usuário
const registerUser = async(nome, email, cargo, status) => {
    try{
        // Verificar se um usuário com o e-mail fornecido já existe
        const existingUser = await new Promise((resolve, reject) => {
            db.query(`SELECT * FROM usuarios WHERE email = '${email}'`,
                (error, results) => {
                    if (error) {
                        reject(error); // Rejeita a promessa em caso de erro
                        return;
                    }
                    resolve(results); // Resolve a promessa com os resultados
                }
            );
        });

        // Se já existir um usuário com o mesmo e-mail, retorna 409 (Conflito)
        if (existingUser.length > 0) {
            return 409;
        }

        // Se não existir nenhum usuário com esse e-mail cadastrado, inserir os dados do novo usuário 
        const save = db.query(`INSERT INTO usuarios (nome, email, cargo, status) value ('${nome}', '${email}', '${cargo}', '${status}' )`);

        // Verifica se a inserção foi bem-sucedida
        if(!save){
            return 400; // Retorna 400 se não foi bem-sucedida
        } else {
            return 200; // Retorna 200 se foi bem-sucedida
        }

    } catch(error) {
        console.log(error); // Registra o erro no console
        return 500; // Retorna 500 em caso de erro
    }

}

// Função para obter todos os usuários
const getUsers = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM usuarios`,
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

// Função para obter um usuário pelo seu ID
const getUserByID = async (id_user) => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM usuarios WHERE pk_idUsuario = ${id_user}`,
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

// Função para deletar um usuário pelo seu ID
const deleteUser = async (id_user) =>{
    return new Promise((resolve, reject) => {
        db.query(`Delete FROM usuarios WHERE pk_idUsuario = ${id_user}`,
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

module.exports = { 
    registerUser,
    getUsers,
    getUserByID,
    deleteUser
};
