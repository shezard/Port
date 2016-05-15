var World = require('../../../src/game/world');

describe('World', function() {
  it('should be initialized correctly', function() {

    var el = document.createElement('canvas');
    var world = new World(el, 5);

    expect(world.width).toBe(300);
    expect(world.height).toBe(150);
    expect(world.mapSize).toBe(5);
  });

  it('should render correctly', function() {

    var el = document.createElement('canvas');
    var world = new World(el, 3);

    world.render([
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ], {
      x: 1,
      y: 1,
      d: {
        x: 1,
        y: 0
      }
    }, [])

  });
})
