var Player = require('../../../src/game/player');

describe('Minimap', function() {

  var player;

  beforeEach(function() {
    player = new Player({
      x: 0,
      y: 0,
      d: {
        x: 0,
        y: -1,
      }
    });
  });

  it('should be initialized correctly', function() {
    expect(player.x).toBe(0);
    expect(player.y).toBe(0);
    expect(player.d.x).toBe(0);
    expect(player.d.y).toBe(-1);
  });

  it('should go forward', function() {
    player.forward();
    expect(player.x).toBe(0);
    expect(player.y).toBe(-1);
  });

  it('should go backward', function() {
    player.backward();
    expect(player.x).toBe(0);
    expect(player.y).toBe(1);
  });

  it('should go left', function() {
    player.left();
    expect(player.d.x).toBe(-1);
    expect(player.d.y).toBe(0);
  });

  it('should go right', function() {
    player.right();
    expect(player.d.x).toBe(1);
    expect(player.d.y).toBe(0);
  });

  afterEach(function() {
    minimap = null;
  });
});
