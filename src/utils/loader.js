var TextureLoader = require('./texture');
var blocks = require('../game/constants').blocks;

function Loader() {
  this.textureLoader = new TextureLoader(blocks);
}

Loader.prototype.ready = function(cb) {
  var that = this;
  setTimeout(function() {
    cb(that.textureLoader);
  }, 1000);
}

module.exports = Loader;
