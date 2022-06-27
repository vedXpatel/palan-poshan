const express = require('express');
const router = express.Router();
const consultation = require('../controllers/consultation.js');

router.post('/consultation', consultation)

module.exports = router;