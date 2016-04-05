var THREE = require('three');
var stampit = require('stampit');
const entity = require("./entity.js");
var movability = require('./movability.js');


const circleInput = stampit()
  .init(function(){
    var angle = 0;
    var angularVelocity = 0.1 * Math.PI;
    this.position = new THREE.Vector2(0, -6.5);
    update = function(dt){
      console.log(this.position);
      angle += angularVelocity * dt;
      this.direction = new THREE.Vector2(Math.cos(angle), Math.sin(angle));
    };

    this.engine.addCallback(update.bind(this))
  })

const robot = stampit.compose(entity, movability, circleInput);

module.exports = robot;

