const { media } = require("./funcoesCalculos");

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
  
      const mediaProx = media(valorIndicadoProxOrelhas[i]);
      mediasProx.push(mediaProx)

      const mediaAfast = media(valorIndicadoAfasOrelhas[i]);
      mediasAfast.push(mediaAfast)
  
    
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

function calculoParalelismoBicos(valorIndicadoProxBicos, valorIndicadoAfasBicos, valorNominalPara) {
 
  let mediasProx = []
  let mediasAfast = []
  let tendenciasProx = 0
  let tendenciasAfast = 0

  for (let i = 0; i < valorIndicadoProxBicos.length; i++) {
  
      const mediaProx = media(valorIndicadoProxBicos[i]);
      mediasProx.push(mediaProx)

      const mediaAfast = media(valorIndicadoAfasBicos[i]);
      mediasAfast.push(mediaAfast)
  
    
    for (let index = 0; index < valorIndicadoAfasBicos.length; index++) {
        
      const tendenciaProx = mediasProx[index] - valorNominalPara[1];
      tendenciasProx += tendenciaProx

      const tendenciaAfast = mediasAfast[index] - valorNominalPara[1];
      tendenciasAfast += tendenciaAfast
    }
  }
  const paralelismoOrelhas = Math.max(tendenciasProx, tendenciasAfast) - Math.min(tendenciasProx, tendenciasAfast)
  const paralelismoOrelhasT = paralelismoOrelhas.toFixed(2)

  const tendenciaAfastT = tendenciasAfast.toFixed(2)
  const tendenciaProxT = tendenciasProx.toFixed(2)

  const response = {};

  response[`resultado Bicos`] = {"tendencia proximo": parseFloat(tendenciaProxT) , "tendencia afastado" : parseFloat(tendenciaAfastT), "paralelismoOrelhas": parseFloat(paralelismoOrelhasT)}

  return response
}

function calculoMedInterna(valorNominalMedInterna, valorIndicadoMedInterna) {

  let tendencias = []
  let medias = []
  
  for (let i = 0; i < valorIndicadoMedInterna.length; i++) {
    for (let y = 0; y < 3; y++) {

      const  mediaValor = media(valorIndicadoMedInterna[i]);
      medias.push(mediaValor)
           
    } 
  }

  for(let index = 0; index < valorNominalMedInterna.length; index++){
    const tendencia = medias[index] - valorNominalMedInterna[index]
    tendencias.push(tendencia.toFixed(4))
      
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index])}

  }
  return response
}

function calculoMedRessalto( valorNominalMedRessalto, valorIndicadoMedRessalto) {

  let tendencias = []
  let medias = []
  
  for (let i = 0; i < valorIndicadoMedRessalto.length; i++) {
    for (let y = 0; y < 3; y++) {

      const  mediaValor = media(valorIndicadoMedRessalto[i]);
      medias.push(mediaValor)
           
    } 
  }

  for(let index = 0; index < valorNominalMedRessalto.length; index++){
    const tendencia = medias[index] - valorNominalMedRessalto[index]
    tendencias.push(tendencia.toFixed(4))
      
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index])}

  }
  return response
}

function calculoMedProfundidade(valorIndicadoMedProf, valorNominalMedProf) {

  let tendencias = []
  let medias = []
  
  for (let i = 0; i < valorIndicadoMedProf.length; i++) {
    for (let y = 0; y < 3; y++) {

      const  mediaValor = media(valorIndicadoMedProf[i]);
      medias.push(mediaValor)
           
    } 
  }

  for(let index = 0; index < valorNominalMedProf.length; index++){
    const tendencia = medias[index] - valorNominalMedProf[index]
    tendencias.push(tendencia.toFixed(4))
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index])}

  }
  return response
}

module.exports = {
  calculoTendenciaExterna,
  calculoParalelismoOrelhas,
  calculoParalelismoBicos,
  calculoMedInterna,
  calculoMedRessalto,
  calculoMedProfundidade,
};