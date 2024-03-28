function calculoPlaneza(CMovel, CFixo) {

  const NCmovel = CMovel.length;
  const NCFixo = CFixo.length;

  // Desvio padrao do CMovel
  // Calcula a média dos valores
  const mediaCM = CMovel.reduce((acc, val) => acc + val, 0) / NCmovel;
  const mediaCMTratada = mediaCM.toFixed(0)

  // Calcula a soma dos quadrados das diferenças entre cada valor e a média
  const somaQuadradosDiffCM = CMovel.reduce((acc, val) => acc + Math.pow(val - mediaCM, 2), 0);

  // Calcula o desvio padrãzo da amostra
  const desvioPadraoCM = Math.sqrt(somaQuadradosDiffCM / (NCmovel - 1)) * 0.0003;
  const desvioPadraoTratadoCM = desvioPadraoCM.toFixed(4)
  

  //Desvio padrao do CFixo
  // Calcula a média dos valores
  const mediaCF = CFixo.reduce((acc, val) => acc + val, 0) / NCFixo;
  const mediaCFTratada = mediaCF.toFixed(0)

  // Calcula a soma dos quadrados das diferenças entre cada valor e a média
  const somaQuadradosDiffCF = CFixo.reduce((acc, val) => acc + Math.pow(val - mediaCF, 2), 0);

  // Calcula o desvio padrão da amostra
  const desvioPadraoCF = Math.sqrt(somaQuadradosDiffCF / (NCFixo - 1)) * 0.0003;
  const desvioPadraoTratadoCF = desvioPadraoCF.toFixed(4)

  // Calcula a planeza média das amostras
  const planezaMedia = ((mediaCM + mediaCF) / 2)*0.0003
  const planezaMediaTratada = planezaMedia.toFixed(4)

  const resultados = {
    media_CMovel: mediaCMTratada,
    media_CFixo: mediaCFTratada,
    desvioPadraoCMovel: desvioPadraoTratadoCM,
    desvioPadraoCFixo: desvioPadraoTratadoCF,
    planezaMedia: planezaMediaTratada
  };

  return resultados;

}


module.exports = {
  calculoPlaneza,
};
