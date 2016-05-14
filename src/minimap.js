var colors = require('./utils/colors');

var Minimap = function(el, mapSize) {
  this.el = el;
  this.ctx = el.getContext('2d');
  this.mapSize = mapSize;
  this.scale = el.width / mapSize;
}

Minimap.prototype.render = function(map, player, entities) {
  this.ctx.fillStyle = colors.grass;
  this.ctx.fillRect(0, 0, this.mapSize * this.scale, this.mapSize * this.scale);
  this.ctx.fillStyle = '#000000';

  for(var x = 0 ; x < this.mapSize ; x++) {
    for(var y = 0 ; y < this.mapSize ; y++) {
      if(map[y][x]) {
        this.ctx.fillStyle = colors.toHSLString(map[y][x]);
        this.ctx.fillRect(
          x * this.scale,
          y * this.scale,
          this.scale,
          this.scale
        );
      }
    }
  }

  var playerScale = .2;
  var playerOffset = (this.scale - this.scale * playerScale) / 2;

  this.ctx.fillRect(
    player.x * this.scale + playerOffset,
    player.y * this.scale + playerOffset,
    this.scale * playerScale,
    this.scale * playerScale
  );

  this.ctx.beginPath();
  this.ctx.moveTo(
    player.x * this.scale + this.scale / 2,
    player.y * this.scale + this.scale / 2
  );
  this.ctx.lineTo(
    (player.x + player.d.x) * this.scale + this.scale / 2,
    (player.y + player.d.y) * this.scale + this.scale / 2
  );
  this.ctx.stroke();
}

module.exports = Minimap;
