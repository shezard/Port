var Player = require('../../../src/game/player');

describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player([
      [1,1,1,1,1],
      [1,0,0,0,1],
      [1,1,0,1,1],
      [1,0,0,0,1],
      [1,1,1,1,1]
    ], {
      x: 2,
      y: 2,
      d: {
        x: 0,
        y: -1,
      }
    });
  });

  it('should be initialized correctly', function() {
    expect(player.x).toBe(2);
    expect(player.y).toBe(2);
    expect(player.d.x).toBe(0);
    expect(player.d.y).toBe(-1);
    expect(player.map).toEqual([
      [1,1,1,1,1],
      [1,0,0,0,1],
      [1,1,0,1,1],
      [1,0,0,0,1],
      [1,1,1,1,1]
    ])
  });

  it('should go forward', function() {
    player.forward();
    expect(player.x).toBe(2);
    expect(player.y).toBe(1);
  });

  it('should go backward', function() {
    player.backward();
    expect(player.x).toBe(2);
    expect(player.y).toBe(3);
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

  it('should not move if going forward and facing a wall', function() {
    player.forward();
    player.forward();
    expect(player.x).toBe(2);
    expect(player.y).toBe(1);
  });

  it('should not move if going backward and bumping into a wall', function() {
    player.backward();
    player.backward();
    expect(player.x).toBe(2);
    expect(player.y).toBe(3);
  })

  afterEach(function() {
    minimap = null;
  });
});
