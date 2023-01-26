// 3분 30초
function solution(d, budget) {
    d.sort((a, b) => a - b);
    let answer = 0;

    for (const apply of d) {
        if (apply > budget) break;
        budget -= apply;
        answer++;
    }

    return answer;
}
