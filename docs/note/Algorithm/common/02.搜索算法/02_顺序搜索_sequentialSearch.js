function sequentialSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 4, 5, 6, 8, 9, 11];
console.log('index: ' + sequentialSearch(arr, 9));
console.log('number: ' + arr[sequentialSearch(arr, 9)]);
