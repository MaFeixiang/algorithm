function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(1000));


// 尾调用优化

function fib1(n, prev = 0, next = 1) {
  if (n < 2) {
    return next;
  }
  return fib1(n - 1, next, prev + next)
}

console.log(fib1(1439))