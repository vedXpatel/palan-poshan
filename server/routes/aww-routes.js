const express = require('express');
const awwControllers = require('../controllers/aww-controllers');

const router = express.Router();

router.get('/getMothers', awwControllers.getMothers);
router.post('/addMother', awwControllers.addMother);
router.post('/signup', awwControllers.addAwwUser)

module.exports = router;
