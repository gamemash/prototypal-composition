var KeyboardInput = require('./src/keyboard_input.js');
var THREE = require('three');
var engine = require('./src/engine.js');
var stampit = require('stampit');
var logsPosition = require('./src/logsPosition.js')

var physicsEngine = engine.create();

const character = require("./src/character.js").refs({engine: physicsEngine});
const robot = require("./src/robot.js").refs({engine: physicsEngine});

var ronald = character.create({name: "Ronald"});
var murderDog = robot.create({name: "MurderDog"});

ronald.changeDirection([-1, 0]);

for (var i = 0; i < 100; i++){
  physicsEngine.update();
}

console.log(ronald);
console.log(murderDog);
