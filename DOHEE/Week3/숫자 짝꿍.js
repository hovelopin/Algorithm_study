function solution(X, Y) {
    const Xnum = Array(10).fill(0);
    const Ynum = Array(10).fill(0);

    X.split("").forEach((x) => Xnum[Number(x)]++);
    Y.split("").forEach((y) => Ynum[Number(y)]++);

    let coupleList = [];
    Xnum.forEach((x, idx) => {
        limit = Ynum[idx] > x ? x : Ynum[idx];
        for (let i = 0; i < limit; i++) {
            coupleList.push(idx);
        }
    });

    if (coupleList.length === 0) return "-1";
    const answer = coupleList.reverse().join("");
    if (answer.startsWith("0")) return "0";
    return answer;
}
