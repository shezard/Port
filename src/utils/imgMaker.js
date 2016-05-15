module.exports = function(base64) {
  var image = new Image();
  image.src = base64;
  return image;
}
