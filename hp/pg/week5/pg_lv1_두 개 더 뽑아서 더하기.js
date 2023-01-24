// 시작 (17시 30분) => 끝 (17시 40분)
function solution(numbers) {
  const results = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      results.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(results)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
