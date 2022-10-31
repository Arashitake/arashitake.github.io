// function mergeSort(arr) {
//   let len = arr.length;
//   if (len < 2) {
//     return arr;
//   }
//   let middle = Math.floor(len / 2);
//   let left = arr.slice(0, middle);
//   let right = arr.slice(middle);
//   return merge1(mergeSort(left), mergeSort(right));
//   // return merge2(mergeSort(left), mergeSort(right));
// }

function mergeSort1(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge1(mergeSort1(left), mergeSort1(right));
}

function mergeSort2(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge2(mergeSort2(left), mergeSort2(right));
}

/**
 * @param {*} left 左边的数组
 * @param {*} right 右边的数组
 */
// 直接移除
function merge1(left, right) {
  let res = [];
  // console.time('mergeSort耗时');
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }
  // console.timeEnd('mergeSort耗时');
  return res;
}

// 指针
function merge2(left, right) {
  let res = [],
    l = 0,
    r = 0;
  // console.time('mergeSort耗时');
  while (l != left.length && r != right.length) {
    if (left[l] <= right[r]) {
      res.push(left[l++]);
    } else {
      res.push(right[r++]);
    }
  }

  while (l != left.length) {
    res.push(left[l++]);
  }

  while (r != right.length) {
    res.push(right[r++]);
  }
  // console.timeEnd('mergeSort耗时');
  return res;
}

// ——————————————————————————————— 打乱有序数组 —————————————————————————————————————
// let arr = [6, 4, 8, 2, 9, 1, 11, 5];

function randomNumber(l, r) {
  return parseInt(Math.random() * (r - l) + l);
}

let len = 100000;
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

// console.log(mergeSort(arr));
// 耗时累加：0.136s
console.time('mergeSort1耗时');
mergeSort1(arr);
console.timeEnd('mergeSort1耗时');

console.time('mergeSort2耗时');
mergeSort2(arr);
console.timeEnd('mergeSort2耗时');
