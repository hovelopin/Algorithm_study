// 100점, 재귀, 35분
function solution(a, b, n) {
  var answer = 0;

  const process = (num) => {
    if (num < a) return;

    const mok = Math.floor(num / a);
    const nameozi = num % a;

    answer += mok * b;

    return process(mok * b + nameozi);
  };

  process(n);

  return answer;
}

// 다른 사람 풀이
function solution(a, b, n) {
  // 받은 콜라 수
  let change = 0;
  // 교환 가능한 수량이 아닐때까지 반복
  while (n >= a) {
    change += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return change;
}
