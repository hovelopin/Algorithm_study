function solution(s) {
  const xArr = [...s].splice(0, 1);
  const diffArr = [];
  let result = 0;

  [...s].splice(1).forEach((el) => {
    // 마지막 원소랑 이번에 비교할거랑 같지 않으면 diffArr에 넣는다.
    if (xArr.at(-1) !== el) {
      diffArr.push(el);
    } else {
      xArr.push(el);
    }

    // 배열의 길이가 같으면 다음꺼 비교한다.
    if (xArr.length === diffArr.length) result += 1;
  });

  return result;
}

console.log(solution("banana"));
