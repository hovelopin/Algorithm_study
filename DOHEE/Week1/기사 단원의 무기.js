// 40분
function solution(number, limit, power) {
    var answer = 0;
    for (let i = 1; i < number + 1; i++) {
        let originPower = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) originPower += 1;
        }
        answer += originPower + 1 > limit ? power : originPower + 1;
    }
    return answer;
}
