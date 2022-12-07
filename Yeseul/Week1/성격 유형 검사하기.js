// function solution(survey, choices) {
//     const MBTI = {};
//     const types = ["RT","CF","JM","AN"];

//     types.forEach((type) =>
//         type.split('').forEach((char) => MBTI[char] = 0)
//     )

//     choices.forEach((choice, index) => {
//         const [disagree, agree] = survey[index];

//         MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//     });

//     return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
// }

function solution(survey, choices) {
  let answer = "";
  let obj = {};
  let mbti = ["R", "T", "C", "F", "J", "M", "A", "N"];
  mbti.forEach((item) => (obj[item] = 0));

  for (let i = 0; i < survey.length; i++) {
    choices[i] >= 4
      ? (obj[survey[i][1]] += choices[i] - 4)
      : (obj[survey[i][0]] += 4 - choices[i]);
  }

  answer += obj["R"] >= obj["T"] ? "R" : "T";
  answer += obj["C"] >= obj["F"] ? "C" : "F";
  answer += obj["J"] >= obj["M"] ? "J" : "M";
  answer += obj["A"] >= obj["N"] ? "A" : "N";

  return answer;
}
