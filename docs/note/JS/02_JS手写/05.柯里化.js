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

// methods 3: arguments 写法
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
