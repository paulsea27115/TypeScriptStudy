// 타입 별칭

// type {이름}
type User = {
  id: number;
  name: string;
  nickname: string;
  brith: string;
  bio: string;
  location: string;
};

// 이름이 같을 시 영역 별로 사용

function func() {
  // 이 영역 에는 아래의 User 타입이 적용
  type User = {};

  let user: User;
}

let user: User = {
  id: 1,
  name: "조성빈",
  nickname: "paulsea27115",
  brith: "2007.01.15",
  bio: "ㅎㅇ",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "김규빈",
  nickname: "rlarbqls060125",
  brith: "2006.01.25",
  bio: "ㅎㅇ",
  location: "부천시",
};

// 인덱스 시그니처

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
