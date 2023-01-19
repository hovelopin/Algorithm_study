// 시작 () => 끝 ()
function solution(s) {
  const jadenCase = s.split(" ");
  const newJadenCase = jadenCase.map((jaden) => {
    const jadenWord = jaden.split("").map((jaden, idx) => {
      if (idx === 0) return jaden.toUpperCase();
      return jaden.toLowerCase();
    });
    return jadenWord.join("");
  });

  return newJadenCase.join(" ");
}

console.log(solution("3people unFollowed me"));
