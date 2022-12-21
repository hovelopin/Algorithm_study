// 47.4점, 조합, 25분
function getPermutation(elements) {
  // 기저사례: 원소가 하나만 있으면 자기 자신을 반환한다.
  if (elements.length === 1) return [elements];
  const permutations = [];

  // 첫 번째 원소를 제외한 순열을 구한다.
  const smallerPermutations = getPermutation(elements.slice(1));

  // 첫 번째 원소를 넣을 수 있는 모든 곳에 넣어준다.
  const fisrtElement = elements[0];
  smallerPermutations.forEach((permutation) => {
    for (
      let positionIndex = 0;
      positionIndex <= permutation.length;
      positionIndex++
    ) {
      const prefix = permutation.slice(0, positionIndex);
      const suffix = permutation.slice(positionIndex);
      permutations.push(prefix.concat([fisrtElement], suffix));
    }
  });

  return permutations;
}

function solution(X, Y) {
  let answer;

  const x_table = X.split("").reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 1;
    else acc[cur] += 1;

    return acc;
  }, {});

  const y_table = Y.split("").reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 1;
    else acc[cur] += 1;

    return acc;
  }, {});

  const x_length = Object.values(x_table).reduce((acc, cur) => acc + cur, 0);
  const y_length = Object.values(y_table).reduce((acc, cur) => acc + cur, 0);

  if (x_length >= y_length) {
    answer = Object.entries(y_table).map(([k, v]) => {
      if (x_table[k] === y_table[k]) return k.repeat(v);
      if (x_table[k] > y_table[k]) return k.repeat(y_table[k]);
      if (x_table[k] < y_table[k]) return k.repeat(x_table[k]);
      return "";
    });
  } else {
    answer = Object.entries(x_table).map(([k, v]) => {
      if (x_table[k] === y_table[k]) return k.repeat(v);
      if (x_table[k] > y_table[k]) return k.repeat(y_table[k]);
      if (x_table[k] < y_table[k]) return k.repeat(x_table[k]);
      return "";
    });
  }

  const str = answer.join("").split("");

  if (str.length === 0) return "-1";

  const resultArr = getPermutation(str).map((v) => Number(v.join("")));
  return String(Math.max(...resultArr));
}

// 100, 구현, 25 + 15분
function solution(X, Y) {
  let answer = [];

  const x_table = X.split("").reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 1;
    else acc[cur] += 1;

    return acc;
  }, {});

  for (const k of Y) {
    if (x_table[k]) {
      answer.push(k);
      x_table[k] -= 1;
    }
  }
  answer.sort((a, b) => b - a);

  if (answer.length === 0) return "-1";
  if (answer[0] === "0") return "0";
  return answer.join("");
}
