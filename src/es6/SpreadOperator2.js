

//object 타입에서 전개 연산자 사용

console.log('--------------- es5 ----------------')

var objOne = {one : 1, two : 2, other : 0};
var objTwo = {three : 3, four : 4, other : -1};


var combined ={
    one : objOne.one,
    two : objOne.two,
    three : objTwo.three,
    four : objTwo.four,
};

console.log(combined);


//--------------------------------------------

//assign() 함수를 이용해  object 타입의 변수를 하나로 합한다.
//첫번째 매개변수는 합쳐질 대상, 두번째 , 세번째 매개변수를 첫번째 매개변수에 합한다.
//동일한 키를 사용한 데이터가 있을 경우 뒤쪽 키의 값으로 합쳐진다.

var combined = Object.assign({}, objOne, objTwo);
console.log(combined);



var combined = Object.assign({}, objTwo, objOne);
console.log(combined);

var others = Object.assign({}, combined);
console.log(others);

delete others.other;
console.log(others);

console.log("====================es 6 ================")


var combined = {...objOne, ...objTwo};
console.log(combined);


var combined={...objTwo, ...objOne};
console.log(combined);


var {other, ...others} = combined;
console.log(other);
// 0
console.log(others);
//{ three: 3, four: 4, one: 1, two: 2 }