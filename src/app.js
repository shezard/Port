var Loader = require('./utils/loader');
var Minimap = require('./game/minimap');
var World = require('./game/world');
var Player = require('./game/player');

var constants = require('./game/constants');

var mapSize = constants.mapSize;
var map = constants.map;

var loader = new Loader();

loader.ready(function(textureLoader) {
  var player = new Player(map, constants.player);
  var minimap = new Minimap(document.querySelector('#minimap'), mapSize, {
    textureLoader: textureLoader
  });
  var world = new World(document.querySelector('#world'), mapSize, {
    textureLoader: textureLoader
  });

  document.querySelector('body').addEventListener('keyup', function(e) {
    switch(e.keyCode) {
      case 90: player.forward();
        break;

      case 81: player.left();
        break;

      case 83: player.backward();
        break;

      case 68: player.right();
        break;
    }
  });

  function renderAll() {
    minimap.render(map, player, []);
    world.render(map, player, []);
    requestAnimationFrame(function() {
      renderAll()
    });
  }

  renderAll();
});
