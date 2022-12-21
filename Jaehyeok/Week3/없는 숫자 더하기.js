// 100, 구현, 5분
function solution(numbers) {
  const answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
    (v) => !numbers.includes(v)
  );
  return answer.reduce((acc, cur) => acc + cur, 0);
}
