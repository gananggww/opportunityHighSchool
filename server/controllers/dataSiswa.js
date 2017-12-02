const db = require('../models/dataSiswa')

const getall = (req, res) => {
  db.find()
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}
const edit = (req, res) => {
  db.update({
    _id: req.params.id
  }, {
    name: req.body.name,
    tth: req.body.tth,
    nun: req.body.nun,
    jarak: req.body.jarak,
    nMath: req.body.nMath,
    nIndo: req.body.nIndo,
    nEnglish: req.body.nEnglish,
    nIPA: req.body.nIPA
  })
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}
const insert = (req, res) => {
  db.create({
    name: req.body.name,
    tth: req.body.tth,
    nun: req.body.nun,
    jarak: req.body.jarak,
    nMath: req.body.nMath,
    nIndo: req.body.nIndo,
    nEnglish: req.body.nEnglish,
    nIPA: req.body.nIPA
  })
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}
const remove = (req, res) => {
  db.remove({
    _id: req.params.id
  })
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })

}

module.exports = {
  getall,
  edit,
  insert,
  remove
}
