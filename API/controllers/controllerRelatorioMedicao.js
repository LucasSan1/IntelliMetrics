
const Model = require('../model/model'); // Substitua o caminho pelo caminho real do seu arquivo de modelo

  // Exemplo de como criar e salvar um novo documento sem especificar um ID
  const novoDocumento = new Model({
    array: [
      [1, 2, 3, 5, 7, 8, 9, 10],
      [1, 2, 3, 5, 7, 8, 9, 10],
      [1, 2, 3, 5, 7, 8, 9, 10],
      [1, 2, 3, 5, 7, 8, 9, 10],
      [1, 2, 3, 5, 7, 8, 9, 10],
      [1, 2, 3, 5, 7, 8, 9, 10],
      [1, 2, 3, 5, 7, 8, 9, 10],
      [1, 2, 3, 5, 7, 8, 9, 10]
    ]
  });

  // novoDocumento.save()
  //   .then(doc => {
  //     console.log('Documento inserido com sucesso:', doc);
  //   })
  //   .catch(err => {
  //     console.error('Erro ao inserir documento:', err);
  //   });

module.exports ={
  novoDocumento
}