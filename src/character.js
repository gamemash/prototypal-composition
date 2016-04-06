var stampit = require('stampit');
const entity = require("./entity.js");
var movability = require('./movability.js');
var userInput = require('./user_input.js');

const character = stampit.compose(entity, movability, userInput)
  .init(function(){
    update = function(dt){
      this.moving = this.keyActive(87, 83, 65, 68);
    }

    this.engine.addCallback(update.bind(this));
  });

module.exports = character;

