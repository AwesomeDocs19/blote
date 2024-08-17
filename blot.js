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

drawLine(1, 2, 10, 2)
