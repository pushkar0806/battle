var Mongoose = require('mongoose');

var BattleSchema = Mongoose.Schema({
    name : {
        type: String
    },
    year: {
        type: Number
    },
    battle_number: {
        type: Number
    },
    attacker_king: {
        type: String
    },
    defender_king: {
        type: String
    },
    attacker_1: {
        type: String
    },
    attacker_2: {
        type: String
    },
    attacker_3: {
        type: String
    },
    attacker_4: {
        type: String
    },
    defender_1: {
        type: String
    },
    defender_2: {
        type: String
    },
    defender_3: {
        type: String
    },
    defender_4: {
        type: String
    },
    attacker_outcome: {
        type: String
    },
    battle_type: {
        type: String
    },
    major_death: {
        type: Date
    },
    major_capture: {
        type: Date
    },
    attacker_size: {
        type: Date
    },
    defender_size: {
        type: Date
    },
    attacker_commander: {
        type: String
    },
    defender_commander: {
        type: String
    },
    summer: {
        type: Date
    },
    location: {
        type: String
    },
    region: {
        type: String
    },
    note: {
        type: String
    }
})

var battle = Mongoose.model('battle', BattleSchema, 'battle');


battle.findPlaces = callback => {
    battle.find({}, {"region": 1}).exec(callback);
};

battle.battleCount = callback => {
    battle.find({}).countDocuments().exec(callback);
};


battle.searchBattle = (condition, callback) => {
       battle.aggregate([
        {
            $match: condition
        }
    ],callback)
};

battle.getStats = (callback) => {
    battle.aggregate([
        {
            $group : {
         _id : {'attacker_king': "$attacker_king",  'attacker_outcome': '$attacker_outcome'},
          count: { $sum: 1}
}
        }
    ],callback)
};

module.exports = battle;


