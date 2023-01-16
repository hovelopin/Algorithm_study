// 시작 (22시 45분) => 끝 (23시 15분)
function solution(empty, coke, total) {
  let quotient = 0;
  let result = 0;
  // 총 갯수보다 빈병이 더 많으면 멈춘다.
  while (total >= empty) {
    // 몫 + 나머지 => 다음 quotient
    quotient = parseInt(total / empty);

    // result = 몫*빈병 줬을때 주는 콜라 병
    result += quotient * coke;

    // 총합 = 몫*빈병 줬을때 주는 콜라 병 + 나머지
    total = quotient * coke + (total % empty);
  }

  return result;
}

console.log(solution(3, 1, 20));
