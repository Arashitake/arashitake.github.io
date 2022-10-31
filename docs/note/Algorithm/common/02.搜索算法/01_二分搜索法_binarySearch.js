/**
 * @param {*} arr 有序数组
 * @param {*} x 要查找的数
 * @return 要查找的数在数组中的下表
 */
function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (x == arr[middle]) {
      return middle;
    }

    if (x > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1; // 没有找寻到
}
let arr = [1, 2, 4, 5, 6, 8, 9, 11];
console.log('index: ' + binarySearch(arr, 9));
console.log('number: ' + arr[binarySearch(arr, 9)]);
