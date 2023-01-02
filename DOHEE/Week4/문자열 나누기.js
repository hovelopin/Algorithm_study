// 20분
function solution(s) {
    var answer = 0;
    let letter = s[0];
    let x = 1;
    let y = 0;
    for (let i = 1; i < s.length; i++) {
        s[i] === letter ? (x += 1) : (y += 1);
        if (x === y) {
            answer += 1;
            letter = s[i + 1];
            x = 0;
            y = 0;
        }
    }
    if (x !== y) answer += 1;
    return answer;
}
