// es6에서 배열 관련 함수가 추가됨

//3개중 2개만

// forEach() :  지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하는 함수, 반환값이 없다.
// 사용법 : 배열명.forEach(콜백함수(현재 값이 저장될 변수, 현재 index, 현재 배열의 내용)){
//              실행할 소스코드
//              }

const fruits = ['사과', '배', '복숭아'];
console.log('원본 배열 '+ fruits);

console.log('--------------------------기존 / for 문 사용')
//count를 반복하기 위해
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log('------------------------- 기존 / for ~in 문 사용')
// for in문 사용 시 item 의 키를 넣어줌. 출력시에는 fruits[item] 로 사용
for (const item in fruits) {
    console.log(fruits[item])
}
//object 에서 꺼낼 때 사용
console.log('--------------------------es6 /  forEach() 사용')
// 값을 직접 넣어 사용해줌.

fruits.forEach(function (item){
    console.log(item)
});

console.log('------------es6 /  forEach() 사용 / 매개변수 여러개')
fruits.forEach(function(item, index) {
    console.log(`index : ${index}, value : ${item}`);
});


console.log('------------')

fruits.forEach(function (item,index,arrName){
    console.log(`array name : ${arrName}, index : ${index}, value : ${item}`);
});
console.log('===================================')



// map(): forEach()와 같이 지정한 배열의 요소에 callback 으로 지정한 함수의 내용을 실행하고
// 그 결과값을 배열로 반환하는 함수
//사용법 : 배열명.map(콜백함수(현재 값이 저장될 변수, 현재 index, 사용한 배열명)){
//          실행할 소스코드
//          return 반환값
//          }


const numbers = [4,9,16,25]
console.log(`원본 배열 :`);
console.log(numbers);



let data = numbers.map(function (item){
    console.log(`현재 값 : ${item}`);
    return item *2;
//     -> 배열이 되면서 곱한 값이 쌓이는 형식 output : [8,18,32,50]
})
console.log(`map 사용 후 데이터 :`)
console.log(data)

console.log('------------es6 /  map() 사용 / 매개변수 여러개')

data = numbers.map(function (item, index){
    console.log(`index : ${index}, value : ${item}`);
    return item * 2;
});
console.log(`map 사용 후 데이터 :`)
console.log(data)


data = numbers.map(function (item,index,current){
    console.log(`current array : ${current}, index : ${index}, value : ${item}`)
    return item * 2;
})
console.log(`map 사용 후 데이터 :`)
console.log(data)
