function solution(babbling) {
    var answer = 0;
    const type = ["1", "2", "3", "4"];
    for (const bab of babbling) {
        const newBab = bab
            .replaceAll("aya", 1)
            .replaceAll("ye", 2)
            .replaceAll("woo", 3)
            .replaceAll("ma", 4);
        const letters = newBab.split("");
        let isAble = true;
        for (let i = 0; i < letters.length; i++) {
            if (
                type.indexOf(letters[i]) === -1 ||
                letters[i] === letters[i + 1]
            )
                isAble = false;
        }

        answer += isAble ? 1 : 0;
    }
    console.log(answer);

    return answer;
}
