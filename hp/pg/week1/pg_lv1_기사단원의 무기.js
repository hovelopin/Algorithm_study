function divisor(num) {
  const divisorNums = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    // num이 i로 나눠지면 약수라서 divisorNums에 push 한다.
    if (num % i === 0) {
      divisorNums.push(i);
      // ex ) 100 / 10 = 10인 경우는 제외해야 되니까
      if (num / i !== i) divisorNums.push(num / i);
    }
  }
  return divisorNums.length;
}

function solution(number, limit, power) {
  const result = Array.from({ length: number }, (v, i) => divisor(i + 1));

  const res = result.reduce((acc, cur, idx) => {
    cur > limit && (cur = power);
    return acc + cur;
  }, 0);

  return res;
}

console.log(solution(10, 3, 2));
