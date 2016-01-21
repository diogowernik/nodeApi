var db = require('mongoose');

db.connect('mongodb://diogo:diogo@0.0.0.0:27017/workouts');

module.exports = db;
