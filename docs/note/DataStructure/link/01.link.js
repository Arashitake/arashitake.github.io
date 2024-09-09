// 00. js 使用对象模拟链表
const a = { value: "a", next: null };
const b = { value: "b", next: null };
const c = { value: "c", next: null };
// 实现链表
a.next = b;
b.next = c;

// 链表的一些基本操作
// 01. 遍历
let p = a; // p指针指向链表的头部
while (p) {
  console.log(p.value);
  p = p.next;
}

// 02. 查找

// 03. 插入 在b,c之间插入d
const d = { value: "d", next: null };
d.next = c;
b.next = d;

// 04. 删除 leetcode: [83. 删除排序链表中的重复元素]
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
let deleteDuplicates = function (head) {
  let p = head;
  // 遍历链表, 判断当前与下一个是否相等
  // 如果相等, 就删除元素; 如果不相等, 指针就指向下一个
  while (p && p.next) {
    if (p.val == p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
