//------------ 2.0 The document_ object---------------
//document 콘솔에 입력 - JS환경에서 html 내용 확인가능
//console.dir(document) 콘솔에 입력 시
//document가 object/ html정보(ex.title: Momentom App)가 property로 제시
//document.title 입력-> Momentom App으로도 검색가능
//즉, document_ object를 통해 자바스크립트 환경에서 html 수정/정보검색이 가능하다는 의미
//니코쌤 왈 엄청난 기능이라고 함

//html 태그:<a></a> 이런거조합
//<div class="hello">안녕하세요</div>
//태그:div, 속성:class, 값:hello
//element: 내용을 포함해 시작태그와 종료태그까지를 엘리먼트
//즉 element = <div class="hello">안녕하세요</div>


//------------ 2.1 getElementById ---------------
//document object를 통해,JS로 html 코드 수정가능(상호작용)
//document.getElementById: id가 title로 설정된 element 불러오기
const title = document.getElementById("title");

//위에서 불러온 title object를 통해 property활용가능
//id가 title인 경우 내부문자열 변경
// 하이!-> Got You!
//하지만, 브라우저에서만 변경된 것이며, html 근본 코드는 하이!로 유지
title.innerText = "Got You!";

//title.id: title object의 id/class 정보 출력 = title/Hello3
console.log(title.id);
console.log(title.className);

//------------ 2.2 querySelector ----------------
//query: 쿼리는 웹 서버에 특정한 정보를 요청 명령어
//querySelector: hello를 class로 가진 element 내부에 있는 첫번째 h1태그 불러오기 - 첫번째가 아닌 h1태그는 불러오지 x
//querySelectorAll : 해당하는 모든 태그 array형식으로 불러옴
const hello = document.querySelector(".hello h1");
const hello1 = document.querySelectorAll(".hello h1");
console.log(hello);
console.log(hello1);


//querySelector(#id명칭) =  getElementById 효과와 동일
const title2 = document.querySelector("#title");
const title3 = document.getElementById("title");

console.log(title2);
console.log(title3);


//------------ 2.2 Events ----------------
const title4 = document.querySelector(".hello h1");

function handleTitle4tclick() {
    console.log("title was clicked!");
}

//title4 변수에 저장된 첫번째 h1태그를, 브라우저 화면에서 클릭시 handleTitle4tclick함수 수행
title4.addEventListener("click", handleTitle4tclick);