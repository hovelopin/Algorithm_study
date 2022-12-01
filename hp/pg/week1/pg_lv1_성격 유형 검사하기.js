// 시작 (18시 50분) => 끝 (19시 20분)
const personalityType = {
  R: 0,
  T: 0,
  C: 0,
  F: 0,
  J: 0,
  M: 0,
  A: 0,
  N: 0,
};

const scores = {
  1: 3,
  2: 2,
  3: 1,
  4: 0,
  5: 1,
  6: 2,
  7: 3,
};

function compareFunc(type1, type2) {
  if (personalityType[type1] > personalityType[type2]) {
    return type1;
  }
  if (personalityType[type1] < personalityType[type2]) {
    return type2;
  }
  // 문자를 비교할때 타입1이 더 크면 뒤에 있는거고 작으면 앞에 있는거다.
  return type1 > type2 ? type2 : type1;
}

// chices => 1,2,3 / 앞에꺼 , 5,6,7 / 뒤에꺼 , 4 => 중간
function solution(surveys, choices) {
  let result = "";

  surveys.forEach((el, idx) => {
    // 4보다 큰것을 선택하면 뒤에꺼가 점수를 얻는다.
    if (choices[idx] > 4) {
      personalityType[el[1]] += scores[String(choices[idx])];
      return;
    }
    personalityType[el[0]] += scores[String(choices[idx])];
  });

  // 값을 만들었으니까 객체를 순회하면 첫번째랑 두번째를 비교해서 하나의 결과물을 만든다.
  result += compareFunc("R", "T");
  result += compareFunc("C", "F");
  result += compareFunc("J", "M");
  result += compareFunc("A", "N");

  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
