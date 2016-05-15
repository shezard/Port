var World = require('../../../src/game/world');

describe('World', function() {
  it('should be initialized correctly', function() {

    var el = document.createElement('canvas');

    var world = new World(el, 5);

    expect(world.width).toBe(300);
    expect(world.height).toBe(150);
    expect(world.mapSize).toBe(5);
  });
})
