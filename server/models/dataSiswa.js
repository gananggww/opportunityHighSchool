const mongoose = require('mongoose')

var schema = mongoose.Schema({
  name: String,
  tth: String,
  jarak: String,
  nun: String,
  nMath: String,
  nIndo: String,
  nEnglish: String,
  nIPA: String
});
var Student = mongoose.model('Student', schema);

module.exports = Student
