// 시작 (18시 30분) => 끝 (18시 53분)

function equals(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

// 1: 빵 2: 야채 3: 고기 1: 빵
function solution(ingredient) {
  const stack = [];
  const compareArr = [1, 2, 3, 1];
  let cnt = 0;

  ingredient.forEach((el, idx) => {
    stack.push(el);
    const flag = equals(compareArr, stack.slice(-4));

    if (flag) {
      cnt++;
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      return;
    }
  });

  return cnt;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
