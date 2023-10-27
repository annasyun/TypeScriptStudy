//Type Assertion<-버그 잡기 힘들기 때문에 지양
function 내함수(x: number | string) {
  return (x as number) + 1;
}
console.log(내함수(123));
