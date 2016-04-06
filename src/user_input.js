var stampit = require('stampit');
var KeyboardInput = require('./keyboard_input.js');

const userInput = stampit()
  .methods({
    addRegister: function(keyCode, callback){
      KeyboardInput.addRegister(keyCode, callback);
    },
    keyActive: function(keyCode){
      for (var i = 0; i < arguments.length; i++){
        if (KeyboardInput.keys[arguments[i]])
          return true;
      }
      return false
    }

  });

module.exports = userInput;
