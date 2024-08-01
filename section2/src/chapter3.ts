// Object
let user: {
  id?: Number; // ? 뜻 있어도 되고 없어도 됨(선택적 프로퍼티)
  name: string;
} = {
  id: 1,
  name: "기무현민",
};
// 이 방식을 구조적 타입 시스템
// -> Property Based TypeScript

// 이름 -> 명목적 타입 시스템(대부분의 언어들)
let config: {
  readonly apiKey: string; // 값 변경 못함 -> 말 그대로 조회만 가능
} = {
  apiKey: "MY API KEY",
};
