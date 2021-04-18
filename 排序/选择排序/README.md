# 分析解题思路

- 利用选择排序进行解题（从小到大）
- 每次循环都会把本次循环的最小值找出来，放到最左侧
- 后面的每一次循环，上一次已经找出的不参与循环运算， len - i
- 最后一个元素不需要循环 len - 1


# 分析算法

```javascript
const selectedSort = function (arr) {
  const len = arr.length; // 保存arr的长度
  for (let i = 0; i < len - 1; i++) {
    for (let j = 1; j < len - i; j++>) {
      if (arr[j] < arr[j - 1]>) {
        [arr[j] arr[j - 1]] = [arr[j - 1], arr[j]]; // ES6 解构

        // let temp = arr[j - 1];
        // arr[j - 1] = arr[j]；
        // arr[j] = temp;
      }
    }
  }
}
```

# 分析复杂度

- Time: 两层for循环 => O(n2)
- Space: O(1)