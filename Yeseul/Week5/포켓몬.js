function solution(nums) {
  let max = nums.length / 2;
  const temp = [...new Set(nums)];
  if (max > temp.length) {
    return temp.length;
  } else {
    return max;
  }
}
