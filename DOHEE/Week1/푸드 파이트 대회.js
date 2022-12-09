// 14분
function solution(food) {
    var answer = "";
    let half = "";
    for (let i = 1; i < food.length; i++) {
        const repeatNumber = parseInt(food[i] / 2);
        half += String(i).repeat(repeatNumber);
    }
    answer += half + "0";
    for (let j = 1; j < half.length + 1; j++) {
        answer += half[half.length - j];
    }
    return answer;
}
