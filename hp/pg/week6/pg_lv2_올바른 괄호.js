// 시작 (22시 15분) => 끝 (22시 30분)
function solution(s) {
  const parenthesisArr = [...s];
  const stack = [];

  for (const patenthesis of parenthesisArr) {
    if (patenthesis === "(") {
      stack.push(patenthesis);
    }
    if (patenthesis === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution(")()("));
