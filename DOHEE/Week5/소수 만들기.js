// 28분
function solution(nums) {
    const sums = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sums.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }

    const maximum = Math.max(...sums);
    const primes = getPrimes(maximum);

    let answer = 0;
    sums.forEach((sum) => {
        if (primes.indexOf(sum) !== -1) answer++;
    });

    return answer;
}

const getPrimes = (maximum) => {
    const primes = [2, 3];

    for (let i = 5; i <= maximum; i += 2) {
        let isPrime = true;
        for (let j = 0; j < primes.length; j++) {
            if (primes[j] > i ** 0.5) break;
            if (i % primes[j] === 0) isPrime = false;
        }
        if (isPrime) primes.push(i);
    }
    return primes;
};
