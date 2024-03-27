function calculoPlaneza(CMovel, CFixo) {
  const mediaCMovel = media(CMovel).toFixed(0);
  const mediaCFixo = media(CFixo).toFixed(0);
  let varianciaCfixo = 0;
  let varianciaCmovel = 0;

  //Calculo desvio padrao CMovel
  for (let i = 0; i < CMovel.length; i++) {
    varianciaCmovel += Math.pow(mediaCMovel - CMovel[i], 2);
  }

  varianciaCmovel = varianciaCmovel / CMovel.length;

  const desvPadCMovel = Math.sqrt(varianciaCmovel) * 0.0003;
  const desvPadMovelArredondado = desvPadCMovel.toFixed(4);

  //Calculo desvio padrao Cfixo
  for (let i = 0; i < CFixo.length; i++) {
    varianciaCfixo += Math.pow(mediaCFixo - CFixo[i], 2);
  }

  varianciaCfixo = varianciaCfixo / CFixo.length;
  const desvPadCFixo = Math.sqrt(varianciaCfixo) * 0.0003;
  const desvPadFixoArredondado = desvPadCFixo.toFixed(4);

  console.log("CMovel", desvPadMovelArredondado);
  console.log("CFixo", desvPadFixoArredondado);
}

function media(a) {
  let soma = 0;
  a.map((numero) => (soma += numero));
  return soma / a.length;
}

module.exports = {
  calculoPlaneza,
};
