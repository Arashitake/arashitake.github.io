function quickSort(arr) {
  // 退出条件
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0]; // 基准点
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

function quickSort1(arr, l, r) {
  if (l < r) {
    let q = partition(arr, l, r);
    quickSort1(arr, l, q - 1);
    quickSort1(arr, q + 1, r);
  }
  return arr;
}
// 根据基准，将大于基准的放在基准右边，小于基准的放在基准左边
function partition(arr, l, r) {
  let pivot = arr[l]; // 基准
  let i = l,
    j = r + 1,
    temp; // i：最左侧大于基准的指针位置，j：最右侧小于基准的指针位置
  // 将小于基准的全部放在左边，大于基准的全部放在右边
  while (true) {
    while (arr[++i] < pivot && i < r); // 找到距离左侧最近的大于基准的元素的下标
    while (arr[--j] > pivot); // 找到距离右侧最近的小于基准的元素的下标
    if (i >= j) {
      break;
    }
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // 将中点和最左侧的基准元素交换位置
  arr[l] = arr[j];
  arr[j] = pivot;

  return j; // 返回基准元素的下标
}
// let arr = [6, 4, 8, 2, 9, 1, 11, 5];

let len = 1e5;
let arr = new Array(len);
// 打乱有序数组
// 按顺序给每一个数字和一个随机数换位
function makeRandom(arr) {
  let num, temp;
  for (let i = 0; i < len; i++) {
    arr[i] = i + 1;
  }
  for (let i = 0; i < len; ++i) {
    num = parseInt(Math.random() * len);
    temp = arr[i];
    arr[i] = arr[num];
    arr[num] = temp;
  }
  return arr;
}

console.time('quickSort耗时');
// console.log(quickSort(arr));
quickSort(arr);
console.timeEnd('quickSort耗时');

console.time('quickSort1耗时');
// console.log(quickSort1(arr, 0, arr.length - 1));
quickSort1(arr);
console.timeEnd('quickSort1耗时');

// push 和 指针
// let len = 4e7;
// let arr_point = new Array(len);
// let arr_push = [];
// console.time('point time');
// for (let i = 0; i < len; i++) {
//   arr_point[i] = i;
// }
// console.timeEnd('point time');

// console.time('push time');
// for (let i = 0; i < len; i++) {
//   arr_push.push(i);
// }
// console.timeEnd('push time');
