function solution(n, arr1, arr2) {
  var answer = [];
  let arr1ToBinary = [];
  let arr2ToBinary = [];

  for (let i = 0; i < n; i++) {
    if (arr1[i].toString(2).length < n) {
      let temp = "0".repeat(n - arr1[i].toString(2).length);
      arr1ToBinary.push(temp + arr1[i].toString(2));
    } else {
      arr1ToBinary.push(arr1[i].toString(2));
    }

    if (arr2[i].toString(2).length < n) {
      let temp = "0".repeat(n - arr2[i].toString(2).length);
      arr2ToBinary.push(temp + arr2[i].toString(2));
    } else {
      arr2ToBinary.push(arr2[i].toString(2));
    }
  }

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (arr1ToBinary[i][j] === "0" && arr2ToBinary[i][j] === "0") {
        temp += " ";
      } else {
        temp += "#";
      }
    }
    answer.push(temp);
  }
  return answer;
}
