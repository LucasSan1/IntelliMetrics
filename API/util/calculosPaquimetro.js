function calculoTendenciaExterna(valorIndicado, valorNominal){
    // salvar a resposta dps
    const resposta = {}

    for(let i= 0; i < valorIndicado.length; i++ ){
        for(let y = 0; y < 3; y++){

            // arrumar a media
            const media = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;
              
            for(let index = 0; index < valorNominal.length; index++){
                for(let y =0 ; y < 3 ; y++){
                    const tendencia = media - valorNominal[index][y]
                    
                }
            }
        }
    }
}


function calculoParalelismoOrelhas (valorIndicado, valorNominal){
    const resposta = {}
    
    for(let i= 0; i < valorIndicado.length; i++ ){
        for(let y = 0; y < 3; y++){
            mediaProx = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;
            
            mediaAfast = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;

            for(let index = 0; index < valorNominal.length; index++){
                for(let y =0 ; y < 3 ; y++){
                    const tendenciaProx = mediaProx - valorNominal[index][y]
                    const tendenciaAfast = mediaAfast - valorNominal[index][y]
                }
                const paralelismoOrelhas = Math.max(tendenciaProx, tendenciaAfast) - Math.min(tendenciaProx, tendenciaAfast);
            }
        }
    }
}

function calculoParalelismoBicos (valorIndicado, valorNominal){
    const resposta = {}

    for(let i= 0; i < valorIndicado.length; i++ ){
        for(let y = 0; y < 3; y++){
            mediaProx = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;
            
            mediaAfast = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;

            for(let index = 0; index < valorNominal.length; index++){
                for(let y =0 ; y < 3 ; y++){
                    const tendenciaProx = mediaProx - valorNominal[index][y]
                    const tendenciaAfast = mediaAfast - valorNominal[index][y]
                }
                const paralelismoBicos = Math.max(tendenciaProx, tendenciaAfast) - Math.min(tendenciaProx, tendenciaAfast);
            }
        }
    }
}

function calculoMedInterna(valorIndicado, valorNominal){
    // salvar a resposta dps
    const resposta = {}

    for(let i= 0; i < valorIndicado.length; i++ ){
        for(let y = 0; y < 3; y++){

            // arrumar a media
            const media = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;
              
            for(let index = 0; index < valorNominal.length; index++){
                for(let y =0 ; y < 3 ; y++){
                    const tendencia = media - valorNominal[index][y]
                    
                }
            }
        }
    }
}

function calculoMedRessalto(valorIndicado, valorNominal){
    // salvar a resposta dps
    const resposta = {}

    for(let i= 0; i < valorIndicado.length; i++ ){
        for(let y = 0; y < 3; y++){

            // arrumar a media
            const media = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;
              
            for(let index = 0; index < valorNominal.length; index++){
                for(let y =0 ; y < 3 ; y++){
                    const tendencia = media - valorNominal[index][y]
                    
                }
            }
        }
    }
}

function calculoMedProfundidade(valorIndicado, valorNominal){
    // salvar a resposta dps
    const resposta = {}

    for(let i= 0; i < valorIndicado.length; i++ ){
        for(let y = 0; y < 3; y++){

            // arrumar a media
            const media = valorIndicado.reduce((acc, val) => acc + val, 0) / 3;
              
            for(let index = 0; index < valorNominal.length; index++){
                for(let y =0 ; y < 3 ; y++){
                    const tendencia = media - valorNominal[index][y]
                    
                }
            }
        }
    }
}

// function calculoParalelismo(arrayPrimeiraLinhaParalelismo, arraySegundaLinhaParalelismo, arrayTerceiraLinhaParalelismo, arrayQuartaLinhaParalelismo){}

//     function valorProxOrelhas (arrayPrimeiraLinhaParalelismo) {
//         const ValorNominal = arrayPrimeiraLinhaParalelismo[0]

//         const tendenciaLinha1 = ((arrayPrimeiraLinhaParalelismo[1] + arrayPrimeiraLinhaParalelismo[2] + arrayPrimeiraLinhaParalelismo[3]) / 3) - ValorNominal

//         return tendenciaLinha1;
//     }

//     function valorAfastOrelhas(arraySegundaLinhaParalelismo){
//         const ValorNominal = arraySegundaLinhaParalelismo[0]

//         const tendenciaLinha2 = ((arraySegundaLinhaParalelismo[1] + arraySegundaLinhaParalelismo[2] + arraySegundaLinhaParalelismo[3]) / 3) - ValorNominal

//         return tendenciaLinha2;
//     }

//     function paralelismoOrelhas (tendenciaLinha1, tendenciaLinha2) {

//         const maximo = Math.max(tendenciaLinha1, tendenciaLinha2);

//         const minimo = Math.min(tendenciaLinha1, tendenciaLinha2);

//         const ResultParalelismoOrelhas = maximo - minimo;

//         return ResultParalelismoOrelhas;
//     }

//     function valorProxBicos (arrayTerceiraLinhaParalelismo) {
//         const ValorNominal = 50

//         // const tendenciaLinha3 = arrayTerceiraLinhaParalelismo.reduce((acc, val) => acc + val, 0) / 3 - ValorNominal;
//         // const tendencia3Tratada = tendenciaLinha3.toFixed(2)

//         // return tendencia3Tratada;
//     }
    
//     function valorAfastBicos (arrayQuartaLinhaParalelismo) {
//         const ValorNominal = arrayQuartaLinhaParalelismo[0]

//         const tendenciaLinha4 = ((arrayQuartaLinhaParalelismo[1] + arrayQuartaLinhaParalelismo[2] + arrayQuartaLinhaParalelismo[3]) / 3) - ValorNominal

//         return tendenciaLinha4;
//     }

//     function paralelismoBicos (tendenciaLinha3, tendenciaLinha4) {

//         const maximo = Math.max(tendenciaLinha3, tendenciaLinha4);

//         const minimo = Math.min(tendenciaLinha3, tendenciaLinha4);

//         const ResultParalelismoBicos = maximo - minimo;

//         return ResultParalelismoBicos;
//     }
    
//     const num1 = valorProxBicos([40, 30, 40])
//     const num2 = valorAfastBicos([50, 60, 70, 60])
//     // paralelismoBicos(num1,num2)
//     valorProxBicos(num1)


module.exports = {
    calculoTendenciaExterna,
    calculoParalelismoOrelhas,
    calculoParalelismoBicos,
    calculoMedInterna,
    calculoMedRessalto,
    calculoMedProfundidade
}