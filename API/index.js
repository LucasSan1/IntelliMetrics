const cors =  require('cors');
const express = require('express');
const app = express();
// const routes = require('./routes/routes');
const port = process.env.PORT || 3000;

//Midlewares da API
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use('/', routes)

app.listen(port, () => {
    console.log(`Conectado na porta: ${port}`)
});