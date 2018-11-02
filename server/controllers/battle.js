const model = require('../models/index');
const escapeStringRegexp = require('escape-string-regexp');
const constant = require('../../helpers/constants');

// Export APIs
module.exports = {
    /**
     * API to get all the places where the battles occured
     * @param req
     * @param res
     */
    getBattlePlaces(req, res) {
        model.battle.findPlaces((err, data) => {
            if(err) {
                res.status(500).send({error: constant.ERROR_OCCURED})
            }
            res.status(200).json({places: data});
        })
    },

    /**
     * API to get the count of total number of battles
     */
    getBattleCount(req, res) {
        model.battle.battleCount((err, count) => {
           if(err) {
               res.status(500).send({error: constant.ERROR_OCCURED})    
           } else {
               res.status(200).json({'total number of battle occurred': count});
           }
        })
    },

    /**
     * API to search the battle by various parameters
     * @param req
     * @param res
     */
    search(req, res) {
        let attacker_king = req.query.king ? req.query.king : '',
            battle_name = req.query.name ? req.query.name : '',
            location = req.query.location ? req.query.location : '',
            battle_type = req.query.type ? req.query.type : '';
        let condition = {};
        condition = {
            $and: [
                {"attacker_king": attacker_king},
                {"battle_type": battle_type},
                {"location": location}
            ]
        }
       
        model.battle.searchBattle(condition, (err, result) => {
            if(err) {
                res.status(500).send({error: constant.ERROR_OCCURED})
            } else {
                res.status(200).json(result);
            }
        });
    },

    /**
     * API to get the stats
     * @param req
     * @param res
     */
    stats(req, res) {
        model.battle.getStats((err, result) => {
            console.log("err, result-------", err);
            if(err) {
                res.status(500).send({error: constant.ERROR_OCCURED})
            } else {
                res.status(200).json(result);
            }
        });

    }
}