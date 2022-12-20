function solution(numbers) {
    const intSum = 45;
    const numberSum = numbers.reduce((initial, value) => initial + value, 0);
    return intSum - numberSum;
}
