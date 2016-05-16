var Minimap = require('./game/minimap');
var World = require('./game/world');
var Player = require('./game/Player');

var constants = require('./game/constants');

var mapSize = constants.mapSize;
var map = constants.map;

var player = new Player(map, constants.player);

var minimap = new Minimap(document.querySelector('#minimap'), mapSize);
minimap.render(map, player, []);

var world = new World(document.querySelector('#world'), mapSize);
world.render(map, player, []);

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

  minimap.render(map, player, []);
  world.render(map, player, []);
});
