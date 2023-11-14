const express = require('express')
const router = express.Router()

const nolanFilmsController= require('../controllers/nolan')

router.get('/', nolanFilmsController.index)
router.get('/:id', nolanFilmsController.show)
router.post('/', nolanFilmsController.create)
router.patch('/:id', nolanFilmsController.update)
router.delete(':id', nolanFilmsController.destroy)

module.exports = router
