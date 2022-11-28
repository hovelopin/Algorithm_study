// 시작 (17시 55분) => 끝 (18시 8분)

function solution(k, score) {
  const temp = [];
  const result = [];

  score.forEach((el, idx) => {
    // 모든 원소를 temp에 넣고 정렬한다.
    temp.push(el);
    temp.sort((a, b) => a - b);

    temp.length <= k
      ? result.push(temp[0])
      : result.push(temp.slice(idx + 1 - k)[0]);
  });

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
