// 시작 (17시 25분) => 끝 (17시 30분)
function solution(d, budget) {
  let result = 0;
  const departments = d.sort((prev, next) => prev - next);

  departments.forEach((department) => {
    if (budget - department >= 0) {
      budget -= department;
      result++;
    }
  });

  return result;
}

console.log(solution([2, 2, 3, 3], 10));
