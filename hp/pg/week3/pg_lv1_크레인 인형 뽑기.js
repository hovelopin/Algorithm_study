// 시작 (23시 45분) => 끝 (24시 10분)
function solution(boards, moves) {
  const baskets = [];
  const deep = boards.length; // 깊이 => 어디까지 들어갈 수 있는지
  let result = 0;

  // index로 접근하기 위해서 0을 삽입한다.
  boards.map((board) => board.unshift(0));

  moves.map((move, idx) => {
    for (let i = 0; i < deep; i++) {
      if (boards[i][move] !== 0) {
        const basketItem = boards[i][move];
        baskets.push(basketItem);
        boards[i][move] = 0;
        break;
      }
    }

    // 원소가 2개 이상이니까
    if (baskets.length >= 2) {
      if (baskets[baskets.length - 1] === baskets[baskets.length - 2]) {
        baskets.pop();
        baskets.pop();
        result += 2;
      }
    }
  });

  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
