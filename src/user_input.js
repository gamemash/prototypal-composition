var stampit = require('stampit');
var KeyboardInput = require('./keyboard_input.js');

const userInput = stampit()
  .methods({
    addRegister: function(keyCode, callback){
      KeyboardInput.addRegister(keyCode, callback);
    }
  });

module.exports = userInput;
