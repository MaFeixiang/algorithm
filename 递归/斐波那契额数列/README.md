# 记住三个点

1. 表象：函数的自我调用
2. 实际上：把大问题分解成小问题
3. 实现
   1. 找到 base case
   2. 找到 recursive rule


# 代码实现

```js
function fib(n) {
  // base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}
```

# 复杂度
- Time: O(n)
- Space: O(n)


# 优化-利用尾调用

```js
function fib1(n, prev = 0, next = 1) {
  if (n < 2) {
    return next;
  }
  return fib1(n - 1, next, prev + next)
}
```
- 尾调用原理：尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。