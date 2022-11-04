// 生成原始数组 nums
let nums = [];
for (let i = 1; i <= 54; i++) {
  nums.push(i);
}
// console.log(nums);
/**
 * [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
 * 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
 * 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
 * 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
 * 49, 50, 51, 52, 53, 54]
 */

// 【01】青铜洗牌：暴力抽取
const shuffle1 = function (nums) {
  let count = 0;
  let randomNums = [];
  while (randomNums.length < nums.length) {
    count++; // 计算洗牌次数
    let rand = randOne();
    if (randomNums.includes(rand)) {
      rand = randOne();
    } else {
      randomNums.push(rand);
    }
  }
  console.log("洗牌次数: ", count);
  return randomNums;
};

// 在1到54之间任意取一整数
const randOne = function () {
  return Math.floor(Math.random() * 54) + 1;
};

// shuffle1(nums);

// 【02】白银洗牌: 交互位置
// 印度洗牌法
const shuffle2 = function (nums) {
  let randomNums = JSON.parse(JSON.stringify(nums)); // 深拷贝原先数组
  for (let i = 0; i < 20; i++) {
    let randIndex1 = randOneIndex();
    let randIndex2 = randOneIndex();
    // 若 rand1 > rand2, 二者替换
    if (randIndex1 > randIndex2) {
      let temp = randIndex1;
      randIndex1 = randIndex2;
      randIndex2 = temp;
    }
    // 将牌根据 randIndex1 和 randIndex2 分成三堆，1、3合并再和2合并
    let radomBlock = randomNums.slice(randIndex1, randIndex2 + 1);
    randomNums = randomNums.slice(0, randIndex1).concat(randomNums.slice(randIndex2, 53)).concat(radomBlock);
  }
};

// 在0到53之间任意取一整数作为数组下标
const randOneIndex = function () {
  return Math.floor(Math.random() * 54);
};

// 【03】黄金洗牌: 等概率出现
const shuffle3 = function (nums) {
  const randomNums = nums.slice(0); // 复制数组
  let n = randomNums.length;
  // 有 n! 种可能
  for (let i = 0; i < n; i++) {
    // 从 1 到 n-1 随机选一个
    let rand = randOneSection(i, n - 1);
    // 交互nums数组 i 和 rand 下标的两个元素
    [randomNums[i], randomNums[rand]] = [randomNums[rand], randomNums[i]];
  }

  return randomNums;
};

// 获取闭区间 [n, m] 内的一个随机整数
const randOneSection = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
};

// console.log(shuffle3(nums));

// 【04】铂金洗牌：Fisher-Yates
const FYShuffle = function (nums) {
  const randomNums = nums.slice(0);
  let len = randomNums.length;
  while (len > 1) {
    let rand = Math.floor(Math.random() * len);
    len--; // 每次rand都与倒数的第len个交换
    [randomNums[rand], randomNums[len]] = [randomNums[len], randomNums[rand]];
  }
  return randomNums;
};

// console.log(FYShuffle(nums));

//【05】钻石洗牌：Riffle Shuffle
const RShuffle = function (nums) {
  let randomNums = nums.slice(0);
  // 洗七次为最佳
  for (let i = 0; i < 7; i++) {
    let randIndex = Math.floor(Math.random() * 54); // 在0到53中取任一整数作为下标
    let arr1 = randomNums.slice(0, randIndex);
    let arr2 = randomNums.slice(randIndex);
    randomNums = arrJoinArr(arr1, arr2);
  }
  return randomNums;
};

// 将两个数组穿插合并
const arrJoinArr = function (arr1, arr2) {
  let itemArr = []; // 临时数组
  // 先拿到两个数组中长度较短的那个数组的长度
  let minLength = arr1.length > arr2.length ? arr2.length : arr1.length;
  // 将两个数组中较长的数组记录下来
  let longArr = arr1.length > arr2.length ? arr1.slice(0) : arr2.slice(0);
  // 循环返回为较短的那个数组的长度
  for (let i = 0; i < minLength; i++) {
    itemArr.push(arr1[i]);
    itemArr.push(arr2[i]);
  }
  // 将长的那个多出来的拼接起来
  return itemArr.concat(longArr.slice(minLength));
};

// console.log(RShuffle(nums));
