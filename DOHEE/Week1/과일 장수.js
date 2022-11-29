// 7분
function solution(k, m, score) {
    score.sort((a, b) => b - a);
    var answer = 0;
    score.forEach((v, i) => {
        if ((i + 1) % m === 0) {
            answer += v * m;
        }
    });
    return answer;
}
