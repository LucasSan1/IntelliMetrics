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
const rotas_ordemCertificado = require('./routes/ordemCertificadoCali')
const rotas_clientes = require('./routes/clientes'); 
const rotas_pecas = require('./routes/pecas');
const rotas_ordemRelatorio = require('./routes/ordemRelatorioCali')
const rotas_instrumentos = require('./routes/instrumentos');
const certificado_paquimetro = require('./routes/calculoPaquimetro')
const certificado_micrometro =  require('./routes/calculoMicrometro')


app.use("", rotas_pecas); 
app.use("", rotas_clientes);
app.use("", rotas_usuario); 
app.use("", rotas_ordemCertificado)
app.use("", rotas_ordemRelatorio)
app.use("", rotas_instrumentos); 
app.use("", certificado_paquimetro)
app.use("", certificado_micrometro)

app.use("/", (req, res) => {
    res.json("Ta rodando a API, está é a /home");
  });

app.listen(port, () => {

    console.log(`Conectado na porta ${port}`)
});

