const Model = require('../model/model');

async function infoRelatoirios(lista) {
  const documentosSalvos = [];

  for (let i = 0; i < lista.length; i++) {
    // Crie um novo documento do modelo Relatorio com os dados da lista
    const novoDocumento = new Model(lista[i]);

    // Salve o documento no banco de dados
    const documentoSalvo = await novoDocumento.save();
    documentosSalvos.push(documentoSalvo);
  }

  // Retorna os documentos salvos
  return documentosSalvos;
}

module.exports = {
  infoRelatoirios
};
