// 배열
// 방법 1
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "paulsea"];

// 방법 2
let boolArr: Array<boolean> = [true, false, true];

// 배열의 요소 들의 타입이 다수인 경우
let multArr: (string | number)[] = [1, "hello"];

// 다차원 배열 타입 정의

let doubleArr1: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let doubleArr2: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true]; // 순서 또한 바뀌면 안됨

const users: [string, number][] = [
  ["김규빈", 1],
  ["한현민", 2],
  ["근현민", 3],
  ["팜현민", 4],
  [5, "기무현"],
];
