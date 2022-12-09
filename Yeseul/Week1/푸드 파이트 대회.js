function solution(food) {
  let answer = "";
  let newFood = [];
  for (let i = 0; i < food.length; i++) {
    newFood.push(Math.floor(food[i] / 2));
  }

  let arr = [];
  for (let i = 0; i < newFood.length; i++) {
    let temp = Array(newFood[i]).fill(i);
    arr.push(...temp);
  }

  answer = arr.join("") + 0 + arr.reverse().join("");

  return answer;
}

function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  return answer + "0" + [...answer].reverse().join("");
}
