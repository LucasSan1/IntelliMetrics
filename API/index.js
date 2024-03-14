const cors =  require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Midlewares da API
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Rotas
const rotas_usuario = require('./routes/usuarios');
const rotas_ordemCalibra = require('./routes/ordemCalibra')
const rotas_clientes = require('./routes/clientes'); 
const rotas_pecas = require('./routes/pecas');


app.use("", rotas_pecas); 
app.use("", rotas_clientes);
app.use("", rotas_usuario); 
app.use("", rotas_ordemCalibra)

app.use("/", (req, res) => {
    res.json("Ta rodando a API, está é a /home");
  });

app.listen(port, () => {
    console.log(`Conectado na porta: ${port}`)
});
