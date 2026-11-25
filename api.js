const express = require('express');
const { loadPlayer, savePlayer } = require('../controllers/playerController');

const router = express.Router();

router.get('/load', loadPlayer);
router.post('/save', savePlayer);

module.exports = router;
