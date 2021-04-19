# 思路

1. 表象：函数的自我调用
2. 实际上：大问题转换成小问题
3. 实现
   1. base case
   2. recursive rules

# 实现

```js
function a_row_b(a, b) {
  if (a === 0) return 'a 不能为 0';
  if (b === 0) return 1;

  var half = a_row_b(a, Math.floor(b / 2));
  if ( b % 2 === 0) {
    return half * half;
  } else {
    return half * half * a;
  }
}
```

# 复杂度

- Time: O(log(b))
- Space: O(log(b))