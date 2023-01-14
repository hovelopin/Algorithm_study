// 본인 코드 시간 초과로 다른 사람 코드 참고하여 풀었음
function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => Number(a) === i).length;
    const curY = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  answer = answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
  return answer;
}
