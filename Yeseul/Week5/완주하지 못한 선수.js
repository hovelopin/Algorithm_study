function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return (answer = participant[i]);
    }
  }
}
