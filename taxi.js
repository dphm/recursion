function ways(south, east) {
  if (south === 0 && east === 0) return 1;
  if (south < 0 || east < 0) return 0;
  return ways(south, east - 1) + ways(south - 1, east);
}

exports = module.exports = ways;
