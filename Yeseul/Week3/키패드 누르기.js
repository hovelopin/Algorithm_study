function getDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function solution(numbers, hand) {
  const pad = {
    0: [1, 0],
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    "*": [0, 0],
    "#": [2, 0],
  };

  const init = ["*", "#"];
  const answer = numbers.map((number) => {
    if (number % 3 === 1) {
      init[0] = number;
      return "L";
    } else if (number % 3 === 0 && number !== 0) {
      init[1] = number;
      return "R";
    } else {
      const [curX, curY] = pad[number];
      const [lx, ly] = pad[init[0]];
      const [rx, ry] = pad[init[1]];

      const left = getDistance(curX, curY, lx, ly);
      const right = getDistance(curX, curY, rx, ry);

      if (left > right) {
        init[1] = number;
        return "R";
      } else if (left < right) {
        init[0] = number;
        return "L";
      }
      if (hand === "right") {
        init[1] = number;
        return "R";
      } else {
        init[0] = number;
        return "L";
      }
    }
  });
  return answer.join("");
}
