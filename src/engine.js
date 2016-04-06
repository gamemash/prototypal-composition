var stampit = require('stampit');

const engine = stampit()
  .init(function(){
    callbacks = []
  })
  .methods({
    addCallback: function(callback){
      callbacks.push(callback);
    },
    update: function(){
      dt = 0.1;
      for(var i = 0; i < callbacks.length; i++){
        callbacks[i](dt);
      }
    },
    report: function(){
      console.log(callbacks);
    }
  });


module.exports = engine;