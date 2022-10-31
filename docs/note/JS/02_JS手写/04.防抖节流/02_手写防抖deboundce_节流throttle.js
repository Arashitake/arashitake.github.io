// 防抖节流概念： 【https://blog.csdn.net/weixin_45279175/article/details/121545374】
/* 防抖：
防抖是指当持续触发事件时，
一定时间段内没有再触发事件，事件处理函数才会执行一次，
如果设定时间到来之前，又触发了事件，就重新开始延时。
也就是说当一个用户一直触发这个函数，
且每次触发函数的间隔小于既定时间，那么防抖的情况下只会执行一次。
*/
// 【防止用户频繁触发一个事件，只执行该事件的最后一次】

/* 此版本的 debounce 有以下功能：
  1. this 能够指向调用元素（because 使用了箭头函数）
  2. event 事件能够表示鼠标位置 mouseEvent
*/
function debounce(fn, wait) {
  let timeout = null;
  return function (...args) {
    // 如果事件再次触发就清除定时器，重新计时
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

/* 节流
  节流是指动作绑定事件后，动作触发事件，
  在这段时间内，如果动作又发生，则无视该动作，
  直到事件执行完后，才能重新触发。
*/
// 【控制高频执行次数】
// 时间戳
function throttle(fn, wait) {
  let previous = 0;
  return function (...args) {
    let now = new Date().valueOf();
    if (now - previous > wait) {
      fn.apply(this, args);
      previous = now;
    }
  };
}
// 定时器
function throttle(fn, wait) {
  let timeout = null;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
}

/**防抖节流不同
 * 防抖：随机应变，最后一次触发作为计时起点
 * 节流：铁打不动，第一次触发作为计时起点
 */
// ————————————————————— 测试 —————————————————————
let count = 0;
let container = document.querySelector("#container");
let btn = document.querySelector("button");
container.innerHTML = count;

function test(e) {
  console.log(this);
  console.log(e);
  container.innerHTML = count++;
  return "successed";
}

// let doSome = debounce(test, 500);
let doSome = throttle(test, 1000);

btn.onclick = function () {
  doSome.cancel();
};

// container.onmousemove = test;
container.onmousemove = doSome;
