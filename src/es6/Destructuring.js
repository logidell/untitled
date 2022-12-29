// 확장 표현식
//ES6에서 추가된 object 타입의 사용 방식

console.log('---------- es5 -------------')
var x = 0;
var y = 0;
var obj = {x: x, y: y};
// x(키) : x( 값 or 변수값)
console.log(obj)

var randomKeyString = ' other';
var combined = {};
// 비어있는 obj
combined['one' + randomKeyString] = 'some value';
// 키 이름 + other  = some value
// output : { 'one other': 'some value' }
console.log(combined)


var obj2 = {
    methodA: function () { console.log('A')},
    methodB: function () { return 0; }
};

//키에 함수명 저장해 사용할 수 있다.

console.log(obj2);
obj2.methodA(); //out put : a
obj2.methodB(); //out put : 0 인데 콘솔에 안나온다.




console.log('---------- es6 -------------')

var x = x;
var y = y;
// object 타입 생성시에 키 생성치 않으면 변수 명이 키 값으로 설정된다.
// x: x , y : y 처럼 생성해줘야하는데 {x , y } 의 이 x, y들이  ' 변수명 =  키값 '  이 된다.

var obj = {x, y};
console.log(obj);

// object 타입 생성 시 대입 연산자 오른쪽에서 바로 키와 값을 설정하여 object 타입에 데이터를 추가하는 것이 가능하다.
var randomKeyString = 'other';
var combined = {['one' + randomKeyString]: 'some value'};

console.log(combined);

var obj2= {
    methodA() {console.log('A');},
    methodB() {return 0;}
};

//member 메서드 사용하는 것처럼 사용할 수 있음.


console.log(obj2);
obj2.methodA();
obj2.methodB();


console.log(' ======== 구조 분해 할당 ========= ')

console.log('   ====== es5 =======')

var list = [0,1];
var item1 = list[0]
var item2 = list[1]
var item3 = list[2] || -1 ; // 기본값 설정

console.log(item1); // 0
console.log(item2); // 1
console.log(item3); // -1 (기본값 출력)

var temp = item2; // data swap
item2 = item1;
// 변수 a : 10 , b : 20 => 데이터 바꿀 때 기존에는 무조건 임시 변수가 필요했다.
// 변수 명을 선언해 대입해야 동작하는 부분이다.
item1 = temp;
console.log(item1); // 1
console.log(item2); // 0

var obj = {
    key1 : 'one',
    key2 : 'two'
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; // 기본값
var newKey1 = key1;

console.log(key1);
console.log(key2);
console.log(key3);


console.log('   ====== es6 =======')


var list = [0, 1];
// 대입 연산자 왼쪽에 [] 를 사용하여 그 안에 배열을 사용하듯 변수명 입력하면 대입연산자 오른쪽의 데이터를
//하나씩 꺼내 대입 연산자 왼쪽의 변수명에 각각 저장된다.


var [item1, item2, item3 = 1] = list;
// var [item1, item2, item3 = 1] = [0,1]
//  == > item1 : 0 / item2 : 1 / item3 : 기본값(default key3 value)
console.log(item1);
console.log(item2);
console.log(item3);

console.log('=======');

//확장표현식을 사용하여 임시 변수 없이 2개의 변수의 값을 서로 변경한다.
//==> 즉 데이터 교환을 한꺼번에 할 수 있다.
[item2, item1] = [item1, item2];
console.log(item1);
console.log(item2);


console.log('=======');

// 배열의 확장 표현식과 동일하게  object 타입에서도 사용이 가능하다
// 대입 연산자 왼쪽에 {} 을 사용하고 변수명을 입력하면, 대입연산자 오른쪽의 object 타입의 키와 같은
// 변수명에 데이터를 저장한다
var {key1 : newKey1, key2, key3 = 'default key3 value'}= obj;
// {key1 :'one' , key2:'two, key3 : 기본값 }
// => 키 이름 생략시 변수명 키이름 사용 법칙이 들어감.
// key1 : newKey1 콜론 사용 시 뒤의 변수를 새 변수로 인식
// -->  콜론(:) 기호를 사용 시 새로운 변수 명으로 적용
// -->  = 기호를 사용 시 새로운 변수 명으로 적용

console.log(newKey1);
console.log(key2);
console.log(key3);

console.log('=======');

var [item, ...otherItems] = [0,1,2];
console.log(item) // 0 / 변수로 동작
console.log(otherItems); // 나머지들은 배열로 동작

var {key1, ...others}={key1:'one', key2: 'two'};
console.log(key1) // 동일한 변수가 있기 때문에 변수만 가져옴 output: one
console.log(others); //{ key2: 'two' } // ...other이기 때문에 배열로 가져온다. 

