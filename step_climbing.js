function ways(steps, hops) {
  if (steps < 0 || hops.length === 0) return 0;
  if (steps === 0) return 1;
  console.log('without', steps, tail(hops));
  console.log('with', steps - head(hops), hops)
  return ways(steps, tail(hops)) + ways(steps - head(hops), hops);
}

function head(list) {
  return list[0];
}

function tail(list) {
  return list.slice(1);
}
