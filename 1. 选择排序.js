const arr = [2, 5, 6, -1, -2, 5, 6, 9];

// 怎么描述选择排序
/**
 * 1. 记录假设
 *    首先这个数组是一个无序的number类型的数组
 * 2. 解释你的方法和以及如何做这道题
 *    利用选择排序，对无须数组进行排序
 * 3. 是否需要写注释
 * 4. 复杂度的解释
 *    时间复杂度: O(n2)
 *    空间复杂度: O(1)
 */
const selectedSort = function (arr) {
  const len = arr.length; // 存储数组的长度
  for (let i = 0; i < len - 1; i++) { // 为什么 len - 1，因为最后一个元素不需要比较
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]; // ES6 语法
      }
    }
  }
}

selectedSort(arr);

console.log(arr);