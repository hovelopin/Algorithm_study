// 시작 (12시 10분) => 끝 (12시 15분)
function solution(nums) {
  const numsArr = nums.split(" ").map((num) => +num);
  const MAX_NUM = Math.max(...numsArr);
  const MIN_NUM = Math.min(...numsArr);
  return `${MIN_NUM} ${MAX_NUM}`;
}

console.log(solution("-1 -1"));
