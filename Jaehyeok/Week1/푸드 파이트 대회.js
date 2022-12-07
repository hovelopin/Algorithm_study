function solution(food) {
  let str = "";
  const foods = food.slice(1);

  foods.forEach(
    (_, i) => (str += String(i + 1).repeat(Math.floor(foods[i] / 2)))
  );

  return str + "0" + str.split("").reverse().join("");
}

console.log(solution([1, 3, 4, 6])); // 1223330333221
console.log(solution([1, 7, 1, 2])); // 111303111
