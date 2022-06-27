const express = require('express');
const fmchControllers = require('../controllers/fmch-controllers');

const router = express.Router();

router.get('/', fmchControllers.getAwwWorkers);

module.exports = router;