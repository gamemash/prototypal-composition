var stampit = require('stampit');

const logsPosition = stampit()
  .init(function(){
    update = function(dt){
      console.log(this.name, this.position);
    };

    this.engine.addCallback(update.bind(this))
})

module.exports = logsPosition