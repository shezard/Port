function Player(map, player) {
  this.x = player.x;
  this.y = player.y;
  this.d = player.d;
  this.map = map;
}

Player.prototype.forward = function() {
  if(this.map[this.y + this.d.y][this.x + this.d.x]) {
    return;
  }
  this.x += this.d.x;
  this.y += this.d.y;
}

Player.prototype.backward = function() {
  if(this.map[this.y - this.d.y][this.x - this.d.x]) {
    return;
  }
  this.x -= this.d.x;
  this.y -= this.d.y;
}

Player.prototype.left = function() {
  var angle = Math.atan2(this.d.y, this.d.x);
  angle -= Math.PI * .5;

  this.d.x = Math.round(Math.cos(angle));
  this.d.y = Math.round(Math.sin(angle));
}

Player.prototype.right = function() {
  var angle = Math.atan2(this.d.y, this.d.x);
  angle += Math.PI * .5;

  this.d.x = Math.round(Math.cos(angle));
  this.d.y = Math.round(Math.sin(angle));
}

module.exports = Player;
