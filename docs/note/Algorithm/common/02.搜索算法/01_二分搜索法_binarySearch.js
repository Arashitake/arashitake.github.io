/**
 * @param {*} arr 有序数组
 * @param {*} x 要查找的数
 * @return 要查找的数在数组中的下表
 */
function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (x == arr[mid]) {
      return mid;
    }

    if (x > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // 没有找寻到
}
let arr = [1, 2, 4, 5, 6, 8, 9, 11];
console.log("index: " + binarySearch(arr, 9));
console.log("number: " + arr[binarySearch(arr, 9)]);

/**
 * @param {*} arr 有序数组
 * @param {*} x 要查找的数
 * @return 要查找的数在数组中的下表
 */
function binarySearch2(arr, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
