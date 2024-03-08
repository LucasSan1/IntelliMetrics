const db = require('../connector/conn')

const controllerMembro = async(nome, email, cargo) => {
    try{
        const save = db.query(`INSERT INTO membro (nome, email, cargo) value ('${nome}', '${email}', '${cargo}')`)

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

module.exports = { 
    controllerMembro
};