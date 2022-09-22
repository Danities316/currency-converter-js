const express = require('express');
const router = express.Router();

const convertedCurrency = require('../controllers/currency-converter')

router.post('/convertcurrency', convertedCurrency)

module.exports = router
