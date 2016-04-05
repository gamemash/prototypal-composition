var KeyboardInput = require('./src/keyboard_input.js');
var THREE = require('three');
var engine = require('./src/engine.js');
var stampit = require('stampit');
var logsPosition = require('./src/logsPosition.js')

var physicsEngine = engine.create();

const CssRender = stampit()
  .init(function(){
    entities = []
  })
  .methods({
    addEntity: function(entity){
      entities.push(entity);
    },
    update: function(){
      for(var i = 0; i < entities.length; i++){
        entity = entities[i];
        domElement = document.getElementById(entity.name);
        domElement.style.top = entity.position.x + "px";
        domElement.style.left = entity.position.y + "px";
      }
    }
  });

const cssDrawable = stampit()
  .init(function(){
    this.renderEngine.addEntity(this)
})

cssRender = CssRender.create();

const character = require("./src/character.js").refs({engine: physicsEngine})//.compose(logsPosition);
const robot = require("./src/robot.js").refs({engine: physicsEngine, renderEngine: cssRender}).compose(cssDrawable);

var ronald = character.create({name: "Ronald"});
var murderDog = robot.create({name: "MurderDog"});

ronald.changeDirection([-1, 0]);

function renderLoop(){
  physicsEngine.update();
  cssRender.update();
  requestAnimationFrame(renderLoop);
}

renderLoop();

console.log(ronald);
console.log(murderDog);
