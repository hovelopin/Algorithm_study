// 30분
function solution(dartResult) {
    const scores = [1, 1, 1];
    let opp = 0;
    for (let i = 0; i < dartResult.length; i++) {
        const target = dartResult[i];
        if (Number(target) >= 0) {
            if (target === "1" && dartResult[i + 1] === "0") {
                scores[opp] = 10;
            } else if (target === "0" && dartResult[i - 1] === "1") {
                continue;
            } else {
                scores[opp] = Number(target);
            }
            opp++;
        } else if (target === "S") {
            scores[opp - 1] = scores[opp - 1] ** 1;
        } else if (target === "D") {
            scores[opp - 1] = scores[opp - 1] ** 2;
        } else if (target === "T") {
            scores[opp - 1] = scores[opp - 1] ** 3;
        } else if (target === "*") {
            if (scores[opp - 2]) scores[opp - 2] *= 2;
            scores[opp - 1] *= 2;
        } else {
            scores[opp - 1] *= -1;
        }
    }
    return scores.reduce((a, b) => a + b, 0);
}
