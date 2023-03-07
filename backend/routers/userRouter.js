const express = require('express');
const userAuthCont = require('../controllers/userAuthControler')
const router = express.Router();
router
.route('/register')
.post(userAuthCont.register);

module.exports = router