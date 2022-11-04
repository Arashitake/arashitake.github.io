// methods 1: 返回的是函数
function addCurry1() {
  let arr = [...arguments];
  let fn = function () {
    // 没有参数的时候返回数值
    if (arguments.length == 0) {
      return arr.reduce((a, b) => a + b);
    } else {
      arr.push(...arguments);
      return fn;
    }
  };
  return fn;
}

console.log(addCurry1(1)(2)(3)(4)()); // 10
console.log(addCurry1(1)(2, 3)(4)()); // 10
console.log(addCurry1(1, 2, 3, 4)()); // 10

// methods 2: 直接执行
function addCurry2(...arg) {
  let argu = arg.slice();
  function curry(...arg) {
    return add3(...[...argu, ...arg]);
  }

  curry.toString = function () {
    return argu.reduce((pre, cur) => pre + cur);
  };
  return curry;
}

console.log(addCurry2(1)(2)(3).toString()); // 6
console.log(addCurry2(1, 2)(3).toString()); // 6
console.log(addCurry2(1, 2, 3)(4)(5).toString()); // 15

// methods 3: arguments
function addCurry3() {
  let arr = [...arguments];
  let fn = function () {
    arr.push(...arguments);
    return fn;
  };
  fn.toString = function () {
    return arr.reduce((a, b) => a + b);
  };
  return fn;
}

console.log(addCurry3(1)(2)(3).toString()); // 6
console.log(addCurry3(1, 2, 3)(4)(5).toString()); // 15

// 缓存判断
const handleOption1 = (param) => {
  console.log("每次调用 handleOption 都要执行 if...else...");
  if (param === "A") {
    console.log("A");
  } else {
    console.log("others");
  }
};

handleOption1("A");
handleOption1("A");
handleOption1("A");

/**
 * 每次调用 handleOption 都要执行 if...else...
 * A
 * 每次调用 handleOption 都要执行 if...else...
 * A
 * 每次调用 handleOption 都要执行 if...else...
 * A
 */

const handleOption2 = (param) => {
  console.log("从始至终只执行了一次 if...else...");
  if (param === "A") {
    return () => console.log("A");
  } else {
    return () => console.log("other");
  }
};

const temp = handleOption2("A");

temp();
temp();
temp();

/**
 * 从始至终只执行了一次 if...else...
 * A
 * A
 * A
 */
