const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../connector/conn");

dotenv.config();

const middlewareValidarRota = async (req, res, next) => {
    const { email } = req.body

    db.query(`SELECT * FROM usuarios WHERE email = '${email}'`, 
        (error, results) => {
            if (error) {
                return res.status(500).json({ message: 'Erro ao buscar usuário' });
            } else if (results.length == 0) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            } else {
                const token = results[0].token;
                if(token == null){
                    res.status(401).json("Não autorizado")
                } else{
                    const cargo = results[0].cargo;
                    req.cargo = cargo
                    next()
            }}
        }
    )
};

module.exports = {
    middlewareValidarRota
};
