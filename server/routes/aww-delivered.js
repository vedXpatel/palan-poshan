const express = require('express');
const awwDelivered = require('../controllers/aww-delivered');

const router = express.Router();

router.get('/getMothersDelivered', awwDelivered.getMothersDelivered);
router.post('/addMotherDelivered', awwDelivered.addMotherDelivered);

module.exports = router;