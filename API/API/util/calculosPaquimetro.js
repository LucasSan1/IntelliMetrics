function calculoTendenciaExterna( arrayPrimeiraLinha, arraySegundaLinha, arrayTerceiraLinha, arrayQuartaLinha, arrayQuintaLinha, arraySextaLinha, arraySetimaLinha){

    // Cria micro-funçoes para calcular seus respectivos arrays de valores medidos
    function primeiraLinhaTabela(arrayPrimeiraLinha) {
        const ValorNominal = arrayPrimeiraLinha[0] //0 é o indice do valor nominal
        const media = (arrayPrimeiraLinha[1] + arrayPrimeiraLinha[2] + arrayPrimeiraLinha[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    function segundaLinhaTabela(arraySegundaLinha) {
        const ValorNominal = arraySegundaLinha[0]
        const media = (arraySegundaLinha[1] + arraySegundaLinha[2] + arraySegundaLinha[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    function terceiraLinhaTabela(arrayTerceiraLinha) {
        const ValorNominal = arrayTerceiraLinha[0]
        const media = (arrayTerceiraLinha[1] + arrayTerceiraLinha[2] + arrayTerceiraLinha[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    function quartaLinhaTabela(arrayQuartaLinha) {
        const ValorNominal = arrayQuartaLinha[0]
        const media = (arrayQuartaLinha[1] + arrayQuartaLinha[2] + arrayQuartaLinha[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    function quintaLinhaTabela(arrayQuintaLinha) {
        const ValorNominal = arrayQuintaLinha[0]
        const media = (arrayQuintaLinha[1] + arrayQuintaLinha[2] + arrayQuintaLinha[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    function sextaLinhaTabela(arraySextaLinha) {
        const ValorNominal = arraySextaLinha[0]
        const media = (arraySextaLinha[1] + arraySextaLinha[2] + arraySextaLinha[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    function setimaLinhaTabela(arraySetimaLinha) {
        const ValorNominal = arraySetimaLinha[0]
        const media = (arraySetimaLinha[1] + arraySetimaLinha[2] + arraySetimaLinha[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }


    // Chama todas as funçoes de calculo passando seu respectivos arrays de valores
    const resultadoCalculo1 = primeiraLinhaTabela(arrayPrimeiraLinha);
    const resultadoCalculo2 = segundaLinhaTabela(arraySegundaLinha);
    const resultadoCalculo3 = terceiraLinhaTabela(arrayTerceiraLinha);
    const resultadoCalculo4 = quartaLinhaTabela(arrayQuartaLinha);
    const resultadoCalculo5 = quintaLinhaTabela(arrayQuintaLinha);
    const resultadoCalculo6 = sextaLinhaTabela(arraySextaLinha);
    const resultadoCalculo7 = setimaLinhaTabela(arraySetimaLinha);

    // Salva os resultados em um json e retorna o json para a rota
    const resultados = {
        tendencia1: resultadoCalculo1,
        tendencia2: resultadoCalculo2,
        tendencia3: resultadoCalculo3,
        tendencia4: resultadoCalculo4,
        tendencia5: resultadoCalculo5,
        tendencia6: resultadoCalculo6,
        tendencia7: resultadoCalculo7
    };

    return resultados;
 
}

function calculoParalelismo(arrayPrimeiraLinhaParalelismo, arraySegundaLinhaParalelismo, arrayTerceiraLinhaParalelismo, arrayQuartaLinhaParalelismo){}

    function valorProxOrelhas (arrayPrimeiraLinhaParalelismo) {
        const ValorNominal = arrayPrimeiraLinhaParalelismo[0]

        const tendenciaLinha1 = ((arrayPrimeiraLinhaParalelismo[1] + arrayPrimeiraLinhaParalelismo[2] + arrayPrimeiraLinhaParalelismo[3]) / 3) - ValorNominal

        console.log(tendenciaLinha1);

        return tendenciaLinha1;
    }

    function valorAfastOrelhas(arraySegundaLinhaParalelismo){
        const ValorNominal = arraySegundaLinhaParalelismo[0]

        const tendenciaLinha2 = ((arraySegundaLinhaParalelismo[1] + arraySegundaLinhaParalelismo[2] + arraySegundaLinhaParalelismo[3]) / 3) - ValorNominal

        console.log(tendenciaLinha2);

        return tendenciaLinha2;
    }

    function paralelismoOrelhas (tendenciaLinha1, tendenciaLinha2) {

        const maximo = Math.max(tendenciaLinha1, tendenciaLinha2);

        const minimo = Math.min(tendenciaLinha1, tendenciaLinha2);

        const ResultParalelismoOrelhas = maximo - minimo;

        console.log(ResultParalelismoOrelhas)

        return ResultParalelismoOrelhas;
    }

    function valorProxBicos (arrayTerceiraLinhaParalelismo) {
        const ValorNominal = arrayTerceiraLinhaParalelismo[0]

        const tendenciaLinha3 = ((arrayTerceiraLinhaParalelismo[1] + arrayTerceiraLinhaParalelismo[2] + arrayTerceiraLinhaParalelismo[3]) / 3) - ValorNominal

        console.log(tendenciaLinha3);

        return tendenciaLinha3;
    }
    
    function valorAfastBicos (arrayQuartaLinhaParalelismo) {
        const ValorNominal = arrayQuartaLinhaParalelismo[0]

        const tendenciaLinha4 = ((arrayQuartaLinhaParalelismo[1] + arrayQuartaLinhaParalelismo[2] + arrayQuartaLinhaParalelismo[3]) / 3) - ValorNominal

        console.log(tendenciaLinha4);

        return tendenciaLinha4;
    }

    function paralelismoBicos (tendenciaLinha3, tendenciaLinha4) {

        const maximo = Math.max(tendenciaLinha3, tendenciaLinha4);

        const minimo = Math.min(tendenciaLinha3, tendenciaLinha4);

        const ResultParalelismoBicos = maximo - minimo;

        console.log(ResultParalelismoBicos)

        return ResultParalelismoBicos;
    }
    
    
    // 
    
    const num1 = valorProxBicos([50, 40, 30, 40])
    const num2 = valorAfastBicos([50, 60, 70, 60])
    paralelismoBicos(num1,num2)


module.exports = {
    calculoTendenciaExterna
}