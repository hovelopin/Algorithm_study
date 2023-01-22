// 시작 (23시 55분) => 끝 (24시 10분)
function solution(t, p) {
  const NUM_LENGTH = p.length;
  const substringArr = [];

  for (let i = 0; i < t.length - NUM_LENGTH + 1; i++) {
    substringArr.push(Number(t.substring(i, NUM_LENGTH + i)));
  }

  return substringArr.filter((substring) => substring <= Number(p)).length;
}

console.log(solution("3141592", "271"));
