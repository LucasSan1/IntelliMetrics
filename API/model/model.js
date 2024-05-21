const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  array: {
    type: [[Number]],
    required: true
  }
});

const Model = mongoose.model('Model', Schema);

module.exports = Model;
