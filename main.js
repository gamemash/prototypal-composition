var KeyboardInput = require('./src/keyboard_input.js');
var THREE = require('three');
var engine = require('./src/engine.js');
var stampit = require('stampit');
var logsPosition = require('./src/logsPosition.js')

var physicsEngine = engine.create();

const CssRender = stampit()
  .init(function(){
    gameCanvasElement = document.getElementById(this.gameCanvasId);
    console.log(gameCanvasElement.style)
    width = gameCanvasElement.offsetWidth;
    height = gameCanvasElement.offsetHeight;
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
        domElement.style.left = ((entity.position.x * this.zoom) + width / 2) + "px";
        domElement.style.top = ((entity.position.y * this.zoom) + height / 2 )+ "px";
      }
    }
  });

const cssDrawable = stampit()
  .init(function(){
    this.renderEngine.addEntity(this)
})

cssRender = CssRender.create({
  gameCanvasId: "game-canvas",
  zoom: 30
});

const character = require("./src/character.js").refs({engine: physicsEngine, renderEngine: cssRender}).compose(cssDrawable);
const robot = require("./src/robot.js").refs({engine: physicsEngine, renderEngine: cssRender}).compose(cssDrawable);

var ronald = character.create({name: "Ronald"});
ronald.addRegister(87, ronald.changeDirection.bind(ronald, [0, -1]));
ronald.addRegister(83, ronald.changeDirection.bind(ronald, [0, 1]));
ronald.addRegister(65, ronald.changeDirection.bind(ronald, [-1, 0]));
ronald.addRegister(68, ronald.changeDirection.bind(ronald, [ 1, 0]));
var murderDog = robot.create({name: "MurderDog", moving: true});

ronald.changeDirection([0, 0]);

function renderLoop(){
  physicsEngine.update();
  cssRender.update();
  requestAnimationFrame(renderLoop);
}

renderLoop();

console.log(ronald);
console.log(murderDog);
