function solution(board, moves) {
    const dolls = [];
    moves.forEach((move) => {
        const columnIdx = move - 1;

        for (const row of board) {
            if (row[columnIdx] !== 0) {
                dolls.push(row[columnIdx]);
                row[columnIdx] = 0;
                break;
            }
        }
    });

    var answer = 0;
    const newDolls = [];
    dolls.forEach((doll) => {
        newDolls.push(doll);
        if (newDolls.length >= 2) {
            if (newDolls.at(-1) === newDolls.at(-2)) {
                newDolls.pop();
                newDolls.pop();
                answer += 2;
            }
        }
    });

    return answer;
}
