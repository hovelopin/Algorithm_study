// 시작 (18시 15분) => 끝 (18시 25분)
function solution(food) {
  let half = "";
  let result = "";

  // 첫번째 물을 제외하고 새로운 배열을 만든다.
  food.slice(1).forEach((el, idx) => {
    // 원소가 2보다 작으면 pass 한다.
    if (el === 1 || el < 2) {
      return;
    }
    // 2보다 크면 idx를 몫만큼 반복해서 half를 만든다.
    half += (idx + 1).toString().repeat(parseInt(el / 2));
  });

  // reuslt는 half + 가운데 0 + half를 역순으로 나열한 것
  result = half + "0" + [...half].reverse().join("");

  return result;
}

console.log(solution([1, 3, 4, 6]));
