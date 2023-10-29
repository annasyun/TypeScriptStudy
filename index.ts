type NumOut = (x: number, y: number) => number;

let NumOutFunc: NumOut = (a, b) => {
  return a + b;
};

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let memberInfo = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
memberInfo.plusOne(1);
memberInfo.changeName();
