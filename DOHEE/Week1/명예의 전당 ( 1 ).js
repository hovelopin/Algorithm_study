// 20분
function solution(k, score) {
    var answer = [];
    const sortedScore = [];
    for (let i = 0; i < score.length; i++) {
        sortedScore.push(score[i]);
        sortedScore.sort((a, b) => b - a);
        if (i < k - 1) {
            answer.push(sortedScore[i]);
        } else {
            answer.push(sortedScore[k - 1]);
        }
    }
    return answer;
}
