const db = require('../connector/conn')

// constroller para inserir o paralelismo paquimetro
const paralelismoPaquimetro = async (novoValorNominalOrelha, novoValorProxOrelha1,novoValorProxOrelha2, novoValorProxOrelha3, novoValorAfasOrelha1, novoValorAfasOrelha2, novoValorAfasOrelha3, ovoValorNominalBico, novoValorProxBico1, novoValorProxBico2, novoValorProxBico3, novoValorAfasBico1, novoValorAfasBico2, novoValorAfasBico3) =>{
  try{
    const insert = await new Promise(( resolve, reject ) => {
      db.query(` CALL inserirParalelismoPaq('${novoValorNominalOrelha}', '${novoValorProxOrelha1}', '${novoValorProxOrelha2}', '${novoValorProxOrelha3}', '${novoValorAfasOrelha1}', '${novoValorAfasOrelha2}', '${novoValorAfasOrelha3}', '${ovoValorNominalBico}', '${novoValorProxBico1}', '${novoValorProxBico2}', ${novoValorProxBico3}, '${novoValorAfasBico1}', '${novoValorAfasBico2}', '${novoValorAfasBico3}')`,
      
      (error, results) =>{
        if(error){
        reject(error);
        return;
      }else{
        resolve(results);
      
      }
    }
  );
});

if(!insert){
  return 400;
}else{
  return 200;
}
  }catch(error){
    console.log(error);
    return 500;
  }

}

// controller para alterar o paralelismo do paquimetro
const upPaqParalelismo = async(pk_idParalelismoPaq, alterarValorNominalOrelha, alterarValorProxOrelha1, alterarValorProxOrelha2, alterarValorProxOrelha3, alterarValorAfasOrelha1, alterarValorAfasOrelha2, alterarValorAfasOrelha3, alterarValorNominalBico, alterarValorProxBico1, alterarValorProxBico2, alterarValorProxBico3, alterarValorAfasBico1, alterarValorAfasBico2,  alterarValorAfasBico3)=>{

  const existing = await new Promise((resolve, reject) =>{
    db.query(`SELECT * FROM paralelismoPaq WHERE pk_idParalelismoPaq = ? ;`, [pk_idParalelismoPaq],
    (error, results) =>{
      if(error){
        reject(error);
        return;
      }
      resolve(results);
    });
  });
  if(existing.length == 0){
    return 404;
  }


  return new Promise((resolve, reject) =>{
    db.query(` CALL alterarParalelismoPaq('${alterarValorNominalOrelha}', '${alterarValorProxOrelha1}', '${alterarValorProxOrelha2}', '${ alterarValorProxOrelha3}', '${alterarValorAfasOrelha1}', '${ alterarValorAfasOrelha2}', '${alterarValorAfasOrelha3}', '${alterarValorNominalBico}' , '${alterarValorProxBico1}' ,'${alterarValorProxBico2}' ,'${alterarValorProxBico3}' ,'${alterarValorAfasBico1}' ,'${alterarValorAfasBico2}' ,'${alterarValorAfasBico3}' )`,
      (error, results) =>{
        if(error){
          reject(400, error);
          return;
        }
        results(200);
      }
    );
  });
}


//controller para inserir as medições externas 
const insertMedExt = async(novoVn1,novoVn1_1, novoVn1_2, novoVn1_3, novoVn2, novoVn2_1, novoVn2_2, novoVn2_3, novoVn3, novoVn3_1, novoVn3_2, novoVn3_3, novoVn4,novoVn4_1, novoVn4_2, novoVn4_3, novoVn5, novoVn5_1, novoVn5_2, novoVn5_3,  novoVn6, novoVn6_1,  novoVn6_2,  novoVn6_3, novoVn7,novoVn7_1, novoVn7_2, novoVn7_3,  novoVnExtra1, novoVnExtra1_1, novoVnExtra1_2, novoVnExtra1_3, novoVnExtra2, novoVnExtra2_1, novoVnExtra2_2, novoVnExtra2_3, novoVnExtra3,novoVnExtra3_1, novoVnExtra3_2, novoVnExtra3_3 )=>{
  try{
    const insert = await new Promise(( resolve, reject ) => {
      db.query(` CALL  inserirMedicoesExternas('${novoVn1}','${novoVn1_1}','${novoVn1_2}','${novoVn1_3}','${novoVn2}','${novoVn2_1}','${novoVn2_2}','${novoVn2_3}','${novoVn3}','${novoVn3_1}','${novoVn3_2}','${novoVn3_3}','${novoVn4}','${novoVn4_1}','${novoVn4_2}','${novoVn4_3}','${novoVn5}','${novoVn5_1}','${novoVn5_2}','${novoVn5_3}','${ novoVn6}','${ novoVn6_1}','${ novoVn6_2}','${ novoVn6_3}','${novoVn7}','${novoVn7_1}','${novoVn7_2}','${novoVn7_3}','${ novoVnExtra1}','${novoVnExtra1_1}','${novoVnExtra1_2}','${novoVnExtra1_3}','${novoVnExtra2}','${novoVnExtra2_1}','${novoVnExtra2_2}','${novoVnExtra2_3}','${novoVnExtra3}','${novoVnExtra3_1}','${novoVnExtra3_2}','${novoVnExtra3_3}' )`,
      
      (error, results) =>{
        if(error){
        reject(error);
        return;
      }else{
        resolve(results);
      
      }
    }
  );
});

if(!insert){
  return 400;
}else{
  return 200;
}
  }catch(error){
    console.log(error);
    return 500;
  }

}

// CONTROLLER para alterar a medição extrenas
const upMedExt = async(idMedicaoExterna, alterarVn1,alterarVn1_1, alterarVn1_2, alterarVn1_3,alterarVn2, alterarVn2_1, alterarVn2_2, alterarVn2_3, alterarVn3, alterarVn3_1, alterarVn3_2, alterarVn3_3,alterarVn4,alterarVn4_1,alterarVn4_2, alterarVn4_3,alterarVn5, alterarVn5_1, alterarVn5_2, alterarVn5_3,alterarVn6,alterarVn6_1, alterarVn6_2, alterarVn6_3, alterarVn7, alterarVn7_1, alterarVn7_2, alterarVn7_3, alterarVnExtra1, alterarVnExtra1_1, alterarVnExtra1_2, alterarVnExtra1_3,  alterarVnExtra2,  alterarVnExtra2_1,  alterarVnExtra2_2,  alterarVnExtra2_3,  alterarVnExtra3,  alterarVnExtra3_1,  alterarVnExtra3_2,  alterarVnExtra3_3)=>{

  const existing = await new Promise((resolve, reject) =>{
    db.query(`SELECT * FROM  medicoesExternas WHERE idMedicaoExterna = ? ;`, [idMedicaoExterna],
    (error, results) =>{
      if(error){
        reject(error);
        return;
      }
      resolve(results);
    });
  });
  if(existing.length == 0){
    return 404;
  }

  return new Promise((resolve, reject) =>{
    db.query(` CALL  alterarMedicoesExternas('${idMedicaoExterna}','${alterarVn1}','${alterarVn1_1}','${alterarVn1_2}','${alterarVn1_3}','${alterarVn2}','${alterarVn2_1}','${alterarVn2_2}','${alterarVn2_3}','${alterarVn3}','${alterarVn3_1}','${alterarVn3_2}','${alterarVn3_3}','${alterarVn4}','${alterarVn4_1}','${alterarVn4_2}','${alterarVn4_3}','${alterarVn5}','${alterarVn5_1}','${alterarVn5_2}','${alterarVn5_3}','${alterarVn6}','${alterarVn6_1}','${alterarVn6_2}','${alterarVn6_3}','${alterarVn7}','${alterarVn7_1}','${alterarVn7_2}','${alterarVn7_3}','${alterarVnExtra1}','${alterarVnExtra1_1}','${alterarVnExtra1_2}','${alterarVnExtra1_3}','${ alterarVnExtra2}','${ alterarVnExtra2_1}','${alterarVnExtra2_2}','${alterarVnExtra2_3}','${ alterarVnExtra3}','${ alterarVnExtra3_1}','${ alterarVnExtra3_2}','${ alterarVnExtra3_3}',)`,
      (error, results) =>{
        if(error){
          reject(400, error);
          return;
        }
        results(200);
      }
    );
  });
}
// controller para inserir os resultados de paquimetro
const insertResultPaq = async (nrCertificado, idInstrumento,idParalelismoPaq, idMedExterna, idMedInterna,idMedRessalto, idMedProfundidade, novoTecnico, novoResponsável, novaDataCalibracao, novaInspecao, novoTipoEscala, novaVersaoMetodo,  novoTempInicial, novoTempFinal) =>{
  try{
    const insert = await new Promise(( resolve, reject ) => {
      db.query(` CALL inserirParalelismoPaq('${nrCertificado}', '${idInstrumento}', '${idParalelismoPaq}', '${idMedExterna}', '${idMedInterna}', '${idMedRessalto}', '${idMedProfundidade}', '${novoTecnico}', '${novoResponsável}', '${novaDataCalibracao}', '${novaInspecao}', '${novoTipoEscala}', '${novaVersaoMetodo}', '${ novoTempInicial}', '${ novoTempInicial}', '${novoTempFinal}')`,
      
      (error, results) =>{
        if(error){
        reject(error);
        return;
      }else{
        resolve(results);
      
      }
    }
  );
});

if(!insert){
  return 400;
}else{
  return 200;
}
  }catch(error){
    console.log(error);
    return 500;
  }

}

// controller para alterar os resultados de paquimetro
const upResultPaq = async(antigoNrCertificado,alterarNrCertificado,idInstrumento, idParalelismoPaq,idMedExterna, idMedInterna,  idMedRessalto, idMedProfundidade, alterarTecnico, alterarResponsável, alterarDataCalibracao, alterarInspecao, alterarTipoEscala, alterarVersaoMetodo, alterarTempInicial, alterarTempFinal)=>{

  const existing = await new Promise((resolve, reject) =>{
    db.query(`SELECT * FROM resultadosPaquimetros
    WHERE antigoNrCertificado = ? ;`, [antigoNrCertificado],
    (error, results) =>{
      if(error){
        reject(error);
        return;
      }
      resolve(results);
    });
  });
  if(existing.length == 0){
    return 404;
  }
  return new Promise((resolve, reject) =>{
    db.query(` CALL alterarParalelismoPaq('${antigoNrCertificado}','${alterarNrCertificado}','${idInstrumento}','${idParalelismoPaq}','${idMedExterna}','${idMedInterna}','${ idMedRessalto}','${idMedProfundidade}','${alterarTecnico}','${alterarResponsável}','${alterarDataCalibracao}','${alterarInspecao}','${alterarTipoEscala}','${alterarVersaoMetodo}','${alterarTempInicial}','${alterarTempFinal}')`,
      (error, results) =>{
        if(error){
          reject(400, error);
          return;
        }
        results(200);
      }
    );
  });
}

//controller para inserir medições internas
const insertMedInt = async (novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3,novaSegundaMedida, novoValorNominal2_1, novoValorNominal2_2, novoValorNominal2_3, novaTerceiraMedida, novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3) =>{
  try{
    const insert = await new Promise(( resolve, reject ) => {
      db.query(` CALL criarMedicaoInterna('${novaPrimeiraMedida}','${novoValorNominal1_1}','${novoValorNominal1_2}','${novoValorNominal1_3}','${novaSegundaMedida}','${novoValorNominal2_1}','${novoValorNominal2_2}','${novoValorNominal2_3}','${novaTerceiraMedida}','${novoValorNominal3_1}','${novoValorNominal3_2}','${novoValorNominal3_3}')`,
      
      (error, results) =>{
        if(error){
        reject(error);
        return;
      }else{
        resolve(results);
      
      }
    }
  );
});

if(!insert){
  return 400;
}else{
  return 200;
}
  }catch(error){
    console.log(error);
    return 500;
  }

}

//controller para alterar medições internas
const upMedInt = async(idMedicaoInterna, alterarPrimeiraMedida,alterarValorNominal1_1, alterarValorNominal1_2, alterarValorNominal1_3, alterarSegundaMedida, alterarValorNominal2_1, alterarValorNominal2_2, alterarValorNominal2_3, alterarTerceiraMedida,alterarValorNominal3_1, alterarValorNominal3_2, alterarValorNominal3_3 )=>{

  const existing = await new Promise((resolve, reject) =>{
    db.query(`SELECT * FROM medicoesinternas
    WHERE idMedicaoInterna = ? ;`, [idMedicaoInterna],
    (error, results) =>{
      if(error){
        reject(error);
        return;
      }
      resolve(results);
    });
  });
  if(existing.length == 0){
    return 404;
  }
  return new Promise((resolve, reject) =>{
    db.query(` CALL alterarMedicoesInternas('${idMedicaoInterna}','${alterarPrimeiraMedida}','${alterarValorNominal1_1}','${alterarValorNominal1_2}','${alterarValorNominal1_3}','${alterarSegundaMedida}','${alterarValorNominal2_1}','${alterarValorNominal2_2}','${alterarValorNominal2_3}','${alterarTerceiraMedida}','${alterarValorNominal3_1}','${alterarValorNominal3_2}','${alterarValorNominal3_3}',)`,
      (error, results) =>{
        if(error){
          reject(400, error);
          return;
        }
        results(200);
      }
    );
  });
}

//controller para inserir medições de ressaltos
const insertMedRes = async (novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3, novaSegundaMedida, novoValorNominal2_1,  novoValorNominal2_2,  novoValorNominal2_3, novaTerceiraMedida,novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3 ) =>{
  try{
    const insert = await new Promise(( resolve, reject ) => {
      db.query(` CALL criarMedicaoInterna('${novaPrimeiraMedida}','${novoValorNominal1_1}','${novoValorNominal1_2}','${novoValorNominal1_3}','${novaSegundaMedida}','${ novoValorNominal2_1}','${ novoValorNominal2_2}','${ novoValorNominal2_3}','${novaTerceiraMedida}','${novoValorNominal3_1}','${novoValorNominal3_2}','${novoValorNominal3_3}')`,
      
      (error, results) =>{
        if(error){
        reject(error);
        return;
      }else{
        resolve(results);
      
      }
    }
  );
});

if(!insert){
  return 400;
}else{
  return 200;
}
  }catch(error){
    console.log(error);
    return 500;
  }

}

//controller para alterar as medições de ressalto
const upMedRes = async(idMedicaoRessalto,novaPrimeiraMedida,novoValorNominal1_1, novoValorNominal1_2, novoValorNominal1_3, novaSegundaMedida, novoValorNominal2_1, novoValorNominal2_2, novoValorNominal2_3, novaTerceiraMedida,novoValorNominal3_1, novoValorNominal3_2, novoValorNominal3_3 )=>{

  const existing = await new Promise((resolve, reject) =>{
    db.query(`SELECT * FROM medicoesRessaltos
    WHERE  idMedicaoRessalto = ? ;`, [idMedicaoRessalto],
    (error, results) =>{
      if(error){
        reject(error);
        return;
      }
      resolve(results);
    });
  });
  if(existing.length == 0){
    return 404;
  }
  return new Promise((resolve, reject) =>{
    db.query(` CALL alterarMedicoesRessaltos('${ idMedicaoRessalto}','${novaPrimeiraMedida}','${novoValorNominal1_1}','${novoValorNominal1_2}','${novoValorNominal1_3}','${novaSegundaMedida}','${novoValorNominal2_1}','${novoValorNominal2_2}','${novoValorNominal2_3}','${novaTerceiraMedida}','${novoValorNominal3_1}','${novoValorNominal3_2}','${novoValorNominal3_3}')`,
      (error, results) =>{
        if(error){
          reject(400, error);
          return;
        }
        results(200);
      }
    );
  });
}


// controller para adicionar medições de profundidade

const insertMedPro = async (nova_primeiraMedida,novo_valorNominal1_1,novo_valorNominal1_2, novo_valorNominal1_3, nova_segundaMedida, novo_valorNominal2_1, novo_valorNominal2_2, novo_valorNominal2_3, nova_terceiraMedida, novo_valorNominal3_1, novo_valorNominal3_2, novo_valorNominal3_3) =>{
  try{
    const insert = await new Promise(( resolve, reject ) => {
      db.query(` CALL inserirMedicaoProfundidade('${nova_primeiraMedida}','${novo_valorNominal1_1}','${novo_valorNominal1_2}','${novo_valorNominal1_3}','${nova_segundaMedida}','${novo_valorNominal2_1}','${novo_valorNominal2_2}'${novo_valorNominal2_3}','${nova_terceiraMedida}','${novo_valorNominal3_1}','${novo_valorNominal3_2}','${novo_valorNominal3_3}')`,
      
      (error, results) =>{
        if(error){
        reject(error);
        return;
      }else{
        resolve(results);
      
      }
    }
  );
});

if(!insert){
  return 400;
}else{
  return 200;
}
  }catch(error){
    console.log(error);
    return 500;
  }

}

// rota para alterar as medições de profundidade
const upMedPro = async(idMedicao, nova_primeiraMedida, novo_valorNominal1_1, novo_valorNominal1_2, novo_valorNominal1_3, nova_segundaMedida, novo_valorNominal2_1, novo_valorNominal2_2, novo_valorNominal2_3,nova_terceiraMedida, novo_valorNominal3_1, novo_valorNominal3_2, novo_valorNominal3_3 )=>{

  const existing = await new Promise((resolve, reject) =>{
    db.query(`SELECT * FROM medicoesProfundidades
    WHERE  idMedicao = ? ;`, [idMedicao],
    (error, results) =>{
      if(error){
        reject(error);
        return;
      }
      resolve(results);
    });
  });
  if(existing.length == 0){
    return 404;
  }
  return new Promise((resolve, reject) =>{
    db.query(` CALL alterarMedicaoProfundidade('${idMedicao}','${nova_primeiraMedida}','${novo_valorNominal1_1}','${novo_valorNominal1_2}','${novo_valorNominal1_3}','${ nova_segundaMedida}','${novo_valorNominal2_1}','${novo_valorNominal2_2}','${novo_valorNominal2_3}','${nova_terceiraMedida}','${novo_valorNominal3_1}','${novo_valorNominal3_2}','${novo_valorNominal3_3}')`,
      (error, results) =>{
        if(error){
          reject(400, error);
          return;
        }
        results(200);
      }
    );
  });
}

module.exports = {
  paralelismoPaquimetro,
  upPaqParalelismo,
  insertMedExt,
  upMedExt, 
  insertResultPaq, 
  upResultPaq,
  insertMedInt,
  upMedInt,
  insertMedRes,
  upMedRes,
  insertMedPro,
  upMedPro

}