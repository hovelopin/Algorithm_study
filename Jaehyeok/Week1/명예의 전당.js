// 35분
function solution(k, score) {
  let answer = [];
  const arr = [];

  for (let i = 0; i < score.length; i++) {
    // K보다 작으면 명예의 전당 배열에 계속 추가
    if (i < k) {
      arr.push(score[i]);
    }

    // 현재 일차의 점수가 명예의 전당 배열의 최솟값보다 크면
    // 교체 후 내림차순 정렬
    if (Math.min(...arr) < score[i]) {
      arr.pop();
      arr.push(score[i]);
      arr.sort((a, b) => b - a);
    }

    // 발표 점수 추가
    answer.push(arr.at(-1));
  }

  return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200]); // [10, 10, 10, 20, 20, 100, 100]
solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
