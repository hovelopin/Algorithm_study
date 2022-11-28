# Week 1

## [명예의 전당](https://school.programmers.co.kr/learn/courses/30/lessons/138477)

- 통과한 코드

```js
// 시작 (17시 55분) => 끝 (18시 8분)

function solution(k, score) {
  const temp = [];
  const result = [];

  score.forEach((el, idx) => {
    // 모든 원소를 temp에 넣고 정렬한다. (오름차순 정렬한다)
    temp.push(el);
    temp.sort((a, b) => a - b);

    // 정렬된 데이터를 기준으로 k까지는 가장 작은 데이터를 이용하고 크면 잘라서 첫번째 데이터를 이용한다.
    temp.length <= k
      ? result.push(temp[0])
      : result.push(temp.slice(idx + 1 - k)[0]);
  });

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
```

- 소요 시간
  13분
- 어려웠던 점
  어려웠던 점은 없었는데 효율적이지 못한 코드인 것 같다.
- 새로 배운 점
  slice 메소드를 썼을때 헷갈렸는데 `slice`는 기존 배열을 변경하지 않고 `splice`는 기존 배열을 변경시킴

## [기사단원의 무기](https://school.programmers.co.kr/learn/courses/30/lessons/136798)

- 통과한 코드
- 소요 시간
- 어려웠던 점
- 새로 배운 점

## [과일 장수](https://school.programmers.co.kr/learn/courses/30/lessons/135808)

- 통과한 코드
- 소요 시간
- 어려웠던 점
- 새로 배운 점

## [푸드파이트 대회](https://school.programmers.co.kr/learn/courses/30/lessons/134240)

- 통과한 코드
- 소요 시간
- 어려웠던 점
- 새로 배운 점

## [성격 유형 검사하기](https://school.programmers.co.kr/learn/courses/30/lessons/118666)

- 통과한 코드
- 소요 시간
- 어려웠던 점
- 새로 배운 점

## [신고 결과 받기](https://school.programmers.co.kr/learn/courses/30/lessons/92334)

- 통과한 코드
- 소요 시간
- 어려웠던 점
- 새로 배운 점
