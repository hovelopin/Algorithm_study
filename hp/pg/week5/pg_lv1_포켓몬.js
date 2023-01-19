// 시작 (22시 50분) => 끝 (23시)
function solution(nums) {
  const pick = parseInt(nums.length / 2, 10);
  const removeSetArrayLength = new Set(nums).size;

  return pick < removeSetArrayLength ? pick : removeSetArrayLength;
}

console.log(solution([3, 1, 2, 3]));
