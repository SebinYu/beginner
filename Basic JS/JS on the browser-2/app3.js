const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
h1.style.color = "blue";
}

function handleMouseEnter(){
h1.innerText = "mouse is here!";
}

function handleMouseLeave(){
h1.innerText = "mouse is gone!";
}

//window=기본적인 전체 환경 object
function handleWindowResize(){
    document.body.style.backgroundColor = 'tomato'
    }
    //body 접근시 수행

function handleWindowCopy() {
    alert("copier!");
}

h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);


// title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
// 이 두개는 같다.
// 근데 addEventListener를 더 선호하는 
// 까닭은 removeEventListener를 통해서 event listener를 제거할 수 있기 때문이다. (더 보기가 좋다. )
// h1은 document.title랑 다르다.
// document.body, head, title이 중요해서 존재하는거고, 
// 나머지 element들은 querySelector나 getElementByld 등으로 찾아와야한다.

//---------------------------------------------------------
//클릭시 파랑 -> 토마토 색으로 문자색 변경
function handleTitleClick() {
    const currentColor = h1.style.color; // 기존 컬러는 까먹음 방지로 const 변수로 지정
    let newColor; //앞으로 바뀔 컬러변수
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor; // 앞으로 바뀐 컬러변수를 element에 반영
}


//---------------------------------------------------------
//하지만 style 즉 꾸미기 작업은 css에서, 작동설정이 JS에서 할 일
//그러므로 css에 특정 class이름 존재하면 작동하는 함수 .clicked를 css파일에 만든다
//toggle: 이후 클래스 clicked가 classList에 포함 되었는지 여부에 따라 clicked를 추가/삭제
//이를 통해 위에서 작성한  파랑 -> 토마토 코드보다 간결하게 클린코드 작성이 가능하다
//그러므로 [toggle + css에 클래스명] 조합을 css기본으로 하자
function handleTitleClickCss() {
    h1.classList.toggle("clicked");
}

// h1.addEventListener("click", handleTitleClick);
h1.addEventListener("click", handleTitleClickCss);


