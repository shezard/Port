var colors = require('../utils/colors');

var World = function(el, loaders) {
  this.ctx = el.getContext('2d');
  this.width = el.width;
  this.height = el.height;
  this.sightRange = 8;
  this.loaders = loaders;
  this.fov = 50;
}

World.prototype.render = function(map, player, entities) {
  this.drawBackground();

  var ro = {
    x: player.x + .5,
    y: player.y + .5
  }

  var rd = player.d;

  var hits = [];

  for(var a = -this.fov ; a <= this.fov ; a += 1) {

    sightRange:
    for(var t = 0.0; t <= this.sightRange  ; t += .1) {

      var angle = Math.atan2(rd.y, rd.x);
      var dangle = angle + (a / 180) * Math.PI;

      var p = {
        x: ro.x + t * Math.cos(dangle),
        y: ro.y + t * Math.sin(dangle)
      }

      for(var i = 0 ; i < map.length ; i++) {
        for(var j = 0 ; j < map[i].length ; j++) {

          var block = map[i][j];

          if(block && j <= p.x && p.x <= (j + 1) && i <= p.y && p.y <= (i + 1)) {
            p.t = t;
            p.a = a;
            p.block = block;
            hits.push(p);
            break sightRange;
          }
        }
      }
    }
  }

  for(var i = 0 ; i < hits.length ; i++) {
    this.drawWall(hits[i]);
  }
}

World.prototype.drawWall = function(hit) {
  var x = (hit.a + this.fov) / (this.fov * 2) * this.width;
  var y = (hit.t / this.sightRange) * 150 * Math.cos(hit.a / 180 * Math.PI);
      y += 25;
  this.ctx.fillStyle = '#000000';
  if(hit.block == 3) {
    this.ctx.fillStyle = '#00CC00';
  }
  if(hit.block == 9) {
    this.ctx.fillStyle = '#CCCC00';
  }
  this.ctx.fillRect(x, y, (1 / (this.fov * 2)) * this.width, this.height - y * 2);
}

World.prototype.drawBackground = function() {
  this.ctx.fillStyle = colors.sky;
  this.ctx.fillRect(0, 0, this.width, this.height / 2);
  this.ctx.fillStyle = colors.grass;
  this.ctx.fillRect(0, this.height / 2, this.width, this.height / 2);
}

module.exports = World;
