//节流
// （一）时间戳：第一次触发会立即执行，最后一次触发不会被调用（不顾头，顾尾）
// 鼠标移入，先立即执行一次，然后每过两秒执行一次，直到鼠标移出，停止事件的触发
function throttle1(func, wait) {
  let context, args;
  let previous = 0; //之前的时间戳
  return function () {
    context = this; //改变执行函数内部this的指向
    args = arguments; //event指向问题
    let now = new Date().valueOf(); //获取当前的时间戳
    if (now - previous > wait) {
      //触发间隔时间大于时间周期，立即执行
      func.apply(context, args); //立即执行
      previous = now;
    }
  };
}

//（二）定时器：第一次不会触发，最后一次触发（顾头，不顾尾）
function throttle2(func, wait) {
  let context, args, timeout;
  return function () {
    context = this; //改变执行函数内部this的指向
    args = arguments; //event指向问题
    if (!timeout) {
      //undefined的取反为有值
      //定时器不存在，执行；执行后，又将定时器为null
      timeout = setTimeout(() => {
        timeout = null; //置空，让下一次能够再执行进来
        func.apply(context, args);
      }, wait);
      //   setTimeout(function(){
      //       func.apply();
      //   },wait);
    }
  };
}

//（三）时间戳+定时器：第一次直接执行，最后一次还会执行（顾头顾尾，有头有尾）
function throttle3(func, wait) {
  let context, args, timeout;
  let previous = 0; //之前的时间戳
  let later = function () {
    previous = new Date().valueOf(); //更新时间戳
    timeout = null; //置空，让下一次能够再执行进来
    func.apply(context, args);
  };

  return function () {
    context = this; //改变执行函数内部this的指向
    args = arguments; //event指向问题
    let now = new Date().valueOf();

    if (now - previous > wait) {
      if (timeout) {
        //如果有值，清除掉
        clearTimeout(timeout);
        timeout = null;
      }

      func.apply(context, args);
      previous = now;
    } else if (!timeout) {
      //undefined的取反为有值
      //定时器不存在，执行；执行后，又将定时器为null
      timeout = setTimeout(later, wait);
    }
  };
}

//（四）时间戳+定时器：可控制，顾头顾尾（TT），顾头不顾尾（TF），不顾头顾尾（FT）
function throttle4(func, wait, options) {
  let context, args, timeout, result;
  let previous = 0; //之前的时间戳
  if (!options) options = {};

  let later = function () {
    previous = new Date().valueOf(); //更新时间戳
    timeout = null; //置空，让下一次能够再执行进来
    func.apply(context, args);
  };

  let throttled = function () {
    context = this; //改变执行函数内部this的指向
    args = arguments; //event指向问题
    let now = new Date().valueOf();

    if (options.leading == false && !previous) {
      previous = now;
    }
    if (now - previous > wait) {
      //第一次直接执行
      if (timeout) {
        //如果有值，清除掉
        clearTimeout(timeout);
        timeout = null;
      }

      func.apply(context, args);
      previous = now;
    } else if (!timeout && options.trailing != false) {
      //undefined的取反为有值
      //最后一次会被执行
      timeout = setTimeout(later, wait);
    }
    return result;
  };

  //节流的取消操作
  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

// ————————————————————————————————————————————————————
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

btn.onclick = function () {
  doSome.cancel(); //cancel()为取消操作
  // container.style.background = "#f00";
};

doSome = throttle(doSomeThing, 2000, {
  leading: true,
  trailing: false,
});

//高级函数，防抖
container.onmousemove = doSome;

//立即执行，鼠标离开，但是还是会接着执行
//两种实现方法：（1）时间戳；（2）定时器
//uderscore-js.com/functionsRelated.html

//第（一）版的等效为：不顾头，顾尾
// container.onmousemove = _.throttle(doSomeThing,2000,{
//     leading: true,     //首次立即触发（true），禁止首次立即触发（false）
//     trailing: false     //最后一次执行（true），禁止最后一次函数执行结果（false）
// });

//第一次会输出，最后一次不会再被调用 leading: true, trailing: false
//第一次不会输出，最后一次会再被调用 leading: false, trailing: true
//第一次会输出，最后一次会再被调用 leading: true, trailing: true
// container.onmousemove = _.throttle(doSomeThing,2000,{
//     leading: false,
//     trailing: true
// });
