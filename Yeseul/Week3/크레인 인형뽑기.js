function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (item of moves) {
    for (row of board) {
      if (row[item - 1] != 0) {
        if (stack[stack.length - 1] == row[item - 1]) {
          row[item - 1] = 0;
          stack.pop();
          answer += 2;
          break;
        } else {
          stack.push(row[item - 1]);
          row[item - 1] = 0;
          break;
        }
      }
    }
  }

  return answer;
}
