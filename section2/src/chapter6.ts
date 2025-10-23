// any
// 타입을 확실히 모를떄

let anyVar: any = 10;

let num: number = 10;

num = anyVar;

console.log(num);

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}
