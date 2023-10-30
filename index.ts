// narrowing 사용
let 제목 = document.querySelector('#title');
if (제목 != null) {
  제목.innerHTML = '반갑소'
}

// instanceof 사용하는 narrowing 방법
let 제목 = document.querySelector("#title");
if (제목 instanceof HTMLElement) {
  제목.innerHTML = "반갑소";
}

// 지양해야 하는 assertion 문법 사용하는 방법
let 제목 = document.querySelector('#title') as HTMLElement;
제목.innerHTML = '반갑소'

//optional chaining 연산자 사용
let 제목 = document.querySelector('#title');
if (제목?.innerHTML != undefined) {
  제목.innerHTML = '반갑소'
}