//ES6에서 let, const  키워드 추가

// var es 5 버전까지 자바스크립트에서 변수를 선언하는 유일한 방식
// 변수의 스코프(범위) 함수를 기준으로 하고 있다. for 및 if, switch ~ case 내에서 선언한 변수라도
//해당 코드 블럭을 벗어나 사용이 가능하다.
//중복 선언이 가능하다.

//let =  ES6에서 추가된 변수 선언 방식
//변수 범위가 코드블럭을 기준으로 함. ( {} )
// for 및 if, switch ~case 코드 블럭 내에 선언된 변수는 해당 코드블럭을 벗어나면 메모리에서 삭제
// 중복선언 불가


//const es6에서 추가된 상수 선언 방식
//변수의 범위가 코드블럭을 기준으로 한다. for, if, switch ~case 의 코드 블럭 내에서 선언된 변수는 해당 코드
// 블럭을 벗어나면 메모리에서(삭제된다)
// 중복 선언이 불가능하고 지정된 변수의 데이터 수정이 불가능하다.
// const 로 선언된 변수에 배열, object같은 데이터를 저장했을 경우 해당 배열 및 object의 요소를 변경할 수 있다.
console.log("================================")
//const는 상수이기 때문에 값을 직접 수정하고자 하면 오류 발생.
//배열에 요소를 추가하는 append() 함수 사용 시 오류 발생한다.
const num = 1;
console.log(num)
// num=100; - >  error
const str = '문자';
// str = 'b' - > error

const arr = [];
console.log(arr)
arr[0] = 10;
console.log([arr[0]])
console.log([arr[1]])
//배열에는 데이터가 들어간다. 그러나
// arr.append(30); -> error


//배열의 요소에 값을 수정하는 것은 문제가 발생한다.
const arr1 = [1,2,3];
console.log([arr1]);
// arr1.append(4); -> err

//배열 요소에 넣는것은 괜찮으나 형태변경이 될 경우는 에러가 난다.

arr1[0] =100;
arr1[1] =200;
arr1[2] =300;
console.log(arr1);
console.log("============================")

// object 타입에 데이터 추가 시 오류 발생
const obj = {};
// obj = {name : 'name'}

//object가 가지고 있는 요소의 내용을 수정하는 것은 문제가 없다. -> 요소 자체를 바꾸는 건 error 발생 되지 않는다.
const obj1 = {num:1, name :'아이유'};
console.log(obj1);
obj1.num = 10;
obj1.name = '유재석';
console.log(obj1);


console.log("============================")

//const로 생성한 배열에 내장 함수 사용 시 데이터 추가, 삭제가 가능하지만 무결성 제약 조건을 위반하기에
//되도록이면 사용치 않아야 한다.

const arr2=[];
console.log(arr2)
arr2.push(1);
console.log(arr2)


arr2.splice(0,0,0);
console.log(arr2)
arr2.pop();
console.log(arr2)


console.log("-----------")


const obj2={};
console.log(obj2);
obj2['name'] = '아이유';
console.log(obj2);
Object.assign(obj2,{name:'유재석'});
//기존의 데이터 대입 방식
console.log(obj2);
delete obj2.name;
console.log(obj2);


// const 사용 시 내용을 수정하고자 하려면 새로운 const 변수를 선언하고 데이터를 입력하는 방식으로 사용한다.
const num1 = 1;
const num2= num1*2;
//위의 방식처럼 사용한다.
console.log(num2);

console.log("====");

const str1 = '문자';
const str2 = str1+'추가';
console.log(str2);

console.log("====");

arr3 = []
arr4= arr3.concat(1);

const arr5 =[...arr4,3,3];
console.log(arr5);

const  arr6 = arr5.slice(0,1);
console.log(arr5);
console.log(arr6);

const [first, ...arr7] = arr5
//변수  ...= 나머지 것
console.log(first);
console.log(arr7)



const obj3 = {name:'아이유', age:30};
const obj4 = {...obj3, name:'유재석'};
const {name, ...obj5} = obj4;
//name = 찐 변수 일반 변수  / ... 데이터가 여러가지 들어가는 object 타입으로 변경
console.log(obj3);
console.log(obj4);
console.log(name);
console.log(obj5);

// 확실하게 변경해줘야 할 경우에만 let을 사용하고 기본은 const로 사용하는 것을 추천.

