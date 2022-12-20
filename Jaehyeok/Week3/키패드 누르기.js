function solution(numbers, hand) {
  var answer = "";
  const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const process = (num) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (table[i][j] === num) return [i, j];
      }
    }
  };

  let left = "*";
  let right = "#";

  for (const number of numbers) {
    if (number === 1 || number === 4 || number === 7) {
      answer += "L";
      left = number;
    } else if (number === 3 || number === 6 || number === 9) {
      answer += "R";
      right = number;
    } else {
      const [cx, cy] = process(number);
      const [lx, ly] = process(left);
      const [rx, ry] = process(right);

      const lCount = Math.abs(cx - lx) + Math.abs(cy - ly);
      const rCount = Math.abs(cx - rx) + Math.abs(cy - ry);

      if (lCount > rCount) {
        answer += "R";
        right = number;
      } else if (lCount < rCount) {
        answer += "L";
        left = number;
      } else {
        if (hand === "right") {
          answer += "R";
          right = number;
        } else {
          answer += "L";
          left = number;
        }
      }
    }
  }

  return answer;
}
