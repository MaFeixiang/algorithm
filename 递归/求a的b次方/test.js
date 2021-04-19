function a_row_b(a, b) {
  // base case
  if (b === 0) return 1; 

  // recursive rules
  var half = a_row_b(a, Math.floor(b / 2));

  if (b % 2 === 0) {
    return half * half;
  } else {
    return half * half * a;
  }
}

console.log(a_row_b(2, 4));