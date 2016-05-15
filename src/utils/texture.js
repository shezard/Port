var blocks = require('../game/constants').blocks;

module.exports = {
  get: function(blockId) {
    var base64 = blocks[blockId].base64;

    var image = new Image();
    image.src = base64;
    return image;
  }
}
