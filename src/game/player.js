function Player(player) {
  this.x = player.x;
  this.y = player.y;
  this.d = player.d;
}

Player.prototype.forward = function() {
  this.x += this.d.x;
  this.y += this.d.y;
}

Player.prototype.backward = function() {
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
