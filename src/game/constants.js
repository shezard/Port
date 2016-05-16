module.exports = {
  mapSize: 5,

  map: [
    [1,1,1,1,1],
    [1,9,0,0,1],
    [1,0,0,0,1],
    [1,0,9,0,1],
    [1,1,1,0,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
  ],

  player: {
    x: 3,
    y: 3,
    d: {
      x:0,
      y:-1
    }
  },

  blocks: {
    1: {
      base64: require('../img/wall.png'),
    },
    9: {
      base64: require('../img/bush.png'),
    },
  }
};
