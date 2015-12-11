var db = require ('mongoose');


db.connect('mongodb://test:test@0.0.0.0:27017/workouts');


module.exports = db;