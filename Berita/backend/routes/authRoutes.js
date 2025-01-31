const router = require ('express').Router()
const authControllers = require('../controllers/authControllers')
router.post('/api/login', authControllers.login)

module.exports = router