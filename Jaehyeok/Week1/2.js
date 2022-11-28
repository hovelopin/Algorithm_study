// 20분
function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < score.length; i += m) {
    const arr = score.slice(i, i + m);

    if (arr.length < m) break;

    const minScore = Math.min(...score.slice(i, i + m));

    answer += arr.length * minScore;
  }
  return answer;
}
