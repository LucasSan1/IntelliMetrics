const mongoose = require('mongoose');

const relatorioSchema = new mongoose.Schema({
  array: {
    type: [[Number]],
    required: true
  }
});

const Relatorio = mongoose.model('Relatorio', relatorioSchema);

module.exports = Relatorio;