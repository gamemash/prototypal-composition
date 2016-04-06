var KeyboardInput = function(){
  this.registers = {};
  this.keys = [];

  this.addRegister = function(keyCode, callback){
    this.registers[keyCode] = callback;
  }
  this.handleKeyDown = function(e){
    this.keys[e.keyCode] = true;

    for (keyCode in this.registers){
      if (keyCode == e.keyCode){
        this.registers[keyCode](e);
        return;
      }
    }
    console.log("unhandled event", e.keyCode);
  }

  this.handleKeyUp = function(e){
    this.keys[e.keyCode] = false;
  }

  if (document){
    document.addEventListener('keydown', this.handleKeyDown.bind(this) );
    document.addEventListener('keyup', this.handleKeyUp.bind(this) );
  }
};

module.exports = new KeyboardInput();
