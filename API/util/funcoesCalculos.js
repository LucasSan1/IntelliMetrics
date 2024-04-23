function media(numeros) {
    if (numeros.length === 0) {
        return 0; // Retorna 0 se o array estiver vazio
    }

    // Soma todos os números no array
    const soma = numeros.reduce((total, numero) => total + numero, 0);

    // Calcula a média dividindo a soma pelo número de elementos
    const media = soma / numeros.length;

    return media;
}

function desvpad(dados) {
    
    // Calcula a média dos valores
    const media = dados.reduce((acc, val) => acc + val, 0) / dados.length;

    // Calcula a soma dos quadrados das diferenças entre cada valor e a média
    const somaQuadradosDiff = dados.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
    
    // Calcula o desvio padrão da amostra
    const desvioPadrao = Math.sqrt(somaQuadradosDiff / (dados.length - 1));
    const desvioTratado = parseFloat(desvioPadrao.toFixed(4))

    return desvioTratado;
}

const jStat = require("jstat")

const probabilidade = 0.0455;
const grausLiberdade = 26;

// Calcule a distribuição t acumulada inversa
const valorT = jStat.tinv(probabilidade, grausLiberdade);

console.log(valorT);

module.exports = {
    media, 
    desvpad
}