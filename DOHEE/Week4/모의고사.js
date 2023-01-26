// 30분
function solution(answers) {
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let supo1Right = 0;
    let supo2Right = 0;
    let supo3Right = 0;

    for (let i = 0; i < answers.length; i++) {
        if (supo1[i % 5] === answers[i]) supo1Right++;
        if (supo2[i % 8] === answers[i]) supo2Right++;
        if (supo3[i % 10] === answers[i]) supo3Right++;
    }

    const max = Math.max(supo1Right, supo2Right, supo3Right);

    const answer = [];
    if (supo1Right === max) answer.push(1);
    if (supo2Right === max) answer.push(2);
    if (supo3Right === max) answer.push(3);

    return answer;
}
