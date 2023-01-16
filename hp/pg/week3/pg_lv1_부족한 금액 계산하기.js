// 시작 (23시 30분) => 끝 (23시 33분)
function solution(price, money, count) {
  let priceSum = 0;

  for (let i = 1; i <= count; i++) {
    priceSum += price * i;
  }

  return priceSum - money > 0 ? priceSum - money : 0;
}

console.log(solution(3, 20, 4));
