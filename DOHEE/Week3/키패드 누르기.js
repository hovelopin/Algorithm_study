function solution(numbers, hand) {
    var answer = "";
    left = 10;
    right = 12;
    numbers.forEach((number) => {
        if (number % 3 === 1) {
            answer += "L";
            left = number;
        } else if (number !== 0 && number % 3 === 0) {
            answer += "R";
            right = number;
        } else {
            if (number === 0) number = 11;
            const ld = getDistance(number, left);
            const rd = getDistance(number, right);
            if (ld > rd) {
                answer += "R";
                right = number;
            } else if (ld < rd) {
                answer += "L";
                left = number;
            } else {
                answer += hand[0].toUpperCase();
                hand[0].toUpperCase() === "R"
                    ? (right = number)
                    : (left = number);
            }
        }
    });
    return answer;
}

function getDistance(num1, num2) {
    diff = num1 > num2 ? num1 - num2 : num2 - num1;
    return Math.floor(diff / 3) + (diff % 3);
}
