// 100, 스택, 30분
function solution(board, moves) {
  var answer = [];
  let stack = [];

  for (const move of moves) {
    for (let i = 0; i < board.length; i++) {
      const now = board[i][move - 1];
      if (now > 0) {
        stack.push(now);
        board[i][move - 1] = 0;
        if (stack.at(-1) === stack.at(-2)) {
          answer.push(stack.slice(-1));
          stack = stack.slice(0, -2);
        }
        break;
      }
    }
  }

  return answer.length * 2;
}
