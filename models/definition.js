var db = require('../config/db.js');
var DefinitionSchema = require('./definition-schema');
var Definition = db.model('User', DefinitionSchema);

module.exports = Definition;