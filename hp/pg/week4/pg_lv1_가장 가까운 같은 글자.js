// 시작 (24시 35분) => 끝 (24시 49분)
function solution(s) {
  const answers = [];
  const reverseArr = [...s].reverse();

  reverseArr.map((el, idx) => {
    const sArr = reverseArr.slice(idx + 1);
    console.log(sArr);
    answers.push(sArr.indexOf(el) >= 0 ? sArr.indexOf(el) + 1 : -1);
  });

  return answers.reverse();
}

console.log(solution("foobar"));
