# 分析解题思路

1. 一共就两个步骤 拆分 + 排序
2. 拆分：把数组拆成左右两个块 === 递归(深度优先)
   1. 中点的选择
3. 排序：对每个块进行比较排序
   1. 一共三个指针，一个指向原数组 一个指向左区域的 一个指向右区域
   2. 注意边界
   3. 然后左区域和右区域相比较，较小的进入原数组的对应位置，原数组指针和较小区域指针向前移动
   4. 注意没有right或者为空的情况
4. 完成。

# 实现

```js
function sortArray(arr) {
  mergeSort(arr, 0, arr.length - 1);
  return arr;
}

// 拆分
function mergeSort(arr, left, right) {
  if (left >= right) return; // base case

  var mid = left + Math.floor((right - left) / 2); // 中点

  mergeSort(arr, left, mid); // 左区域
  mergeSort(arr, mid + 1, right); // 右区域

  mergeArray(arr, left, mid, right) // 排序
}

// 排序
function mergeArray(arr, start, mid, right) {
  var arrTemp = arr.slice(),
      left = start,
      right = mid + 1,
      idx = start; // 三个指针
  
  // 排序
  while(left <= mid && right <= end) { // 边界
    if (arrTemp[left] < arrTemp[right]) {
      arr[idx++] = arrTemp[left++];
    } else {
      arr[idx++] = arrTemp[right++];
    }
  }

  // 特殊情况
  // 为空
  // 没有right
  while(left <= mid) {
    arr[idx++] = arrTemp[left++]
  }
}
```

# 复杂度
- Time: O(nlog(n))
- Space: O(n))