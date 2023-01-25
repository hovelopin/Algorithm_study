function solution(s) {
  let answer = "";
  let arr = s.split(" ");

  let arrToUpperCase = arr.map(
    (x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
  );

  answer = arrToUpperCase.join(" ");
  return answer;
}
