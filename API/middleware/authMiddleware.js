const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../connector/conn");

dotenv.config();

const middlewareValidarJWT = async (req, res, next) => {
    const token = req.headers["authorization"];
   
    // Efetuando a validação do JWT:
    const decodedToken = jwt.decode(token, { complete: true })
    console.log("é tu né safado", decodedToken)
    if(decodedToken == null){
        res.status(401).json("Não autorizado").end();
    } else{
        jwt.verify(token, process.env.CHAVEPRIVADA, async (err, decoded) => {
            if (err) {
                res.status(401).json("Não autorizado").end();
                return;
            }
    
            // O objeto "req" é alterado abaixo
            // recebendo uma nova propriedade userInfo.
            // Este mesmo objeto chegará na rota
            // podendo acessar o req.userInfo
            req.userInfo = decoded;

            // Verificar o cargo do usuário no banco de dados
            try {

                const email = req.body.email 

                const user = await getUserByEmail(email);
                console.log(user.cargo)
                if (!user) {
                    res.status(401).json("Usuario não encontrado").end();
                    return;
                }
                // Verificar o cargo do usuário
                if (user.cargo == "gestor") {
                    // Se o cargo for gestor, concede acesso a todas as rotas
                    next();
                } else if (user.cargo == "tecnico") {
                    // Se o cargo for tecnico, concede acesso restrito
                    if (isRouteRestricted(req.originalUrl)) {
                        res.status(401).json("Acesso negado").end();
                        return;
                    }
                    next();
                } else {
                    // Se o cargo não for gestor ou tecnico, nega o acesso
                    res.status(403).json("Acesso negado").end();
                }
            } catch (error) {
                console.error("Error:", error);
                res.status(500).json("Erro interno do servido").end();
            }
        });
    }
};

// Função para buscar usuário por email
const getUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM usuarios WHERE email = ?`, [email], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
};

// Função para verificar se a rota está restrita para técnicos
const isRouteRestricted = (url) => {
    // Defina as rotas restritas para técnicos
    const restrictedRoutes = ["/disableUser", "/enableUser", "/updateUser"];
    return restrictedRoutes.includes(url);
};

module.exports = {
    middlewareValidarJWT
};
