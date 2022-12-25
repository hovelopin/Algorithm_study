function solution(s) {
  var answer = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (!temp) temp = s[i];

    if (temp === s[i]) cnt1++;
    else cnt2++;

    if (cnt1 === cnt2) {
      answer++;
      temp = "";
    }
  }
  if (temp) answer++;
  return answer;
}
