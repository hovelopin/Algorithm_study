// 시작 (18시 30분) => 끝 ()
function solution(n, losts, reserves) {
  let result = 0;
  const clothes = Array.from({ length: n }, () => 1);
  const CLOTHES_LENGTH = n;

  // 놓고온 놈 체크
  losts.map((lost) => (clothes[lost - 1] -= 1));

  // 더 가져온 놈 체크
  reserves.map((reserve) => (clothes[reserve - 1] += 1));

  losts.map((lost) => {
    // 첫번째 항이면 0번째 인덱스를 가르키게 만들고
    if (lost === 1) {
      lost = 2;
    } else if (lost + 2 > CLOTHES_LENGTH) {
      lost = n;
    }

    if (clothes[lost - 2] === 2) {
      clothes[lost - 2] -= 1;
      clothes[lost - 1] += 1;
      return;
    }
    if (clothes[lost] === 2) {
      clothes[lost] -= 1;
      clothes[lost - 1] += 1;
      return;
    }
  });

  clothes.map((c) => c >= 1 && result++);

  return result;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
