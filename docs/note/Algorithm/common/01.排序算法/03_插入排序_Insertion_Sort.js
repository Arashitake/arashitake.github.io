function insertionSort(arr) {
  let cur, j;
  console.time('insertionSort耗时');
  // 默认第一个已经排好序，从第二个开始
  for (let i = 1; i < arr.length; i++) {
    cur = arr[i];
    j = i - 1;
    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  console.timeEnd('insertionSort耗时');
  return arr;
}
let arr = [6, 4, 8, 2, 9, 1, 11, 5];
console.log(insertionSort(arr));
