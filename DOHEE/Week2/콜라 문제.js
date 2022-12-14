function solution(a, b, n) {
    var answer = 0;
    let get = 0;
    let rest = n;

    while (rest >= a) {
        get = Math.floor(rest / a) * b;
        answer += get;
        rest = (rest % a) + get;
    }
    return answer;
}
