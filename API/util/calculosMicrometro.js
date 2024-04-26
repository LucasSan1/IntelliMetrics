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

function controleDimensional(dadosControle, faixaCalibrada) {
  const list0_25 = [0.000, 2.500, 5.100, 7.700, 10.300, 12.900, 15.000, 17.600, 20.200, 22.800, 25.000];
  const list1_25 = [1.000, 3.500, 6.100, 8.700, 11.300, 13.900, 16.000, 18.600, 21.200, 23.800, 25.000];
  const list25_50 = [25.000, 27.500, 30.100, 32.700, 35.300, 37.900, 40.000, 42.600, 45.200, 47.800, 50.000];
  const list50_75 = [50.000, 52.500, 55.100, 57.700, 60.300, 62.900, 65.000, 67.600, 70.200, 72.800, 75.000];
  const list75_100 = [75.000, 77.500, 80.100, 82.700, 85.300, 87.900, 90.000, 92.600, 95.200, 97.800, 100.000];
  const list100_125 = [100.000, 102.500, 105.100, 107.700, 110.300, 112.900, 115.000, 117.600, 120.200, 122.800, 125.000];
  const list125_150 = [125.000, 127.500, 130.100, 132.700, 135.300, 137.900, 140.000, 142.600, 145.200, 147.800, 150.000];
  const list150_175 = [150.000, 152.500, 155.100, 157.700, 160.300, 162.900, 165.000, 167.600, 170.200, 172.800, 175.000];
  const list175_200 = [175.000, 177.500, 180.100, 182.700, 185.300, 187.900, 190.000, 192.600, 195.200, 197.800, 120.000];
  const mediaValor = [];
  const desvioP = [];
  const tendencias = [];
  let tendencia = 0
  let soma = 0

  for (let i = 0; i < dadosControle.length; i++) {

    for (let y = 0; y < 3; y++) {
      switch (y) {
        case 1:
          switch( faixaCalibrada){
            case 0:
              // tendencia
              tendencia = (mediaValor[i] - list0_25[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;
            case 1:
              tendencia = (mediaValor[i] - list1_25[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;

            case 25:
              tendencia = (mediaValor[i] - list25_50[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;

            case 50:
              tendencia = (mediaValor[i] - list50_75[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;

            case 75:
              tendencia = (mediaValor[i] - list75_100[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;

            case 100:
              tendencia = (mediaValor[i] - list100_125[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;

            case 125:
              tendencia = (mediaValor[i] - list125_150[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;

            case 150:
              tendencia = (mediaValor[i] - list150_175[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;

            case 175:
              tendencia = (mediaValor[i] - list175_200[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              break;
            default:
              return "Não consta faixa calibrada"

          } 
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
  desvpadMedio_g += desvioPadraoMedio

  const response = {}

  for (let index = 0; index < mediaValor.length; index++) {

    response[`resultado${index + 1}`] = { "media do valor" :mediaValor[index] , "desvio padrao" :desvioP[index] , "tendência ": tendencias[index]}
  }
  response.desvioPadraoMedio = parseFloat(desvioPadraoMedio)

  return response
}

// Calculos incerteza

let desvpadMedio_g = 0.7487

const contriIncertezas =[]

function incerteza_AU (){

  const incertezaPD = (desvpadMedio_g /  Math.sqrt(3)).toFixed(5)

  const contriIncerteza = (incertezaPD / 1 * 1)
  contriIncertezas.push(contriIncerteza)
  
  const response = {"incerteza_AU": parseFloat(incertezaPD), "contribuiçao_Incerteza": contriIncerteza}

  return response
}

module.exports = {
  calculoPlaneza,
  calculoParalelismo,
  controleDimensional,
  incerteza_AU
};
