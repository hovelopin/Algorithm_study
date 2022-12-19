// 100점, 구현, 10분
const isalpha = (str) => str.match(/[a-z]/i);

function solution(new_id) {
  // 1
  new_id = new_id.toLowerCase();

  // 2
  new_id = new_id
    .split("")
    .map((v) => {
      if (
        !isalpha(v) &&
        !Number.isInteger(Number(v)) &&
        v !== "-" &&
        v !== "_" &&
        v !== "."
      )
        return "";
      return v;
    })
    .join("");

  // 3
  while (true) {
    if (!new_id.includes("..")) break;
    new_id = new_id.replace("..", ".");
  }

  // 4
  if (new_id[0] === ".") new_id = new_id.slice(1);
  if (new_id.at(-1) === ".") new_id = new_id.slice(0, new_id.length - 1);

  // 5
  if (new_id === "") new_id = "a";

  // 6
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id.at(-1) === ".") new_id = new_id.slice(0, new_id.length - 1);
  }

  if (new_id.length <= 2) {
    const lastStr = new_id.at(-1);
    while (new_id.length < 3) {
      new_id += lastStr;
    }
  }

  return new_id;
}
