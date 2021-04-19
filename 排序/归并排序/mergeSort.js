
/**
 * 分析
 *  1. 分块
 *    寻找中点
 *    深度遍历
 *  2. 排序
 *    三个指针
 *    来回操作
 *    注意边界
 *    右边为空处理
 */

function sortArray(arr) {
  mergeSort(arr, 0, arr.length - 1); // 归并排序 数组 第一位 最后一位
  return arr;
}

function mergeSort(arr, left, right) {
  if (left >= right) return; // 只剩一个元素就返回上一层

  // 找到中点
  var mid = left + Math.floor((right - left) / 2);

  // 分块
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  // 排序
  mergeArray(arr, left, mid, right);
}

function mergeArray(arr, start, mid, end) {
  var arrTemp = arr.slice(), // 复制一个不变得数组
      left = start, // 左区域第一个
      right = mid + 1, // 右区域第一个
      idx = start; // 原数组开始位置
  
  // 进行左右区域得值得比较
  while(left <= mid && right <= end) { // 左区域 和 右区域 得边界
    if (arrTemp[left] < arrTemp[right]) {
      arr[idx++] = arrTemp[left++];
    } else {
      arr[idx++] = arrTemp[right++];
    }
  }

  // 特殊情况
  // 1. 为空
  // 2. right为空
  while(left <= mid) {
    arr[idx++] = arrTemp[left++];
  }
}

var arr = [4, 2, 1, 3, 5, 8, 7, 9];
console.log(sortArray(arr));
