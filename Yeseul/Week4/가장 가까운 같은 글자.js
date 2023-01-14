function solution(s) {
  var answer = [];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        answer.push(i - j);
        break;
      }
    }
    if (answer.length < i + 1) {
      answer.push(-1);
    }
  }
  return answer;
}
