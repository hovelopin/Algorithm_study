function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id.split("").forEach((letter) => {
        const ascii = letter.charCodeAt(0);
        if (
            !(
                (44 < ascii && ascii < 47) ||
                (47 < ascii && ascii < 58) ||
                ascii === 95 ||
                (96 < ascii && ascii < 123)
            )
        ) {
            new_id = new_id.replace(letter, "");
        }
    });
    const letters = new_id.split("");
    for (let i = 0; i < letters.length - 1; i++) {
        if (letters[i] === "." && letters[i + 1] === ".")
            letters.splice(i, 1, "");
    }
    new_id = letters.join("");
    if (new_id.startsWith(".")) new_id = new_id.slice(1);
    if (new_id.endsWith(".")) new_id = new_id.slice(0, -1);
    if (new_id.length === 0) new_id = "a";
    if (new_id.length === 1) new_id += new_id.slice(-1);
    if (new_id.length === 2) new_id += new_id.slice(-1);
    if (new_id.length > 15) new_id = new_id.slice(0, 15);
    if (new_id.endsWith(".")) new_id = new_id.slice(0, -1);
    return new_id;
}
