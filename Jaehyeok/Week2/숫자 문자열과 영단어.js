// 100점, 구현, 10분
function solution(s) {
  s = s.replace(/zero/gi, "0");
  s = s.replace(/one/gi, "1");
  s = s.replace(/two/gi, "2");
  s = s.replace(/three/gi, "3");
  s = s.replace(/four/gi, "4");
  s = s.replace(/five/gi, "5");
  s = s.replace(/six/gi, "6");
  s = s.replace(/seven/gi, "7");
  s = s.replace(/eight/gi, "8");
  s = s.replace(/nine/gi, "9");

  return +s;
}

// 이거 왜 안됌
function solution(s) {
  const table = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  Object.entries(table).forEach(([k, v], _) => (s = s.replace(`/${k}/gi/`, v)));

  return +s;
}

solution("one4seveneight"); //	1478
solution("23four5six7"); //	234567
solution("2three45sixseven"); //	234567
solution("123"); //	123
