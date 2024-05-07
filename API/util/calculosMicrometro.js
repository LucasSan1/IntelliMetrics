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
  const valormmTratado = parseFloat(valormm.toFixed(4));

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
  const list0_25 = [
    0.0, 2.5, 5.1, 7.7, 10.3, 12.9, 15.0, 17.6, 20.2, 22.8, 25.0,
  ];
  const list1_25 = [
    1.0, 3.5, 6.1, 8.7, 11.3, 13.9, 16.0, 18.6, 21.2, 23.8, 25.0,
  ];
  const list25_50 = [
    25.0, 27.5, 30.1, 32.7, 35.3, 37.9, 40.0, 42.6, 45.2, 47.8, 50.0,
  ];
  const list50_75 = [
    50.0, 52.5, 55.1, 57.7, 60.3, 62.9, 65.0, 67.6, 70.2, 72.8, 75.0,
  ];
  const list75_100 = [
    75.0, 77.5, 80.1, 82.7, 85.3, 87.9, 90.0, 92.6, 95.2, 97.8, 100.0,
  ];
  const list100_125 = [
    100.0, 102.5, 105.1, 107.7, 110.3, 112.9, 115.0, 117.6, 120.2, 122.8, 125.0,
  ];
  const list125_150 = [
    125.0, 127.5, 130.1, 132.7, 135.3, 137.9, 140.0, 142.6, 145.2, 147.8, 150.0,
  ];
  const list150_175 = [
    150.0, 152.5, 155.1, 157.7, 160.3, 162.9, 165.0, 167.6, 170.2, 172.8, 175.0,
  ];
  const list175_200 = [
    175.0, 177.5, 180.1, 182.7, 185.3, 187.9, 190.0, 192.6, 195.2, 197.8, 120.0,
  ];
  const mediaValor = [];
  const desvioP = [];
  const tendencias = [];
  let tendencia = 0;
  let soma = 0;
  let ultimoValor = req.ultimoValor;

  for (let i = 0; i < dadosControle.length; i++) {
    for (let y = 0; y < 3; y++) {
      switch (y) {
        case 1:
          switch (faixaCalibrada) {
            case 0:
              // tendencia
              tendencia = (mediaValor[i] - list0_25[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list0_25[10];
              req.ultimoValor = ultimoValor;
              break;
            case 1:
              tendencia = (mediaValor[i] - list1_25[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list1_25[10];
              req.ultimoValor = ultimoValor;
              break;

            case 25:
              tendencia = (mediaValor[i] - list25_50[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list25_50[10];
              req.ultimoValor = ultimoValor;
              break;

            case 50:
              tendencia = (mediaValor[i] - list50_75[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list50_75[10];
              req.ultimoValor = ultimoValor;
              break;

            case 75:
              tendencia = (mediaValor[i] - list75_100[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list75_100[10];
              req.ultimoValor = ultimoValor;
              break;

            case 100:
              tendencia = (mediaValor[i] - list100_125[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list100_125[10];
              req.ultimoValor = ultimoValor;
              break;

            case 125:
              tendencia = (mediaValor[i] - list125_150[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list125_150[10];
              req.ultimoValor = ultimoValor;
              break;

            case 150:
              tendencia = (mediaValor[i] - list150_175[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list150_175[10];
              req.ultimoValor = ultimoValor;
              break;

            case 175:
              tendencia = (mediaValor[i] - list175_200[i]).toFixed(3);
              tendencias.push(parseFloat(tendencia));
              ultimoValor = list175_200[10];
              req.ultimoValor = ultimoValor;
              break;
            default:
              return "Não consta faixa calibrada";
          }
          break;

        case 2:
          // desvio padrao
          const desvioPadrao = desvpad(dadosControle[i]);
          desvioP.push(desvioPadrao);
          break;
        default:
          // media
          const mediaV = media(dadosControle[i]);
          mediaValor.push(mediaV);
      }
    }
    soma += Math.pow(desvioP[i], 2);
  }

  let desvioPadraoMedio = Math.sqrt(soma / 22);
  req.desvpadMedio += desvioPadraoMedio;

  const response = {};

  for (let index = 0; index < mediaValor.length; index++) {
    response[`resultado${index + 1}`] = {
      "media do valor": mediaValor[index],
      "desvio padrao": desvioP[index],
      "tendência ": tendencias[index],
    };
  }
  response.desvioPadraoMedio = parseFloat(desvioPadraoMedio.toFixed(4));

  return response;
}

// Calculos incerteza

const contriIncertezas = [];

function incerteza_medAU(req) {
  const incertezaPD = (req.desvpadMedio / Math.sqrt(3)).toFixed(5);

  const contriIncerteza = (incertezaPD / 1) * 1;

  const response = {
    incerteza_AU: parseFloat(incertezaPD),
    contribuiçao_Incerteza: contriIncerteza,
  };

  return response;
}

// function incerteza_UP (){

//   const incertezaPD = (100.000/1500) / 1000
// }

function incerteza_medERES(valorDivResolucao, dig_anal) {
  let incertezaEres = 0;

  switch (dig_anal) {
    case 0:
      incertezaEres = valorDivResolucao / 10;
      break;
    case 1:
      incertezaEres = valorDivResolucao / 2;
      break;
  }

  const contriIncerteza = incertezaEres / Math.sqrt(3);

  const response = {
    incerteza_medERES: parseFloat(incertezaEres.toFixed(5)),
    contribuição_Incerteza: parseFloat(contriIncerteza.toFixed(5)),
  };

  return response;
}

function incertez_medl1(req) {
  const incertezamedl1 = req.ultimoValor * 0.00001 * 2;

  const contriIncerteza = incertezamedl1 / Math.sqrt(3);

  const response = {
    incertez_medl1: parseFloat(incertezamedl1.toFixed(5)),
    contribuição_Incerteza: parseFloat(contriIncerteza.toFixed(5)),
  };

  return response;
}

function incertez_medl2(req) {
  const incertezamedl2 = req.ultimoValor * ((0.0000115 + 0.00001) / 2) * 2;

  const contriIncerteza = incertezamedl2 / Math.sqrt(3);

  const response = {
    incertez_medl2: parseFloat(incertezamedl2.toFixed(5)),
    contribuição_Incerteza: parseFloat(contriIncerteza.toFixed(5)),
  };

  return response;
}

function incerteza_medPAR(valorDivResolucao, dig_anal) {
  let incertezaPar = 0;

  switch (dig_anal) {
    case 0:
      incertezaPar = valorDivResolucao / 4;
      break;
    case 1:
      incertezaPar = 0;
      break;
  }

  const contriIncerteza = incertezaPar / (Math.sqrt(3) * 1);

  const response = {
    incerteza_medPAR: parseFloat(incertezaPar.toFixed(5)),
    contribuoção_incereteza: parseFloat(contriIncerteza.toFixed(5)),
  };

  return response;
}

function incertez_medEader(req) {
  let incertezaPD = 0;

  switch (req.ultimoValor) {
    case 50:
      incertezaPD = 0.00019;
      break;
    case 75:
      incertezaPD = 0.00021;
      break;
    case 100:
      incertezaPD = 0.00023;
      break;
    case 125:
      incertezaPD = 0.00024;
      break;
    case 150:
      incertezaPD = 0.00034;
      break;
    case 175:
      incertezaPD = 0.00036;
      break;
    case 200:
      incertezaPD = 0.00037;
      break;
    default:
      return "Fora de faixa";
  }

  const response = { incertezaPD: parseFloat(incertezaPD) };

  return response;
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
  incertez_medEader,
};
