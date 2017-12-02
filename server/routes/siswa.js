const express = require('express');
const router = express.Router();
const controller = require('../controllers/dataSiswa')

router.get('/', controller.getall)
router.post('/', controller.insert)
router.put('/:id', controller.edit)
router.delete('/:id', controller.remove)

module.exports = router;
