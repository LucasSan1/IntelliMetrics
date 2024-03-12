const cors =  require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Midlewares da API
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Rotas
const rotas_clientes = require('./routes/clientes');
app.use("", rotas_clientes); 

const rotas_pecas = require('./routes/pecas');
app.use("", rotas_pecas); 


app.use("/", (req, res) => {
    res.json("Ta rodando a API, está é a /home");
  });

app.listen(port, () => {
    console.log(`Conectado na porta ${port}`)
});