function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];
  const words2 = ["ayaaya", "yeye", "woowoo", "mama"];
  for (x of babbling) {
    for (let i = 0; i < words.length; i++) {
      if (x.includes(words2[i])) continue;
      if (x.includes(words[i])) x = x.replaceAll(words[i], 1);
    }
    x = x.replaceAll(1, "");
    if (x === "") answer++;
  }

  return answer;
}
