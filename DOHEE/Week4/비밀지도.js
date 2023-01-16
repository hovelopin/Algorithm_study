// 15분
function solution(n, arr1, arr2) {
    const answer = new Array(n).fill("");
    for (let i = 0; i < n; i++) {
        const binary1 = arr1[i].toString(2).padStart(n, "0");
        const binary2 = arr2[i].toString(2).padStart(n, "0");
        for (let j = 0; j < n; j++) {
            answer[i] += binary1[j] === "0" && binary2[j] === "0" ? " " : "#";
        }
    }
    return answer;
}
