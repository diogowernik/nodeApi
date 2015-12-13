var db = require('../config/db.js');

var DefinitionSchema = db.Schema({
    
    logType: String,
    description: String,
    owner: {type: dbSchema.Types.ObjectId, ref:'User'}
    
});


module.exports = DefinitionSchema;