function solution(numbers) {
  let answer = 0;
  const numArrSort = numbers.sort((a, b) => a - b);
  for (let i = 0; i < 10; i++) {
    if (numArrSort.indexOf(i) === -1) answer += i;
  }
  return answer;
}
