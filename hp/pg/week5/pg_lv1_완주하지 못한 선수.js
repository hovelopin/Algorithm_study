// 시작 (22시 50분) => 끝 (23시 20분)
function solution(participant, completion) {
  const personList = {};
  let failToFinish;

  for (const person of participant) {
    personList[person] === undefined ? (personList[person] = 1) : (personList[person] += 1);
  }

  for (const person of completion) {
    personList[person] -= 1;
  }

  for (const [key, value] of Object.entries(personList)) {
    if (value === 1) return (failToFinish = key);
  }

  return failToFinish;
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
