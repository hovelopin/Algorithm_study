// #1, 50점, 20분
const seq = [1, 2, 3, 1];
var answer = 0;
const sliding = 4;

function process(inputs) {
  if (inputs.length < 4) return;

  for (let i = 0; i < inputs.length - sliding + 1; i++) {
    const target = inputs.slice(i, i + sliding);
    let flag = true;

    for (let j = 0; j < seq.length; j++) {
      if (target[j] !== seq[j]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      const arr = inputs.slice(0, i).concat(inputs.slice(i + sliding));
      answer += 1;

      return process(arr);
    }
  }
}

function solution(inputs) {
  process(inputs);

  return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); // 2
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); // 0

// #2, 100점 20분
function solution2(inputs) {
  const num = 4;
  let answer = 0;
  const stack = [];

  for (let i = 0; i < inputs.length; i++) {
    stack.push(inputs[i]);

    if (stack.length >= num) {
      const str = stack.slice(-num).join("");
      if (str === "1231") {
        answer += 1;
        for (let j = 0; j < num; j++) {
          stack.pop();
        }
      }
    }
  }

  return answer;
}

solution2([2, 1, 1, 2, 3, 1, 2, 3, 1]); // 2
solution2([1, 3, 2, 1, 2, 1, 3, 1, 2]); // 0
