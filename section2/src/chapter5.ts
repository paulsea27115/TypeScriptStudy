// enum 타입
// 값들에 이름을 부여 후 열거

// 약간 클래스에 하거나 함수나 변수에 할수 있기는 한데
// 더욱 특화(쓰기 편하게) 구별 해 놓은듯
// js로 변환할때 어떻게 되는지 볼 수 있음

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김현민",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "김태윤",
  role: Role.USER,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST,
};

console.log(user1, user2, user3);
