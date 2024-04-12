const { media, desvpad } = require("./funcoesCalculos");

function calculoPlaneza(CMovel, CFixo) {
  // Desvio padrao do CMovel
  // Calcula a média dos valores de CMovel
  const mediaCM = media(CMovel);

  // Calcula o desvio padrãzo da amostra CMovel
  const desvioPadraoCM = desvpad(CMovel) * 0.0003;

  //Desvio padrao do CFixo
  // Calcula a média dos valores CFixo
  const mediaCF = media(CFixo);

  // Calcula o desvio padrão da amostra CFixo
  const desvioPadraoCF = desvpad(CFixo) * 0.0003;

  // Calcula a planeza média das amostras
  const planezaMedia = ((mediaCM + mediaCF) / 2) * 0.0003;
  const planezaMediaTratada = parseFloat(planezaMedia.toFixed(4));

  const resultados = {
    media_CMovel: mediaCM,
    media_CFixo: mediaCF,
    desvioPadraoCMovel: desvioPadraoCM,
    desvioPadraoCFixo: desvioPadraoCF,
    planezaMedia: planezaMediaTratada,
  };

  return resultados;
}

function calculoParalelismo(dadosParalelismo) {

  const mediaParalelismo = media(dadosParalelismo);

  const resultadoMedicao = [
    dadosParalelismo[0],
    dadosParalelismo[1],
    dadosParalelismo[2],
    mediaParalelismo,
  ];

  const NFranjas = Math.max(...resultadoMedicao);


  const valormm = NFranjas * 0.0003;
  const valormmTratado = parseFloat(valormm.toFixed(4))

  const resultados = {
    resultado1: dadosParalelismo[0],
    resultado2: dadosParalelismo[1],
    resultaod3: dadosParalelismo[2],
    resultado4: mediaParalelismo,
    nFranjas: NFranjas,
    valorEmMilimetro: valormmTratado,
  };

  return resultados;
}

function controleDimensional(dadosControle, valorPadrao) {

  const mediaValor = [];
  const desvioP = [];
  const tendencias = [];
  let soma = 0

  for (let i = 0; i < dadosControle.length; i++) {

    for (let y = 0; y < 3; y++) {
      switch (y) {
        case 1:
          // tendencia
          const tendencia = (mediaValor[i] - valorPadrao[i]).toFixed(3)
          tendencias.push(parseFloat(tendencia))
          break;
        case 2:
          // desvio padrao
          const desvioPadrao = desvpad(dadosControle[i]);
          desvioP.push(desvioPadrao)
          break;
        default:
          // media
          const mediaV = media(dadosControle[i]);
          mediaValor.push(mediaV);
      }
    }
    soma += Math.pow(desvioP[i], 2) 
  }

  let desvioPadraoMedio = Math.sqrt(soma / 22).toFixed(4)

  const response = {}

  for (let index = 0; index < mediaValor.length; index++) {

    response[`resultado${index + 1}`] = { "media do valor" :mediaValor[index] , "desvio padrao" :desvioP[index] , "tendência ": tendencias[index]}
  }
  response.desvioPadraoMedio = parseFloat(desvioPadraoMedio)

  return response
}

module.exports = {
  calculoPlaneza,
  calculoParalelismo,
  controleDimensional,
};
