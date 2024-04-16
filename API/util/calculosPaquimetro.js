
=======

function calculoTendenciaExterna(valorIndicado, valorNominalMedExterna) {
  
  let tendencias = []
  let medias = []
  
  for (let i = 0; i < valorIndicado.length; i++) {
    for (let y = 0; y < 3; y++) {

      const  mediaValor = media(valorIndicado[i]);
      medias.push(mediaValor)
           
    } 
  }

  for(let index = 0; index < valorNominalMedExterna.length; index++){
    const tendencia = medias[index] - valorNominalMedExterna[index]
    tendencias.push(tendencia.toFixed(4))
      
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index])}


  }
  return response
}

function calculoParalelismoOrelhas(valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara) {

  let mediasProx = []
  let mediasAfast = []
  let tendenciasProx = 0
  let tendenciasAfast = 0

  for (let i = 0; i < valorIndicadoProxOrelhas.length; i++) {
    for (let y = 0; y < 3; y++) {
      const mediaProx = media(valorIndicadoProxOrelhas[i]);
      mediasProx.push(mediaProx)

      const mediaAfast = media(valorIndicadoAfasOrelhas[i]);
      mediasAfast.push(mediaAfast)
    }
    
    for (let index = 0; index < valorIndicadoAfasOrelhas.length; index++) {
        
      const tendenciaProx = mediasProx[index] - valorNominalPara[0];
      tendenciasProx += tendenciaProx

      const tendenciaAfast = mediasAfast[index] - valorNominalPara[0];
      tendenciasAfast += tendenciaAfast
    }
  }
  const paralelismoOrelhas = Math.max(tendenciasProx, tendenciasAfast) - Math.min(tendenciasProx, tendenciasAfast)
  const paralelismoOrelhasT = paralelismoOrelhas.toFixed(2)

  const tendenciaAfastT = tendenciasAfast.toFixed(2)
  const tendenciaProxT = tendenciasProx.toFixed(2)

  const response = {};

  response[`resultado Orelhas`] = {"tendencia proximo": parseFloat(tendenciaProxT) , "tendencia afastado" : parseFloat(tendenciaAfastT), "paralelismoOrelhas": parseFloat(paralelismoOrelhasT)}

  return response
}

function calculoMedInterna(valorIndicado, valorNominal) {
  // salvar a resposta dps
  const resposta = {};

  for (let i = 0; i < valorIndicado.length; i++) {
    for (let y = 0; y < 3; y++) {
      // arrumar a media
      const media = media(valorIndicado[i]);

      for (let index = 0; index < valorNominal.length; index++) {
       
          const tendencia = media - valorNominal[index];
        
      }
    }
  }
}

function calculoMedRessalto(valorIndicado, valorNominal) {
  // salvar a resposta dps
  const resposta = {};


) {}

function valorProxOrelhas(arrayPrimeiraLinhaParalelismo) {
  const ValorNominal = arrayPrimeiraLinhaParalelismo[0];

  const tendenciaLinha1 =
    (arrayPrimeiraLinhaParalelismo[1] +
      arrayPrimeiraLinhaParalelismo[2] +
      arrayPrimeiraLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha1;
}

function valorAfastOrelhas(arraySegundaLinhaParalelismo) {
  const ValorNominal = arraySegundaLinhaParalelismo[0];

  const tendenciaLinha2 =
    (arraySegundaLinhaParalelismo[1] +
      arraySegundaLinhaParalelismo[2] +
      arraySegundaLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha2;
}

function paralelismoOrelhas(tendenciaLinha1, tendenciaLinha2) {
  const maximo = Math.max(tendenciaLinha1, tendenciaLinha2);

  const minimo = Math.min(tendenciaLinha1, tendenciaLinha2);

  const ResultParalelismoOrelhas = maximo - minimo;

  return ResultParalelismoOrelhas;
}

function valorProxBicos(arrayTerceiraLinhaParalelismo) {
  const ValorNominal = arrayTerceiraLinhaParalelismo[0];

  const tendenciaLinha3 =
    (arrayTerceiraLinhaParalelismo[1] +
      arrayTerceiraLinhaParalelismo[2] +
      arrayTerceiraLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha3;
}

function valorAfastBicos(arrayQuartaLinhaParalelismo) {
  const ValorNominal = arrayQuartaLinhaParalelismo[0];

  const tendenciaLinha4 =
    (arrayQuartaLinhaParalelismo[1] +
      arrayQuartaLinhaParalelismo[2] +
      arrayQuartaLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha4;
}

function paralelismoBicos(tendenciaLinha3, tendenciaLinha4) {
  const maximo = Math.max(tendenciaLinha3, tendenciaLinha4);

  const minimo = Math.min(tendenciaLinha3, tendenciaLinha4);

  const ResultParalelismoBicos = maximo - minimo;

=======
      for (let index = 0; index < valorNominal.length; index++) {

          const tendencia = media - valorNominal[index][y];

      }
    }
  }
}

function calculoMedProfundidade(valorIndicado, valorNominal) {
  // salvar a resposta dps
  const resposta = {};

  for (let i = 0; i < valorIndicado.length; i++) {
    for (let y = 0; y < 3; y++) {
      // arrumar a media
      const media = media(valorIndicado[i]);

      for (let index = 0; index < valorNominal.length; index++) {
    
          const tendencia = media - valorNominal[index][y];
      }
    }
  }
}

function calculoParalelismo(
  arrayPrimeiraLinhaParalelismo,
  arraySegundaLinhaParalelismo,
  arrayTerceiraLinhaParalelismo,
  arrayQuartaLinhaParalelismo
) {}

function valorProxOrelhas(arrayPrimeiraLinhaParalelismo) {
  const ValorNominal = arrayPrimeiraLinhaParalelismo[0];

  const tendenciaLinha1 =
    (arrayPrimeiraLinhaParalelismo[1] +
      arrayPrimeiraLinhaParalelismo[2] +
      arrayPrimeiraLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha1;
}

function valorAfastOrelhas(arraySegundaLinhaParalelismo) {
  const ValorNominal = arraySegundaLinhaParalelismo[0];

  const tendenciaLinha2 =
    (arraySegundaLinhaParalelismo[1] +
      arraySegundaLinhaParalelismo[2] +
      arraySegundaLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha2;
}

function paralelismoOrelhas(tendenciaLinha1, tendenciaLinha2) {
  const maximo = Math.max(tendenciaLinha1, tendenciaLinha2);

  const minimo = Math.min(tendenciaLinha1, tendenciaLinha2);

  const ResultParalelismoOrelhas = maximo - minimo;

  return ResultParalelismoOrelhas;
}

function valorProxBicos(arrayTerceiraLinhaParalelismo) {
  const ValorNominal = arrayTerceiraLinhaParalelismo[0];

  const tendenciaLinha3 =
    (arrayTerceiraLinhaParalelismo[1] +
      arrayTerceiraLinhaParalelismo[2] +
      arrayTerceiraLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha3;
}

function valorAfastBicos(arrayQuartaLinhaParalelismo) {
  const ValorNominal = arrayQuartaLinhaParalelismo[0];

  const tendenciaLinha4 =
    (arrayQuartaLinhaParalelismo[1] +
      arrayQuartaLinhaParalelismo[2] +
      arrayQuartaLinhaParalelismo[3]) /
      3 -
    ValorNominal;

  return tendenciaLinha4;
}

function paralelismoBicos(tendenciaLinha3, tendenciaLinha4) {
  const maximo = Math.max(tendenciaLinha3, tendenciaLinha4);

  const minimo = Math.min(tendenciaLinha3, tendenciaLinha4);

  const ResultParalelismoBicos = maximo - minimo;


  return ResultParalelismoBicos;
}

const num1 = valorProxBicos([50, 40, 30, 40]);
const num2 = valorAfastBicos([50, 60, 70, 60]);
paralelismoBicos(num1, num2);

module.exports = {
  calculoTendenciaExterna,
  calculoParalelismoOrelhas,
  calculoParalelismoBicos,
  calculoMedInterna,
  calculoMedRessalto,
  calculoMedProfundidade,
};
