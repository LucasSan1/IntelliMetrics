const { media, desvpad } = require('./calculosBasicos')

function calculoPlaneza(CMovel, CFixo) {

  const NCmovel = CMovel.length;
  const NCFixo = CFixo.length;

  // Desvio padrao do CMovel
  // Calcula a média dos valores
  const mediaCM = media(CMovel);

  // Calcula o desvio padrãzo da amostra
  const desvioPadraoCM = desvpad(CMovel);
  
  //Desvio padrao do CFixo
  // Calcula a média dos valores
  const mediaCF = media(CFixo);

  // Calcula o desvio padrão da amostra
  const desvioPadraoCF = desvpad(CFixo);

  // Calcula a planeza média das amostras
  const planezaMedia = ((mediaCM + mediaCF) / 2)*0.0003
  const planezaMediaTratada = planezaMedia.toFixed(4)

  const resultados = {
    media_CMovel: mediaCM,
    media_CFixo: mediaCF,
    desvioPadraoCMovel: desvioPadraoCM,
    desvioPadraoCFixo: desvioPadraoCF,
    planezaMedia: planezaMediaTratada
  };

  return resultados;

}

function calculoParalelismo(dadosParalelismo){

  const mediaParalelismo =  media(dadosParalelismo);


  const resultadoMedicao = [dadosParalelismo[0], dadosParalelismo[1], dadosParalelismo[2], mediaParalelismo];

  const NFranjas = Math.max(resultadoMedicao)

  const valormm = NFranjas * 0.0003;

  const resultados = {
    resultado1: dadosParalelismo[0],
    resultado2: dadosParalelismo[1],
    resultaod3: dadosParalelismo[2],
    resultado4: mediaParalelismo,
    nFranjas: NFranjas,
    valorEmMilimetro: valormm
  }
  
  // Resolver NaN
  console.log("valor",valormm)
  console.log("NFrajas", NFranjas)

  return resultados
}

function controleDimensional(dadosControle) {

  const valorPadrao = []
  const resposta = {}

  for(let i = 0; i < dadosControle.length; i++){
    for(let y = 0; y < 3; y++){

      switch(y){
        case 1:
          // tendencia
          break;
        case 2:
          // desvio padrao
          break;
        default:
          // media
      }
    }
  }
}

module.exports = {
  calculoPlaneza,
  calculoParalelismo,
  controleDimensional
};
