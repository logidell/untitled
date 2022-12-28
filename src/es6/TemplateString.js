// ES6에서 새로 추가된 문자열 사용 방식

//``(백틱) 기호 안에 문자열을 입력하는 방식
//백틱 사용 시 안에 ${변수명}을 사용해 변수의 내용을 바로 출력하는 것이 가능하다.
// ${}내부에서 간단한 연산도 가능하다.


// console.log('=============== es5 ver =================')
//
// var string1 = '안녕하세요'
// var string2 = '반갑습니다 '
//
// var greeting = string1 + ' '+ string2;
// console.log(greeting)
//
// var produce={name : 'book ', price :  ' 40000원'}
// var message = '제품' + produce.name+ '의 겨격은'+ produce.price+ '입니다'
//
// console.log(message);
//
// var multiLine = '문자열1/n 문자열';
// console.log(multiLine)
//
//
// var value1 =1;
// var value2 =2;
//
// var boolValue = false;
// var operator1 = '곱셈같은 ' + value1*value2 +' 입니다.';
// console.log(operator1)
// var operator2 = '불리언같은  ' + (boolValue ? '참' : '거짓')+ 입니다.;
// console.log(operator2)


// ====================es 6


// var string1 =`hi`
// var string2 = 'wellcom'
//
// var greeting ="greening"
//
// var product={name : '도서', price: '4200'}
// var message = '제품 ${product.name}의 가격은 ${product.price}'
// console.log(message)
//
// var mltiLine
// console.log(multiLine)
//
// var value1 = 1
// var value2 =2
// var voolValue = false
// var voolValue2 = `곱셈 값은 ${value1} * value2 }`
//
// console.log(operator1)
//
// var operatore2 = `불리언 값은 ${boolvaluse ? '참' : '거짓'})`


var string1 = '안녕하세요';
var string2 = '반갑습니다';
console.log(string1);
console.log(string2);

var greeting = string1 + '' + string2;
console.log(greeting);

var product = {name: '도서', price: '4200'};
var message = '제품' + product.name + '의 가격은 ' + product.price + '입니다.';
console.log(message);

var multiLine = '문자열1 \n문자열2;'
console.log(multiLine);

var value1 = 1;
var value2 = 2;
console.log(value1, value2);

var boolValue=false;
console.log(boolValue);

var operator1 = '곱셈값은 '+ (value1 * value2) + '입니다. ';
var operator2 = 'bool 값은' + (boolValue ? '참':'거짓')+'입니다.';

console.log(operator1);
console.log(operator2);