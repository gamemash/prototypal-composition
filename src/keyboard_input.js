var KeyboardInput = {
  registers: {},
  addRegister: function(keyCode, callback){
    this.registers[keyCode] = callback;
  },
  handleKeyDown: function(e){
    for (keyCode in this.registers){
      if (keyCode == e.keyCode){
        this.registers[keyCode]();
        break;
      }
    }
  }
};

module.exports = KeyboardInput;
