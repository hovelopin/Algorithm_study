function solution(s) {
    let newNumber = s;
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    numbers.forEach((value, index) => {
        newNumber = newNumber.replaceAll(value, index);
    });
    var answer = Number(newNumber);
    return answer;
}
