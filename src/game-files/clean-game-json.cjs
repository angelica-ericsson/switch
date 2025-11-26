const fs = require('fs');
const gameData = JSON.parse(fs.readFileSync(__dirname + '/game.json'));

for (const node of gameData.nodes) {
  node.measured = undefined;
  node.selected = undefined;
  node.dragging = undefined;
}

for (const edge of gameData.edges) {
  edge.markerEnd = undefined;
  edge.style = undefined;
}

fs.writeFileSync(__dirname + '/game.json', JSON.stringify(gameData, null, 2));
