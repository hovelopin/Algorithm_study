// 시작 (22시50분) => 끝 (23시 15분)
function solution(X, Y) {
  const count = {};
  const results = [];

  //X를 순회하면서 undefined면 1을 추가해주고 아니면 있는거니까 값을 증가시킨다.
  [...X].forEach((el) =>
    count[el] === undefined ? (count[el] = 1) : count[el]++
  );

  //Y를 순회하면서 0보다 크면 존재하는거니까 줄이고 results에 넣는다.
  [...Y].forEach((el) => {
    if (count[el] > 0) {
      count[el]--;
      results.push(el);
    }
  });

  // 위 결과로 공통적인 부분이 확인됐으니까 전부돌면서 "00"인 부분이 있으면 모든 원소가 0인거라 최대0이다. => 따라서 0 출력
  const zeroCheck = results.map((el) => +el).reduce((acc, cur) => acc + cur, 0);

  if (results.length > 0 && zeroCheck === 0) {
    return "0";
  }

  //results를 돌면서 가장 큰 정수를 만든다.
  const result = results
    .map((result) => +result)
    .sort((a, b) => b - a)
    .join("")
    .toString();

  return results.length > 0 ? result : "-1";
}

console.log(solution("100", "123450"));
