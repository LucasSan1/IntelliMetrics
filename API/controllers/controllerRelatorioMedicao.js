const Model = require('../model/model');

function infoRelatoirios (lista){
  
  const arraySalvar = []

  for(let i = 0; i < 10 ; i++){   
      arraySalvar.push(lista[i])

  }
  console.log(arraySalvar)

}

module.exports = {
  infoRelatoirios
};
