function TextureLoader(blocks) {
  this.textures = [];

  for(var blockId in blocks) {
    var image = new Image();
    image.src = blocks[blockId].base64;
    this.textures[blockId] = image;
  }
}

TextureLoader.prototype.get = function(blockId) {
  return this.textures[blockId];
}

module.exports = TextureLoader;
