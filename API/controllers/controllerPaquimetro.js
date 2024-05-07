const db = require('../connector/conn')

// constroller para paralelismo paquimetro

const paralelismoPaquimetro = async (novoValorNominalOrelha, novoValorProxOrelha1,novoValorProxOrelha2, novoValorProxOrelha3, novoValorAfasOrelha1, novoValorAfasOrelha2, novoValorAfasOrelha3, ovoValorNominalBico, novoValorProxBico1, novoValorProxBico2, novoValorProxBico3, novoValorAfasBico1, novoValorAfasBico2, novoValorAfasBico3) =>{
  try{
    const insert = await new Promise(( resolve, reject ) => {
      db.query(` CALL inserirParalelismoPaq ('${novoValorNominalOrelha}', '${novoValorProxOrelha1}', '${novoValorProxOrelha2}', '${novoValorProxOrelha3}', '${novoValorAfasOrelha1}', '${novoValorAfasOrelha2}', '${novoValorAfasOrelha3}', '${ovoValorNominalBico}', '${novoValorProxBico1}', '${novoValorProxBico2}', ${novoValorProxBico3}, '${novoValorAfasBico1}', '${novoValorAfasBico2}', '${novoValorAfasBico3}')`,
      
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

const upPaqParalelismo = async(alterarValorNominalOrelha, alterarValorProxOrelha1, alterarValorProxOrelha2, alterarValorProxOrelha3, alterarValorAfasOrelha1, alterarValorAfasOrelha2, alterarValorAfasOrelha3, alterarValorNominalBico, alterarValorProxBico1, alterarValorProxBico2, alterarValorProxBico3, alterarValorAfasBico1, alterarValorAfasBico2,  alterarValorAfasBico3)=>{

  const existing = await new Promise((resolve, reject) =>{
    db.query(`SELECT * FROM paralelismoPaq WHERE pk_idParalelismoPaq = '${pk_idParalelismoPaq}'`,
    (error, results) =>{
      if(error){
        reject(error);
        return;
      }
      resolve(results);
    });
  })
  if(existing.length == 0){
    return 404;
  }
  
  

//   const update = await new Promise((resolve, reject) =>{
//     db.query(` CALL alterarParalelismoPaq ('${alterarValorNominalOrelha}', '${alterarValorProxOrelha1}', '${alterarValorProxOrelha2}', '${ alterarValorProxOrelha3}', '${alterarValorAfasOrelha1}', '${ alterarValorAfasOrelha2}', '${alterarValorAfasOrelha3}', '${alterarValorNominalBico}' , '${alterarValorProxBico1}' ,'${alterarValorProxBico2}' ,'${alterarValorProxBico3}' ,'${alterarValorAfasBico1}' ,'${alterarValorAfasBico2}' ,'${alterarValorAfasBico3}' )`,
//       (error, results) =>{
//         if(error){
//         reject(400, error);
//         return;
//     }else{
//       resolve(200);
//     }
//   }
//   )
// }

}