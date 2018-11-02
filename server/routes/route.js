var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    battleController = require('../controllers/battle');

router.route('/list').all().get(battleController.getBattlePlaces); 

router.route('/count').all().get(battleController.getBattleCount);

router.route('/search').all().get(battleController.search);

router.route('/stats').all().get(battleController.stats);

module.exports = router;