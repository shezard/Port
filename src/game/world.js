var colors = require('../utils/colors');
var texture = require('../utils/texture');

var World = function(el, mapSize) {
  this.ctx = el.getContext('2d');
  this.width = el.width;
  this.height = el.height;
  this.mapSize = mapSize;
  this.sightRange = 4;

  this.shapes = [
    [{x:0, y:40, w:60, h:this.height-80},{},                                                       {x:this.width-60, y:50, w:60, h:this.height-80}],
    [{x:0, y:30, w:50, h:this.height-60}, {x:(this.width-100) / 2, y:30,w:100, h:this.height - 60},{x:this.width-50, y:30, w:50, h:this.height-60}],
    [{x:0, y:20, w:40, h:this.height-40}, {x:(this.width-120) / 2, y:20,w:120, h:this.height - 40},{x:this.width-40, y:20, w:40, h:this.height-40}],
    [{x:0, y:10, w:30, h:this.height-20}, {x:(this.width-140) / 2, y:10,w:140,h:this.height - 20}, {x:this.width-30, y:10, w:30, h:this.height-20}],
    [{x:0, y:0,  w:20, h:this.height},    {x:(this.width-140) / 2, y:0, w:140,h:this.height},      {x:this.width-20, y:0,  w:20, h:this.height}],
  ]
}

World.prototype.render = function(map, player, entities) {

  this.drawBackground();

  var depth = [-1, 1, 0];

  for(var d = 0 ; d <= 2 ; d++) {

    var j = depth[d];

    for(var i = this.sightRange ; i >= 0 ; i -= 1) {

      var hit = {
        x: player.x + player.d.x * i + (1 - Math.abs(player.d.x)) * j,
        y: player.y + player.d.y * i + (1 - Math.abs(player.d.y)) * j
      }

      if(map[hit.y] && map[hit.y][hit.x]) {

        var wallX = this.sightRange - i;
        var wallY = j + 1;
        if(player.d.x == -1 && player.d.y == 0 || player.d.x == 0 && player.d.y == 1) {
          wallY = -j + 1;
        }
        this.drawWall(wallX, wallY, map[hit.y][hit.x]);
      }
    }
  }
}

World.prototype.drawBackground = function() {
  this.ctx.fillStyle = colors.sky;
  this.ctx.fillRect(0, 0, this.width, this.height / 2);
  this.ctx.fillStyle = colors.grass;
  this.ctx.fillRect(0, this.height / 2, this.width, this.height / 2);
}

World.prototype.drawWall = function(x, y, blockId) {
  var shape = this.shapes[x][y];
  var image = texture.get(blockId);
  this.ctx.drawImage(image, shape.x, shape.y, shape.w, shape.h);
  this.ctx.fillStyle = 'rgba(0,0,0,' + (5-x)/7 + ')';
  this.ctx.fillRect(shape.x, shape.y, shape.w, shape.h);
}

module.exports = World;
