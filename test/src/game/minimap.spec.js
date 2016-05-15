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

  it('should render correctly', function() {
    spyOn(minimap, 'drawTile');

    minimap.render([
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

    expect(minimap.drawTile).toHaveBeenCalledWith(0, 0, 1);
    expect(minimap.drawTile).toHaveBeenCalledWith(0, 1, 1);
    expect(minimap.drawTile).toHaveBeenCalledWith(0, 2, 1);
    expect(minimap.drawTile).toHaveBeenCalledWith(1, 0, 1);
    expect(minimap.drawTile).toHaveBeenCalledWith(1, 2, 1);
    expect(minimap.drawTile).toHaveBeenCalledWith(2, 0, 1);
    expect(minimap.drawTile).toHaveBeenCalledWith(2, 1, 1);
    expect(minimap.drawTile).toHaveBeenCalledWith(2, 2, 1);

  });

  afterEach(function() {
    minimap = null;
  });
});
