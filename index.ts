//class로부터 생산된 object라면 instanceof로 narrowing

let 날짜 = new Date();
if (날짜 instanceof Date){
  console.log('참이에요')
}

//literal type활용한 narrowing
type Car = {
  wheel : '4개',
  color : string
}
type Bike = {
  wheel : '2개',
  color : string
}

function 함수(x : Car | Bike){
  if (x.wheel === '4개'){
    console.log('the car is ' + x.color)
  } else {
    console.log('the bike is ' + x.color)
  }
}