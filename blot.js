const rows = 2; // number of rows
const cols = 2; // number of columns
const spacing = 75; // Distance between stars

function drawLine(x1, y1, x2, y2) {
  const linePath = [
    bt.nurbs([
      [x1, y1],
      [x2, y2],
      [x2, y2]
    ])
  ];
  return linePath;
}

function drawComplexStar(cx, cy, spikes, outerRadius, innerRadius, layers) {
  const step = Math.PI / spikes;
  const paths = [];

  for (let l = 0; l < layers; l++) {
    const path = [];
    const radius = outerRadius - l * (outerRadius - innerRadius) / (layers - 1);

    for (let i = 0; i < 2 * spikes; i++) {
      const rad = i % 2 === 0 ? radius : radius * 0.7;
      const x = cx + Math.cos(i * step) * rad;
      const y = cy + Math.sin(i * step) * rad;
      path.push([x, y]);
    }
    path.push(path[0]); // Close the star shape

    paths.push(path);
  }

  return paths;
}
