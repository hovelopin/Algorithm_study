// 100, 구현, 5분
function solution(price, money, count) {
  let total = price;
  const arr = Array.from({ length: count - 1 }, (_, i) => i + 2);

  arr.forEach((v) => (total += v * price));

  if (money >= total) return 0;

  return total - money;
}
