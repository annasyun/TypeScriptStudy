// a타입 선택자 HTML 변경하는 방법
var 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'; //잘됨
}
