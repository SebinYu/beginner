//--------- 1.1 데이터 타입 ------------------------------------
// const(ant) = 상수 = 변하지 않는 수
const a = 2;
const b = 5;
//변수명: 공백 공간에 대문자로 대신 작성-JS방식

// let은 어디서든 변수값 수정가능 →let 타입이 선언 
// let으로 선언 -> 이후 변수값 변경될 것이라는 것 의미로 파악 (코드 해석력)**
// const는 처음 변수가 선언된 코드줄에서만 변수 수정가능
let myName = "sam";

// boolean= 참,거짓 타입
// null 비어있다는 것 명시 / undefined 변수관련 선언이 아무것도 되어있지 않다는 것



//--------- 1.2 변수=Variables ------------------------------------
// 콘솔(console)에 괄호 log 출력
//operation = 연산
console.log(a + b);
console.log("hello " + myName);

myName = "Jack";
console.log("Your new name is " + myName);



//--------- 1.3 Array 리스트 ------------------------------------
//쇼핑목록 만드는 등의 리스트 만들때마다 변수 선언한는 것은 공간낭비 → 1개 변수만 사용하는 array사용
//문자열, 숫자, boolean 등 모든 타입 가능
const toBuy = ["감자", 12, true, "토마토", "피자"];
//배열 값 추가
toBuy.push("불닭");
console.log(toBuy);
console.log(toBuy[3]);



//--------- 1.4 object.property ------------------------------------
// 데이터 정리, 객체의 특성으로 데이터 접근하는 방법
// object =객체 = player
// property= 객체 특성 -중괄호 사용 {} / ,로 구분 = name 등...
const player = {
    name: "sam",
    points: 10,
    fat: true,
};

console.log(player);
// property는 객체 외부공간에서 수정/추가 가능 - const로 object 선언했어도, 
//내부정보인 property는 const와 상관없이, 외부에서 수정가능
player.points = player.points + 15;
console.log(player.points);
//배열경우 이미 쇼핑할 물건이라는 공통된 특성으로 묶여 있기 때문에, object와 다른 용도로 사용


//--------- 1.5 function(argumnet) {} ------------------------------------
// function: 코드 캡슐화→ 같은 기능 실행, 여러번 가능
// argument: 인수 = 함수 실행동안 필요한 정보 전송
// 괄호안 데이터 함수로 보내기 필요
//function으로 sayHello 함수 선언- 2개 argument 사용하는 방식
function sayHello(nameOfPerson, age) {
    console.log("Hi my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Nico", 10);
sayHello("Sam", 5);

//object안에 함수를 property로서 선언가능- 함수선언 표기가 다르니 유의 
//함수명: function (인수){함수의 body} 로 선언
const kitty = {
    name: "ketchup",
    Meowing: function (num) {
        const string = "Meow ";
        console.log(string.repeat(num));
    },
};

kitty.Meowing(5);



//--------- 1.6 return ------------------------------------
//함수 출력을 console.log로 설정하면 해당 명령어 실행만 함
//남아있는 값이 없기에 결과값을 변수에 따로 저장하는 것은 불가
//그러므로 함수 결과 출력시, 콘솔x return 방식 필요
//const object ={ property(함수명: function (인수){함수의 body})} 
const calculator = {
    plus: function(a,b) {
        return a + b;
        //cf. return 하면 해당 함수 종료 -> return이후 명령어는 수행되지 않음
    },

    power: function(a,b) {
        return a ** b;
    },
}

calculator.plus(2,3);
//return으로 설정했기 때문에 콜솔 결과창에 나오지는 않음

const plusResult = calculator.plus(2,3);
const powerResult = calculator.power(2,3);

console.log(plusResult + powerResult);
//변수명을 통해 결과값 활용편리, 
//더하기 값 + 제곱값



//--------- 1.7 conditionals=조건문 ------------------------------------
//prompt: 화면에 입력창 띄우는 명령어 -> 입력값을 string 자료형으로, age variable에  저장
const age = prompt("실행을 원한다면 1을 입력해주세요.");

// typeof→ 데이터 타입 분별
// parseInt→ 괄호 데이터가 stirng타입 숫자라면 정수형으로 인식 -> string "1"이 입력되어도 정수 1로 인식
//유의: parseInt괄호에 abcd..등과 같은 일반 문자열이 들어온다면 NaN(Not a Number)오류 발생
console.log(typeof age, typeof(parseInt(age)));
//결과 string number


const years = parseInt(prompt("테니스 구력이 얼마나 되시나요?"));

//숫자만 입력받고 싶을때, if(조건: isNaN(boolean)) 활용
//isNaN()함수: 문자열같은 숫자아닌 데이터 타입 = true 반환/ 숫자입력 = false 반환
//숫자 범위는 범위시각화 상상하면서 설정
if (isNaN(years) || years < 0) {
    console.log("양수를 입력해주세요");
} else if (years < 5) {
    console.log("개나리")
} else if (years >= 5 && years <= 10) {
    console.log("짬밥먹은 개나리")
} else if (years > 10 && years <= 20) {
    console.log("테니스 준선수")
} 
//주의 범위내에 중첩되는 특정 숫자가 조건일 시, 
//중첩되는 범위보다 먼저 선언(코드는 위에서 아래로 읽기 때문)
  else if (years == 100) {
    console.log("장난치지 마세요.")
} else if (years > 20) {
    console.log("테니스 고인물")
} 



