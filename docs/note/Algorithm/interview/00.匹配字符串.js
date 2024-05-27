/**
 * 实现一个方法，根据括号的闭合关系，输出字符串中缺失的。
 * （注：括号遵循最近闭合，例如 {{} 则在第2位缺失 ‘}’）
 *
 * 输入描述：
 * 1. (()){[}{}[]
 * 2. {}}[]()
 * 3. {{}}}
 * 输出描述：
 * 1. ], 7
 * 2. {, 3
 * 3. {, 5
 */

const MATCH_BRACE_TABLE = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const BRACE_PAIRS = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function missing_brace(str) {
  const s = [];
  let idx = 1;
  for (const cur_brace of str) {
    if (cur_brace in BRACE_PAIRS) {
      // 左括号
      s.push(cur_brace);
    } else {
      // 右括号
      if (s.length) {
        const top = s[s.length - 1];
        if (top == MATCH_BRACE_TABLE[cur_brace]) {
          s.pop();
        } else {
          // 括号不匹配
          const missing = BRACE_PAIRS[top];
          return [missing, idx];
        }
      } else {
        // 栈空，不合法
        return [MATCH_BRACE_TABLE[cur_brace], idx];
      }
    }
    idx++;
  }
  return s.length > 0 ? [BRACE_PAIRS[s[s.length - 1]], idx] : ["", -1];
}
console.log(missing_brace("(()){[}{}[]"));
console.log(missing_brace("{}}[]()"));
console.log(missing_brace("{{}}}"));
