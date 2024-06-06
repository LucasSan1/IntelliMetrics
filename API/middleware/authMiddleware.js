const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../connector/conn");

dotenv.config();

const middlewareValidarRota = async (req, res, next) => {

    const token = req.headers.authorization;
    
    if(!token){
        return res.status(401).json('Token não fornecido');
    } else{
        const tokenJWT = token.split(' ')[1];
       
        db.query(`SELECT * FROM usuarios WHERE token = ?`, [tokenJWT], 
            (error, results) => {
                if(results.length == 0){
                    return res.status(403).json('Token invalido');
                } else{
                    const cargo = results[0].cargo;
                    req.cargo = cargo

                    next()
                }      
            })
      }
};

module.exports = {
    middlewareValidarRota
};
