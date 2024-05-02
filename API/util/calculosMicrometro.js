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

function controleDimensional(dadosControle, faixaCalibrada, req) {
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
  let ultimoValor = req.ultimoValor
  
  for (let i = 0; i < dadosControle.length; i++) {

    for (let y = 0; y < 3; y++) {
      switch (y) {
        case 1:
          switch( faixaCalibrada){
            case 0:
              // tendencia
              tendencia = (mediaValor[i] - list0_25[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list0_25[10]
              req.ultimoValor = ultimoValor
              break;
            case 1:
              tendencia = (mediaValor[i] - list1_25[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list1_25[10]
              req.ultimoValor = ultimoValor
              break;

            case 25:
              tendencia = (mediaValor[i] - list25_50[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list25_50[10]
              req.ultimoValor = ultimoValor
              break;

            case 50:
              tendencia = (mediaValor[i] - list50_75[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list50_75[10]
              req.ultimoValor = ultimoValor
              break;

            case 75:
              tendencia = (mediaValor[i] - list75_100[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list75_100[10]
              req.ultimoValor = ultimoValor
              break;

            case 100:
              tendencia = (mediaValor[i] - list100_125[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list100_125[10]
              req.ultimoValor = ultimoValor
              break;

            case 125:
              tendencia = (mediaValor[i] - list125_150[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list125_150[10]
              req.ultimoValor = ultimoValor
              break;

            case 150:
              tendencia = (mediaValor[i] - list150_175[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list150_175[10]
              req.ultimoValor = ultimoValor
              break;

            case 175:
              tendencia = (mediaValor[i] - list175_200[i]).toFixed(3)
              tendencias.push(parseFloat(tendencia))
              ultimoValor = list175_200[10]
              req.ultimoValor = ultimoValor
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

  let desvioPadraoMedio = Math.sqrt(soma / 22)
  req.desvpadMedio += desvioPadraoMedio

  const response = {} 

  for (let index = 0; index < mediaValor.length; index++) {

    response[`resultado${index + 1}`] = { "media do valor" :mediaValor[index] , "desvio padrao" :desvioP[index] , "tendência ": tendencias[index]}
  }
  response.desvioPadraoMedio = parseFloat(desvioPadraoMedio.toFixed(4))

  return response
}

// Calculos incerteza

const contriIncertezas =[]

function incerteza_medAU (req){

  const incertezaPD = (req.desvpadMedio /  Math.sqrt(3)).toFixed(5)

  const contriIncerteza = (incertezaPD / 1 * 1)
  
  const response = {"incerteza_AU": parseFloat(incertezaPD), "contribuiçao_Incerteza": contriIncerteza}

  return response
}

// function incerteza_UP (){

//   const incertezaPD = (100.000/1500) / 1000 
// }


function incerteza_medERES (valorDivResolucao, dig_anal){

  let incertezaEres = 0

  switch(dig_anal){
    case 0 :
      incertezaEres = valorDivResolucao / 10
      break;
    case 1 :
      incertezaEres = valorDivResolucao / 2
      break;
  }

  const contriIncerteza = incertezaEres / Math.sqrt(3)

  const response = {"incerteza_medERES": parseFloat(incertezaEres.toFixed(5)), "contribuição_Incerteza": parseFloat(contriIncerteza.toFixed(5))}

  return response
 
}

function incertez_medl1 (req){

  const incertezamedl1 = req.ultimoValor * 0.00001 * 2

  const contriIncerteza = incertezamedl1 / Math.sqrt(3)

  const response = {"incertez_medl1": parseFloat(incertezamedl1.toFixed(5)), "contribuição_Incerteza": parseFloat(contriIncerteza.toFixed(5))}

  return response
}

function incertez_medl2 (req){

  const incertezamedl2 = req.ultimoValor *((0.0000115+0.00001)/2)*2

  const contriIncerteza = incertezamedl2 / Math.sqrt(3)
  
  const response = {"incertez_medl2": parseFloat(incertezamedl2.toFixed(5)), "contribuição_Incerteza": parseFloat(contriIncerteza.toFixed(5))}

  return response
}

function incerteza_medPAR (valorDivResolucao, dig_anal){

  let incertezaPar = 0 
  
  switch (dig_anal){
    case 0:
      incertezaPar = valorDivResolucao / 4
      break;
    case 1:
      incertezaPar = 0
      break;
  }

  const contriIncerteza = incertezaPar / (Math.sqrt(3) * 1)

  const response = {"incerteza_medPAR": parseFloat(incertezaPar.toFixed(5)), "contribuoção_incereteza": parseFloat(contriIncerteza.toFixed(5))}

  return response
}

function incertez_medEader (req){

  let incertezaPD = 0

  switch(req.ultimoValor){

    case 50:
      incertezaPD = 0.00019
      break;
    case 75:
      incertezaPD = 0.00021
      break;
    case 100:
      incertezaPD = 0.00023
      break;
    case 125:
      incertezaPD = 0.00024
      break;
    case 150:
      incertezaPD = 0.00034
      break;
    case 175:
      incertezaPD = 0.00036
      break
    case 200:
      incertezaPD = 0.00037
      break;
    default:
      return "Fora de faixa"
  }

  const response = {"incertezaPD": parseFloat(incertezaPD)}

  return response

}

module.exports = {
  calculoPlaneza,
  calculoParalelismo,
  controleDimensional,
  incerteza_medAU,
  incerteza_medERES,
  incertez_medl1,
  incertez_medl2,
  incerteza_medPAR,
  incertez_medEader
};
