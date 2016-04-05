var stampit = require('stampit');
var THREE = require('three');

const movability = stampit()
  .refs({
    name: "Movability default",
    speed: 2
  })
  .init(function(){
    update = function(dt){
      this.position.addScaledVector(this.direction, this.speed * dt);
    };

    this.direction = new THREE.Vector2(0, 1);
    this.position = new THREE.Vector2(0, 0);
    this.engine.addCallback(update.bind(this))
  })
  .methods({
    changeDirection: function(dir) {
      this.direction.fromArray(dir);
    },
  });

module.exports = movability;
