function selectionSort(arr) {
  let minIndex, temp; // minIndex 为最小数的索引
  console.time('selectionSort耗时');
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    // 找到最小数，并保存索引，用来交换
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  console.timeEnd('selectionSort耗时');
  return arr;
}

//方法二
let quickSort2 = function (arr) {
  console.time('2.快速排序耗时');
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  console.log(pivot);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.timeEnd('2.快速排序耗时');
  return quickSort2(left).concat([pivot], quickSort2(right));
};

let arr = [6, 4, 8, 2, 9, 1, 11, 5];
console.log(selectionSort(arr));
