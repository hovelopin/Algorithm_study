// 18분
function solution(survey, choices) {
    var answer = "";
    const result = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    survey.forEach((v, i) => {
        [a, b] = v.split("");
        if (choices[i] < 4) {
            result[a] += 4 - choices[i];
        } else if (choices[i] > 4) {
            result[b] += choices[i] - 4;
        }
    });
    answer += result["R"] < result["T"] ? "T" : "R";
    answer += result["C"] < result["F"] ? "F" : "C";
    answer += result["J"] < result["M"] ? "M" : "J";
    answer += result["A"] < result["N"] ? "N" : "A";
    return answer;
}
