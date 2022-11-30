// 시작 (18시 20분) => 끝 ()
// k는 최대 , m은 상자 안에 사과 수
function solution(k, m, score) {
  let resultSum = 0;

  // 먼저 정렬을 한다. ( 오름 차순 정렬 )
  score.sort((a, b) => a - b);

  // 최대값이 더 크면 짤라야함 k를 찾아서 k까지 짜르고 아니면 그대로 사용
  const slicedNum = score.at(-1) > k ? score.indexOf(k) : score.length;
  const slicedScore = score.slice(0, slicedNum);

  const circle = parseInt(slicedScore.length / m);

  // k이하인놈만 가지고 논다. 이중에서 뒤에서부터 m개씩 넣어서 만든다.
  for (let i = 1; i <= circle; i++) {
    // 뒤에서부터 m개를 자르고 result를 구해서 resultSum에 넣어줌
    const newSliced = slicedScore.splice(-m);
    const result = Math.min(...newSliced) * m;
    resultSum += result;
  }

  return resultSum;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
