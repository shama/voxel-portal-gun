var createEngine = require('voxel-engine');
var createTerrain = require('voxel-perlin-terrain');

// create the game
var game = createEngine({
  generateVoxelChunk: createTerrain({scaleFactor:10}),
  chunkDistance: 2,
  materials: [
    'obsidian',
    ['grass', 'dirt', 'grass_dirt'],
    'grass',
    'plank'
  ],
  texturePath: './textures/',
  startingPosition: [35, -1200, 35],
  worldOrigin: [0,0,0],
});
var container = document.getElementById('container');
game.appendTo(container);
container.addEventListener('click', function() {
  game.requestPointerLock(container);
});

// add some trees
var createTree = require('voxel-forest');
for (var i = 0; i < 20; i++) {
  createTree(game, { bark: 4, leaves: 3 });
}

// shoot a portal gun
var shoot = require('../')(game);
window.addEventListener('mouseup', shoot.bind(this), false);
