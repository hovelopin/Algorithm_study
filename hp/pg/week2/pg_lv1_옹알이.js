// 시작 (19시 15분) => 끝 (19시 45분)

function emptyArrFunc(arr) {
  return arr.filter((el) => el !== "").length === 0 ? true : false;
}

function solution(babbling) {
  let cnt = 0;
  const speakWords = ["aya", "ye", "woo", "ma"];
  const repeatSpeakWords = ["ayaaya", "yeye", "woowoo", "mama"];

  babbling.forEach((el, idx) => {
    // 중복되는 부분을 제거해야한다.
    if (
      el.includes(repeatSpeakWords[0]) ||
      el.includes(repeatSpeakWords[1]) ||
      el.includes(repeatSpeakWords[2]) ||
      el.includes(repeatSpeakWords[3])
    ) {
      return;
    }

    if (speakWords.includes(el)) {
      cnt++;
      return;
    }
    const one = el.split(babbling[0]);
    const two = one.join("").split(babbling[1]);
    const three = two.join("").split(babbling[2]);
    const four = three.join("").split(babbling[3]);

    if (emptyArrFunc(four)) {
      console.log(emptyArrFunc(four), four);
      cnt++;
    }
  });

  return cnt;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
