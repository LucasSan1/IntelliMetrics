const { media, desvpad } = require("./funcoesCalculos");

function calculoTendenciaExterna(valorIndicado, valorNominalMedExterna) {
  
  let tendencias = []
  let medias = []
  let desvioPadrao = []

  
  for (let i = 0; i < valorIndicado.length; i++) {
    for (let y = 0; y < 3; y++) {

      const  mediaValor = media(valorIndicado[i]);
      medias.push(mediaValor)

    } 

    const desvPad = desvpad(valorIndicado[i])
    desvioPadrao.push(desvPad)
  }

  for(let index = 0; index < valorNominalMedExterna.length; index++){
    const tendencia = medias[index] - valorNominalMedExterna[index]
    tendencias.push(tendencia.toFixed(4))
      
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index]), "desvpad": parseFloat(desvioPadrao[index])}
   
  }

  return response
}

function calculoParalelismoOrelhas(valorIndicadoProxOrelhas, valorIndicadoAfasOrelhas, valorNominalPara) {

  let mediasProx = []
  let mediasAfast = []
  let tendenciasProx = 0
  let tendenciasAfast = 0
  let desvioPadraoAfast = 0
  let desvioPadraoProx = 0

  for (let i = 0; i < valorIndicadoProxOrelhas.length; i++) {
  
      const mediaProx = media(valorIndicadoProxOrelhas[i]);
      mediasProx.push(mediaProx)

      const mediaAfast = media(valorIndicadoAfasOrelhas[i]);
      mediasAfast.push(mediaAfast)

      const desvPadAfast = desvpad(valorIndicadoAfasOrelhas[i])
      desvioPadraoAfast += desvPadAfast

      const desvPadProx = desvpad(valorIndicadoProxOrelhas[i])
      desvioPadraoProx += desvPadProx
  
    
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

  response[`resultado Orelhas`] = {"tendencia proximo": parseFloat(tendenciaProxT) , "tendencia afastado" : parseFloat(tendenciaAfastT), "paralelismoOrelhas": parseFloat(paralelismoOrelhasT), "despadAfast": parseFloat(desvioPadraoAfast), "desvpadProx": parseFloat(desvioPadraoProx)}

  return response
}

function calculoParalelismoBicos(valorIndicadoProxBicos, valorIndicadoAfasBicos, valorNominalPara) {
 
  let mediasProx = []
  let mediasAfast = []
  let tendenciasProx = 0
  let tendenciasAfast = 0
  let desvioPadraoAfast = 0
  let desvioPadraoProx = 0

  for (let i = 0; i < valorIndicadoProxBicos.length; i++) {
  
      const mediaProx = media(valorIndicadoProxBicos[i]);
      mediasProx.push(mediaProx)

      const mediaAfast = media(valorIndicadoAfasBicos[i]);
      mediasAfast.push(mediaAfast)

      const desvpadAfast = desvpad(valorIndicadoAfasBicos[i])
      desvioPadraoAfast += desvpadAfast
      
      const desvpadProx = desvpad(valorIndicadoProxBicos[i])
      desvioPadraoProx += desvpadProx
    
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

  response[`resultado Bicos`] = {"tendencia proximo": parseFloat(tendenciaProxT) , "tendencia afastado" : parseFloat(tendenciaAfastT), "paralelismoOrelhas": parseFloat(paralelismoOrelhasT), "desvpadAfast": parseFloat(desvioPadraoAfast), "desvpadProx": parseFloat(desvioPadraoProx)}

  return response
}

function calculoMedInterna(valorNominalMedInterna, valorIndicadoMedInterna) {

  let tendencias = []
  let medias = []
  let desvPads = []

  for (let i = 0; i < valorIndicadoMedInterna.length; i++) {
    for (let y = 0; y < 3; y++) {

      const  mediaValor = media(valorIndicadoMedInterna[i]);
      medias.push(mediaValor)
           
    }
    
    const desvioPadrao = desvpad(valorIndicadoMedInterna[i])
    desvPads.push(desvioPadrao)
  }

  for(let index = 0; index < valorNominalMedInterna.length; index++){
    const tendencia = medias[index] - valorNominalMedInterna[index]
    tendencias.push(tendencia.toFixed(4))
     
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index]), "desvpad": parseFloat(desvPads[index])}

  }
  return response
}

function calculoMedRessalto( valorNominalMedRessalto, valorIndicadoMedRessalto) {

  let tendencias = []
  let medias = []
  let desvpads = []
  
  for (let i = 0; i < valorIndicadoMedRessalto.length; i++) {

    const  mediaValor = media(valorIndicadoMedRessalto[i]);
    medias.push(mediaValor)
           
    const desvioPadrao = desvpad(valorIndicadoMedRessalto[i])
    desvpads.push(desvioPadrao)
  }
  
  for(let index = 0; index < valorNominalMedRessalto.length; index++){
    const tendencia = medias[index] - valorNominalMedRessalto[index]
    tendencias.push(tendencia.toFixed(4))
      
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index]), "desvpad": parseFloat(desvpads[index])}

  }


  return response
}

function calculoMedProfundidade(valorIndicadoMedProf, valorNominalMedProf) {

  let tendencias = []
  let medias = []
  let desvpads = []
  
  for (let i = 0; i < valorIndicadoMedProf.length; i++) {
   
      const  mediaValor = media(valorIndicadoMedProf[i]);
      medias.push(mediaValor)

      const desvioPadrao = desvpad(valorIndicadoMedProf[i])
      desvpads.push(desvioPadrao)

  }

  for(let index = 0; index < valorNominalMedProf.length; index++){
    const tendencia = medias[index] - valorNominalMedProf[index]
    tendencias.push(tendencia.toFixed(4))
  }

  const response = {};

  for (let index = 0; index < tendencias.length; index++) {

    response[`resultado${index + 1}`] = { "tendencia" : parseFloat(tendencias[index]), "desvpad": parseFloat(desvpads[index])}

  }
  return response
}


// calculos de incerteza paquimetro



module.exports = {
  calculoTendenciaExterna,
  calculoParalelismoOrelhas,
  calculoParalelismoBicos,
  calculoMedInterna,
  calculoMedRessalto,
  calculoMedProfundidade,
};