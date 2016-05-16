var colors = require('../utils/colors');

var Minimap = function(el, mapWidth, mapHeight, loaders) {
  this.el = el;
  this.ctx = el.getContext('2d');
  this.mapWidth = mapWidth;
  this.mapHeight = mapHeight;
  this.scaleX = el.width / this.mapWidth;
  this.scaleY = el.height / this.mapHeight
  this.loaders = loaders;
}

Minimap.prototype.render = function(map, player, entities) {
  this.ctx.fillStyle = colors.grass;
  this.ctx.fillRect(0, 0, this.mapWidth * this.scaleX, this.mapHeight * this.scaleY);

  for(var x = 0 ; x < this.mapWidth ; x++) {
    for(var y = 0 ; y < this.mapHeight ; y++) {
      if(map[y][x]) {
        this.drawTile(x, y, map[y][x]);
      }
    }
  }

  this.drawPlayer(player);
}

Minimap.prototype.drawTile = function(x, y, blockId) {
    var image = this.loaders.textureLoader.get(blockId);
    this.ctx.drawImage(image, x * this.scaleX, y * this.scaleY, this.scaleX, this.scaleY);
}

Minimap.prototype.drawPlayer = function(player) {

  var playerScale = .2;
  var playerOffsetX = (this.scaleX - this.scaleX * playerScale) / 2;
  var playerOffsetY = (this.scaleY - this.scaleY * playerScale) / 2;

  this.ctx.fillStyle = '#000000';
  this.ctx.fillRect(
    player.x * this.scaleX + playerOffsetX,
    player.y * this.scaleY + playerOffsetY,
    this.scaleX * playerScale,
    this.scaleY * playerScale
  );

  this.ctx.beginPath();
  this.ctx.moveTo(
    player.x * this.scaleX + this.scaleX / 2,
    player.y * this.scaleY + this.scaleY / 2
  );
  this.ctx.lineTo(
    (player.x + player.d.x) * this.scaleX + this.scaleX / 2,
    (player.y + player.d.y) * this.scaleY + this.scaleY / 2
  );
  this.ctx.stroke();
}

module.exports = Minimap;
