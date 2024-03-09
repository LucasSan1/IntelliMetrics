const db = require('../connector/conn')

const registerUser = async(nome, email, cargo) => {
    try{

      // Verificar se um usuário com o e-mail fornecido já existe
      const existingUser = await new Promise((resolve, reject) => {
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

      if (existingUser.length > 0) {
        return 409;
      }   

      //Se não existir nenhum usuario com esse email cadastrado, inserir os dados do novo usuario 
        const save = db.query(`INSERT INTO usuarios (nome, email, cargo) value ('${nome}', '${email}', '${cargo}')`)

        if(!save){
            return 400;
        } else{
            return 200;
        }

    } catch(error) {
        console.log(error)
        return 500;
    }

}

const getUsers = async () => {

    return new Promise((resolve, reject) => {
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

const getUserByID = async (id_user) => {

  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM usuarios WHERE pk_idUsuario = ${id_user}`,
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
    
const deleteUser = async (id_user) =>{
  return new Promise((resolve, reject) => {
    db.query(`Delete FROM usuarios WHERE pk_idUsuario = ${id_user}`,
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
  registerUser,
  getUsers,
  getUserByID,
  deleteUser
};