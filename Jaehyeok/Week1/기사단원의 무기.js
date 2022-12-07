// 20분
function solution(number, limit, power) {
  return Array.from({ length: number }, (_, i) => i + 1)
    .map((num) => {
      let count = 0;
      for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          count++;
          if (num / i != i) count++;
        }
      }
      return count;
    })
    .reduce((a, c) => (c > limit ? a + power : a + c), 0);
}

solution(5, 3, 2); // 10
solution(10, 3, 2); // 21
