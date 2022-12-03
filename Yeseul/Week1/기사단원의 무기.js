function getDivisors(num) {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push(i);
      if (num / i != i) arr.push(num / i);
    }
  }

  return arr.length;
}
function solution(number, limit, power) {
  let answer = 0;
  for (i = 1; i <= number; i++) {
    let temp = getDivisors(i);
    answer += temp > limit ? power : temp;
  }

  return answer;
}
