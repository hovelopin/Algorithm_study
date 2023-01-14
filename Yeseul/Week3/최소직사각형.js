function solution(sizes) {
  var answer = 0;
  let X = 0;
  let Y = 0;
  sizes.forEach((size) => {
    size.sort((a, b) => b - a);
    if (size[0] > X) {
      X = size[0];
    }
    if (size[1] > Y) {
      Y = size[1];
    }
  });

  answer = X * Y;
  return answer;
}
