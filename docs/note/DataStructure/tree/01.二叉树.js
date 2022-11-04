function treeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  // this.accessr = false;
}

function buildTree(arr) {
  let root = new treeNode(arr[0]);
  let nodelist = [root];
  let index = 1;
  for (let node of nodelist) {
    node.left = new treeNode(arr[index]);
    nodelist.push(node.left);
    index++;
    if (index == arr.length) {
      return root;
    }
    node.right = new treeNode(arr[index]);
    nodelist.push(node.right);
    index++;
    if (index == arr.length) {
      return root;
    }
  }
}

function dfs(root) {
  process.stdout.write(root.data); // 打印出来看的
  root.left && dfs(root.left);
  root.right && dfs(root.right);
}

function bfs(root) {
  const queue = [root];
  while (queue.length > 0) {
    let node = queue.shift(); // 取出队头
    process.stdout.write(node.data); // 打印出来看的
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
}

/* -------------------------- 前序遍历 -------------------------- */
// 前序遍历-递归: ABDECFG
function preorder_r1(root) {
  process.stdout.write(root.data); // 打印出来看的
  root.left && preorder_r1(root.left);
  root.right && preorder_r1(root.right);
}

function preorder_r2(root) {
  if (!root) return;
  process.stdout.write(root.data); // 打印出来看的
  preorder_r2(root.left);
  preorder_r2(root.right);
}

// 前序遍历-迭代: ABDECFG
function preorder_i(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    process.stdout.write(node.data); // 打印出来看的
    // 由于栈存在先入后出的特性，所以需要先入右子树才能保证先出的是左子树
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
}

/* -------------------------- 中序遍历 -------------------------- */
// 中序遍历-递归：DBEAFCG
function inorder_r(root) {
  if (!root) return;
  inorder_r(root.left);
  process.stdout.write(root.data); // 打印出来看的
  inorder_r(root.right);
}

// 中序遍历-迭代：DBEAFCG
function inorder_i(root) {
  if (!root) return;
  const stack = [];
  let cur = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    let node = stack.pop();
    process.stdout.write(node.data);
    cur = node.right;
  }
}

/* -------------------------- 后序遍历 -------------------------- */
// 后序遍历-递归：DEBFGCA
function postorder_r(root) {
  if (!root) return;
  postorder_r(root.left);
  postorder_r(root.right);
  process.stdout.write(root.data); // 打印出来看的
}

// 后序遍历-迭代：DEBFGCA
function postorder_i1(root) {
  if (!root) return;
  const stack = [];
  let cur = root;
  let top = null;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    let node = stack.pop();
    process.stdout.write(node.data);
    top = stack[stack.length - 1];

    // 跳出条件
    if (stack.length == 0) {
      break;
    }

    // 添加节点属性，表示节点的右孩子是否已经被访问
    if (!top.hasOwnProperty("accessr")) {
      top["accessr"] = false;
    }

    if (top.accessr) {
      // 已经被访问
      delete top.accessr;
      continue;
    } else {
      // 还未被访问
      cur = top.right;
      top.accessr = true;
    }
  }
}

function postorder_i2(root) {
  if (!root) return;
  const stack = [root];
  const outputStack = [];
  while (stack.length) {
    let node = stack.pop();
    outputStack.push(node);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  while (outputStack.length) {
    process.stdout.write(outputStack.pop().data);
  }
}

// 实操
let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let root = buildTree(arr);
// console.log({ root });
// dfs(root);
// bfs(root);
// preorder_r1(root); // ABDECFG
// preorder_r2(root); // ABDECFG
// preorder_i(root); // ABDECFG
// inorder_r(root); // DBEAFCG
// inorder_i(root); // DBEAFCG
// postorder_r(root); // DEBFGCA
// postorder_i1(root); // DEBFGCA
console.log();
// postorder_i2(root); // DEBFGCA
