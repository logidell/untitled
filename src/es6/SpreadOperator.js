// 전개 연산자 (...)
// es6에 추가됨.
// 나열형 자료를 추출, 연결시 사용. 배열, 객체, 변수 명 앞에 기호를 사용해 사용함
// 배열 객체 함수 인자 표현식 안에서만 동작한다. = ([])  대괄호 안에서만 동작

console.log('-------------es5 ver------------')


var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
// 배열의 각 요소를 하나씩 추출해 새로운 배열에 대입
console.log(combined)

//--------------------------------------------

var combined = array1.concat(array2);

console.log(combined);

// -------------------------------------------
var combined = [].concat(array1, array2);
console.log(combined);

//빈 배열에 concat 사용해 배열을 같이 넣어주는 방식
// output   [ 'one', 'two', 'three', 'four' ]
//          [ 'one', 'two', 'three', 'four' ]
//          [ 'one', 'two', 'three', 'four' ]
//결과 값은 동일하다.


// -------------------------------------


var first = array1[0];
var second = array1[1];
var third = array1[2] || 'empty';
//기본 값 설정 방법 2번 index가 존재하지 않으니 empty가 들어가게 된 것. = 기본값 설정 법

console.log(first);
console.log(second);
console.log(third);


console.log('----------------- es6 --------------------')


var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [...array1, ...array2];
// →  array1 의 one, two가  펼쳐짐  / array2 의 three, four가  펼쳐짐

// 적힌 순서대로 펼치기 때문에 1, 2의 순서가 바뀌면 바뀐 대로 펼쳐놓는다.
// -> 나열혈  /  펼침연산자라고도 불림.
console.log(combined);



var [first, second, third = 'empty', ...others] = array1;

console.log(first);
console.log(second);
console.log(third);
console.log(others);


var [first, second] = [second, first]; // 데이터 스와핑


// --------------
var first = 10;
var second = 20;
var tmp = 0;


tmp = first;
first = second ;
second = tmp;
