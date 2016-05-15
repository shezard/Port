var Minimap = require('../../../src/game/minimap');

describe('Minimap', function() {

  var minimap;

  beforeEach(function() {
    var el = document.createElement('canvas');
    minimap = new Minimap(el, 3);
  });

  it('should be initialized correctly', function() {
    expect(minimap.mapSize).toBe(3);
    expect(minimap.scale).toBe(100);
  });
});
