function rgb(r, g, b) {
  // complete this function  
  r = roundToValid(r);
  g = roundToValid(g);
  b = roundToValid(b);

  const rStr = r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16);
  const gStr = g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16);
  const bStr = b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16);

  return `${rStr}${gStr}${bStr}`.toUpperCase();
}

function roundToValid(num) {
  if (num > 255) {
    return 255;
  }
  if (num < 0) {
    return 0;
  }

  return num;
}