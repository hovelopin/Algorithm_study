// 8분 30초
function solution(s) {
    var answer = [];
    const letters = [];
    const originLetters = s.split("");
    for (const letter of originLetters) {
        let distance = letters.lastIndexOf(letter);
        if (distance !== -1) {
            distance = letters.length - distance;
        }
        answer.push(distance);
        letters.push(letter);
    }
    return answer;
}
