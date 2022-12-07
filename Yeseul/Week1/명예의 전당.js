function solution(k, score) {
  let awards = [];
  let answer = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      awards.push(score[i]);
    }
    if (score[i] > Math.min(...awards)) {
      awards.pop();
      awards.push(score[i]);
      awards.sort((a, b) => b - a);
    }

    answer.push(awards[awards.length - 1]);
  }

  // 최하위 점수 arr을 return
  return answer;
}
