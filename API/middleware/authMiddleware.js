const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config()
const middlewareValidarJWT = (req, res, next) => {
    const token = req.headers["authorization"];
   
    // Efetuando a validação do JWT:
    const decodedToken = jwt.decode(token, { complete: true })
    console.log("é tu né safado", decodedToken)
    if(decodedToken == null){
        res.status(401).json("Not authorization").end();
    } else{
        jwt.verify(token, process.env.CHAVEPRIVADA, (userInfo, err) => {
            if (err) {
                res.status(401).json("Not authorization").end();
                return;
            }
    
            // O objeto "req" é alterado abaixo
            // recebendo uma nova propriedade userInfo.
            // Este mesmo objeto chegará na rota
            // podendo acessar o req.userInfo
            req.userInfo = userInfo;
            next();
        });
    }
   
};



module.exports = {
    middlewareValidarJWT
};