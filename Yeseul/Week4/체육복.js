function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let newLost = lost.filter((x) => !reserve.includes(x));
  let newReserve = reserve.filter((x) => !lost.includes(x));

  answer += lost.length - newLost.length;

  newLost.sort((a, b) => a - b);

  newLost.forEach((x) => {
    if (newReserve.length === 0) {
      return;
    }

    if (newReserve.includes(x - 1)) {
      newReserve = newReserve.filter((y) => y !== x - 1);
      answer++;
    } else if (newReserve.includes(x + 1)) {
      newReserve = newReserve.filter((y) => y !== x + 1);
      answer++;
    }
  });

  return answer;
}
