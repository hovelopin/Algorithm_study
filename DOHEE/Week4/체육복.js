// 40분
function solution(n, lost, reserve) {
    const uniforms = new Array(n).fill(1);
    lost.forEach((lo) => uniforms[lo - 1]--);
    reserve.forEach((re) => uniforms[re - 1]++);

    for (let i = 0; i < n; i++) {
        if (!uniforms[i]) {
            if (uniforms[i - 1] > 1) {
                uniforms[i]++;
                uniforms[i - 1]--;
            } else if (uniforms[i + 1] > 1) {
                uniforms[i]++;
                uniforms[i + 1]--;
            }
        }
    }
    var answer = uniforms.filter((uniform) => uniform).length;
    return answer;
}
