var stampit = require('stampit');
var KeyboardInput = require('./src/keyboard_input.js');
var THREE = require('three');


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


var physicsEngine = engine.create();

const character = require("./src/character.js").refs({
  engine: physicsEngine
});

var ronald = character.create({name: "Ronald"});
ronald.changeDirection([-1, 0]);
//physicsEngine.addEntity(ronald.update.bind(ronald));

const robot = require("./src/robot.js").refs({engine: physicsEngine});

var murderDog = robot.create({name: "MurderDog"});
console.log("update functions", murderDog.update);

//ronald.changeDirection([1,0]);
for (var i = 0; i < 100; i++){
  physicsEngine.update();
}
//console.log(ronald.position);
console.log(ronald);
console.log(murderDog);
