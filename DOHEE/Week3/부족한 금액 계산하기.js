function solution(price, money, count) {
    let sum = 0;
    for (let i = 1; i < count + 1; i++) {
        sum += i;
    }
    const diff = sum * price - money;
    console.log(diff);
    return diff > 0 ? diff : 0;
}
