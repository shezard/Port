var Minimap = require('./minimap');
var World = require('./world');
var constants = require('./constants');

var mapSize = constants.mapSize;
var map = constants.map;
var player = constants.player;

for(var i = 0 ; i < mapSize ; i++) {
  for(var j = 0 ; j < mapSize ; j++) {
    map[i][j] *= 10;
  }
}

var minimap = new Minimap(document.querySelector('#minimap'), mapSize);
minimap.render(map, player, []);

var world = new World(document.querySelector('#world'), mapSize);
world.render(map, player, []);

// TODO : put on player object ?
document.querySelector('body').addEventListener('keyup', function(e) {
  switch(e.keyCode) {
    case 90:
      player.x += player.d.x;
      player.y += player.d.y;
      break;

    case 81:
      var angle = Math.atan2(player.d.y, player.d.x);
      angle -= Math.PI * .5;

      player.d.x = Math.round(Math.cos(angle));
      player.d.y = Math.round(Math.sin(angle));
      break;

    case 83:
      player.x -= player.d.x;
      player.y -= player.d.y;
      break;

    case 68:
      var angle = Math.atan2(player.d.y, player.d.x);
      angle += Math.PI * .5;

      player.d.x = Math.round(Math.cos(angle));
      player.d.y = Math.round(Math.sin(angle));
      break;
  }

  minimap.render(map, player, []);
  world.render(map, player, []);

});