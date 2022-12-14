// 15분
function solution(a, b, n) {
  let answer = 0;
  while (n / a >= 1) {
    let result = Math.floor(n / a);
    let remain = Math.floor(n % a);
    answer += result * b;
    n = result * b + remain;
  }
  return answer;
}
