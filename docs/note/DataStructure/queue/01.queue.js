function Queue() {
  this.queue = [];

  // 1. enqueue(ele)
  Queue.prototype.enqueue = (ele) => {
    this.queue.push(ele);
  };
  // 2. dequeue
  Queue.prototype.dequeue = () => {
    return this.queue.shift();
  };
  // 3. front
  Queue.prototype.front = () => {
    return this.queue[0];
  };
  // 4. isEmpty
  Queue.prototype.isEmpty = () => {
    return this.queue.length == 0;
  };
  // 5. size
  Queue.prototype.size = () => {
    return this.queue.length;
  };
  // 6. toString
  Queue.prototype.toString = () => {
    let res = "";
    for (let item of this.queue) {
      res = item + " ";
    }
    return res;
  };
}

// 1. 应用：测试
const queue = new Queue();
queue.enqueue("l");
queue.enqueue("a");
queue.enqueue("n");
queue.enqueue("g");
console.log(queue);

queue.dequeue();
console.log(queue);

console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.toString());

/* 2. 应用：击鼓传花
 * 传入一组数据和设定的数字num，循环遍历数组内元素，
 * 遍历到的元素为指定数字num时，
 * 将该元素删除，直至数组剩下一个元素
 */
const passGame = (nameList, num) => {
  const queue = new Queue();

  for (let name of nameList) {
    queue.enqueue(name);
  }

  while (queue.size() > 1) {
    // 不是num时，重新加入队尾
    // 是num时，将其从队列中删除
    // 1. num数字之前的人重新放入队尾（队列前面删除的加到队列最后）
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 2. 是num直接删除
    queue.dequeue();
  }
  // 获取剩下的人
  let endName = queue.front();
  return nameList.indexof(endName);
};

// 测试
const names = ["A", "B", "C", "D"];
console.log(passGame(names, 3));
