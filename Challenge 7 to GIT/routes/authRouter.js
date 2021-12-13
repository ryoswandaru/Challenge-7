const express = require('express');
const router = express.Router()
const authControllers = require('../controllers/authControllers')

router.get('/game', authControllers.getgame)

router.get('/index', authControllers.getindex)

router.get('/login', authControllers.getlogin)

router.get('/register', authControllers.getregister)

router.use(express.static('public'));

module.exports = router;