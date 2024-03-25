const calculoTendenciaExterna = ( arrayDeDados, arrayDeDados2, arrayDeDados3, arrayDeDados4, arrayDeDados5, arrayDeDados6, arrayDeDados7) => {

    // Cria micro-funçoes para calcular seus respectivos arrays de valores medidos
    const calculo1 = (arrayDeDados) => {
        const ValorNominal = arrayDeDados[0] //0 é o indice do valor nominal
        const media = (arrayDeDados[1] + arrayDeDados[2] + arrayDeDados[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    const calculo2 = (arrayDeDados2) => {
        const ValorNominal = arrayDeDados2[0]
        const media = (arrayDeDados2[1] + arrayDeDados2[2] + arrayDeDados2[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    const calculo3 = (arrayDeDados3) => {
        const ValorNominal = arrayDeDados3[0]
        const media = (arrayDeDados3[1] + arrayDeDados3[2] + arrayDeDados3[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    const calculo4 = (arrayDeDados4) => {
        const ValorNominal = arrayDeDados4[0]
        const media = (arrayDeDados4[1] + arrayDeDados4[2] + arrayDeDados4[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    const calculo5 = (arrayDeDados5) => {
        const ValorNominal = arrayDeDados5[0]
        const media = (arrayDeDados5[1] + arrayDeDados5[2] + arrayDeDados5[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    const calculo6 = (arrayDeDados6) => {
        const ValorNominal = arrayDeDados6[0]
        const media = (arrayDeDados6[1] + arrayDeDados6[2] + arrayDeDados6[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }

    const calculo7 = (arrayDeDados7) => {
        const ValorNominal = arrayDeDados7[0]
        const media = (arrayDeDados7[1] + arrayDeDados7[2] + arrayDeDados7[3])/3

        const tendencia = media - ValorNominal
        const tendenciaArredondada = tendencia.toFixed(2)  
        
        return tendenciaArredondada

    }


    // Chama todas as funçoes de calculo passando seu respectivos arrays de valores
    const resultadoCalculo1 = calculo1(arrayDeDados);
    const resultadoCalculo2 = calculo2(arrayDeDados2);
    const resultadoCalculo3 = calculo3(arrayDeDados3);
    const resultadoCalculo4 = calculo4(arrayDeDados4);
    const resultadoCalculo5 = calculo5(arrayDeDados5);
    const resultadoCalculo6 = calculo6(arrayDeDados6);
    const resultadoCalculo7 = calculo7(arrayDeDados7);

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


module.exports = {
    calculoTendenciaExterna
}