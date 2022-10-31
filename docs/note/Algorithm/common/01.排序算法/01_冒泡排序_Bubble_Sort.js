/**
 * 单纯两个数值的前后对比，得出最大值或最小值
 */
function bubbleSort1(arr) {
  console.time('bubbleSort1耗时');

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.timeEnd('bubbleSort1耗时');
  return arr;
}

/**
 * 在排序中，进行正向和反向一次获得两个最值（最大和最小）
 */
function bubbleSort2(arr) {
  let low = 0;
  let high = arr.length - 1;
  let temp, i;
  console.time('bubbleSort2耗时');

  while (low < high) {
    // 正向冒泡，找到最大值
    for (i = low; i < high; ++i) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    // 修改high，前移一位
    --high;

    // 反向冒泡，找到最小值
    for (i = high; i > low; --i) {
      if (arr[i] < arr[i - 1]) {
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
    // 修改low，后移一位
    ++low;
  }

  console.timeEnd('bubbleSort2耗时');
  return arr;
}

let arr = [6, 4, 8, 2, 9, 1, 11, 5];

console.log(bubbleSort1(arr));
console.log(bubbleSort2(arr));
