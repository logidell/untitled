//화살표함수 : ex6 버전부터 사용되는 함수를 선언하는 새로운 방식
//es5 버전의 익명함수를 사용해 함수를 생성하는 방식에서 변경되어 function키워드를 생략,
//매개변수와 코드 블럭 사이에  '=>' 사용하는 방식
// 소스코드가 반환값 한 줄일 경우 코드 블럭을 생략할 수 있다. {return ~} 도 생략 가능 (한 줄 일때 )
// 매개변수가 1개인 경우 매개변수의 괄호를 생략할 수 있음.

// 사용법 :
// 변수명 = (매개변수, 매개변수2, ...) => {
//      실행할 소스코드
//      return 반환값
// }
// 변수명 = (매개변수1, 매개변수2, ...) => 반환값;
// 변수명 = 매개변수 => 반환값;
// 변수명 = () => 반환값;


console.log("----------기존 함수 생성 선언 방식-----------")

function es5Func1(a, b) {
    console.log(a + b);
    return a + b;
}

console.log("----------기존 함수 생성 선언 방식2 익명함수, callback 함수. 1회용-----------")
//var es5Func2 얘 자체가 함수가 됨. 그 뒤로는 익명함수
var es5Func2 = function (a, b) {
    console.log(a + b);
    return a + b;
}

es5Func1(10, 20);
es5Func2(100, 200);

let data = es5Func1(10, 20);
console.log(data);
data = es5Func2(100, 200);
console.log(data);

//둘 다 혼합해서 사용. 내부적 구조가 조금 다르다고 함.
console.log("----------화살표 함수 -----------")

const es6Func1 = (a, b) => {
    console.log(a + b);
    return a + b;
}

data = es6Func1(10, 20);
console.log(`리턴 받은 값 : ${data}`);

const es6Func2 = (a, b) => a + b;
data = es6Func2(200, 200);
console.log(`리턴 받은 값 :${data}`);


const es6Func3 = (a, b) => console.log(a + b);
es6Func3(10, 20);


const es6Func4 = (a) => a * 2;
data4= es6Func4(10)
console.log(`리턴받은 값 : ${data}`)



const es6Func5 = a => a * 2;
data =es6Func5(10)
console.log(`리턴받은 값 : ${data}`)



const es6Func6 = () => console.log(`es6Func() 실행`)