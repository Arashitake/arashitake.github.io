//防抖的函数
//（一）初步的防抖函数
function debounce1(func, wait) {
  let timeout = 0;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

//（二）this能够指向调用元素的防抖函数
function debounce2(func, wait) {
  let timeout = 0;
  return function () {
    //改变执行函数内部this的指向
    let context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context);
    }, wait);
  };
}

//（三）event事件能够表示鼠标位置mouseEvent的防抖函数
function debounce3(func, wait) {
  let timeout = 0;
  return function () {
    let context = this; //改变执行函数内部this的指向
    let args = arguments; //event指向问题
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

//（四）有立即执行参数的防抖函数
function debounce4(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this; //改变执行函数内部this的指向
    let args = arguments; //event指向问题
    clearTimeout(timeout);

    if (immediate) {
      let callNow = !timeout; //一开始timeout不存在为false，取反为true
      setTimeout(() => {
        timeout = null;
      }, wait);
      //这部分会立即执行
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      //这部分不会立即执行
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}

//（五）有返回值的防抖函数以及取消操作
function debounce5(func, wait, immediate) {
  let timeout, result;
  let decounced = function () //已经执行完了的防抖函数（闭包）
  {
    let context = this; //改变执行函数内部this的指向
    let args = arguments; //event指向问题

    if (timeout) {
      clearTimeout(timeout);
    }

    if (immediate) {
      let callNow = !timeout; //一开始timeout不存在为false，取反为true
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      //这部分会立即执行
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      //这部分不会立即执行
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };

  //防抖函数的取消操作
  decounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return decounced;
}

// ——————————————————————————————————————————————————————————————————————————
let count = 0;
//演示事件频发发生
let container = document.querySelector("#container");
let btn = document.querySelector("#btn");
function doSomeThing(e) {
  //（二）为了让this指向当前的container，即：使用触发事件调用该函数的元素
  console.log(this);

  //（三）event指向问题
  console.log(e);

  //可能会做回调或者发送Ajax请求
  container.innerHTML = count++;
  return "想要的结果";
}

let doSome = debounce(doSomeThing, 1000, false);
btn.onclick = function () {
  doSome.cancel(); //cancel()为取消操作
};

//高级函数，防抖
container.onmousemove = doSome;
// container.onmousemove = debounce(doSomeThing,1000,false);
// container.onmousemove = _.debounce(doSomeThing,1000);

//调用该函数，使得需要防抖的函数里的this指向调用该函数的元素，event鼠标事件能够相关联
var test = debounce(clg, 500);

$("#topmarginSearch")[0].oninput = test;

function clg(e) {
  console.log(e.target.value);
}
