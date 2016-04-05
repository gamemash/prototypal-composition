var stampit = require('stampit');
const entity = require("./entity.js");
var movability = require('./movability.js');
var userInput = require('./user_input.js');

const character = stampit.compose(entity, movability, userInput);

module.exports = character;

