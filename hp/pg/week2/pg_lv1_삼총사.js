// 시작 (23시 40분) => 끝 (23시 48분)

function solution(number) {
  let result = 0;
  for (let i = 0; i <= number.length - 3; i++) {
    for (let j = i + 1; j <= number.length - 2; j++) {
      for (let k = j + 1; k <= number.length - 1; k++) {
        if (number[i] + number[j] + number[k] === 0) result += 1;
      }
    }
  }

  return result;
}

console.log(solution([-2, 3, 0, 2, -5]));
