// 6분
function solution(t, p) {
    const length = p.length;
    let answer = 0;

    for (let i = 0; i <= t.length - length; i++) {
        const target = t.slice(i, length + i);
        if (Number(target) <= Number(p)) answer++;
    }
    return answer;
}
