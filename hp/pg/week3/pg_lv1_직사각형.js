// 시작 (23시 30분) => 끝 (23시 45분)
function solution(sizes) {
  const rows = [];
  const cols = [];

  // sizes 배열을 돌면서 한쪽에 큰값들을 몰아 넣고 다른 한쪽에는 작은값을 넣는다.
  sizes.forEach(([row, col]) => {
    if (row >= col) {
      rows.push(row);
      cols.push(col);
    } else {
      rows.push(col);
      cols.push(row);
    }
  });

  // 큰값끼리 곱해서 넓이를 구한다.
  return Math.max(...rows) * Math.max(...cols);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
