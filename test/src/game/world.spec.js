var World = require('../../../src/game/world');

describe('World', function() {

  var world;

  beforeEach(function() {
    var el = document.createElement('canvas');
    world = new World(el, 3);
  });

  it('should be initialized correctly', function() {
    expect(world.width).toBe(300);
    expect(world.height).toBe(150);
    expect(world.mapSize).toBe(3);
  });

  it('should render correctly (facing left)', function() {
    spyOn(world, 'drawWall');

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
    }, []);

    expect(world.drawWall).toHaveBeenCalledWith(5,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,1,1);
  });

  it('should render correctly (facing right)', function() {
    spyOn(world, 'drawWall');

    world.render([
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ], {
      x: 1,
      y: 1,
      d: {
        x: -1,
        y: 0
      }
    }, []);

    expect(world.drawWall).toHaveBeenCalledWith(5,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,1,1);
  });

  it('should render correctly (facing top)', function() {
    spyOn(world, 'drawWall');

    world.render([
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ], {
      x: 1,
      y: 1,
      d: {
        x: 0,
        y: -1
      }
    }, []);

    expect(world.drawWall).toHaveBeenCalledWith(5,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,1,1);
  });

  it('should render correctly (facing bottom)', function() {
    spyOn(world, 'drawWall');

    world.render([
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ], {
      x: 1,
      y: 1,
      d: {
        x: 0,
        y: 1
      }
    }, []);

    expect(world.drawWall).toHaveBeenCalledWith(5,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,0,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(6,2,1);
    expect(world.drawWall).toHaveBeenCalledWith(5,1,1);
  });

  afterEach(function() {
    world = null;
  });
})
