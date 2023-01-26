// 8분
function solution(nums) {
    const newNums = new Set(nums);
    return Math.min(nums.length / 2, [...newNums].length);
}
