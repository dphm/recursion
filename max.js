function max(numbers, largest_so_far) {
  largest_so_far = largest_so_far || numbers[0] || 0;
  if (numbers.length === 0) return largest_so_far;

  var next_num = numbers[0];
  if (next_num > largest_so_far) {
    return max(numbers.slice(1), next_num);
  } else {
    return max(numbers.slice(1), largest_so_far);
  }
}

module.exports = max;
