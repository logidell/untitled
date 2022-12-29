//자바스크립트에서 비동기 함수의 동기 처리를 하기 위해서 사용하는 객체

//자바스크립트는 기본적으로 1thread 비동기 처리 방식을 사용하고 있다.
// 자바는 멀티스레드  / 자바스크립트는 싱글스레드
// Deadlock - 교착상태

// 비동기방식을 동기방식으로 사용할 때 -> 여러번 걸쳐서 사용할 때 문제가 됨. -> 콜백지옥

//자바스크립트에서 순차적으로 실행하고 싶을 경우에는 콜백함수를 이용해야 한다. 순차적으로 실행할 것이
//많아지게 되면 콜백지옥형태가 만들어진다. promise 는 이러한 콜백지옥을 해결하기 위해 사용하는 객체다.


// promise 에는 pending, fulfilled, rejected 3가지 상태가 존재한다.

// pending : 대기상태. 비동기 함수가 실행되고, 아직 처리가 완료되지 않은 상태
// fulfilled : 완료상태. 비동기 함수가 실행된 후 정상적으로 처리가 완료된 상태
// rejected : 거부상태. 비동기 함수가 실행된 후 오류가 발생한 상태

// promise 실행 시 콜백함수가 실행되고 해당 콜백 함수의 매개변수로 resolve(), reject() 라는 함수를 제공.
// resolve(매개변수) : promise 실행 후 fulfilled 상태일 경우 실행하는 함수. 나중에 then() 함수를 제공
// reject(매개변수) : promise 실행 후 rejected상태일 경우 실행하는 함수. 나중에 catch()함수를 제공

//promise에는 완료 및 오류처리를 위해서 then(), catch()함수를 제공.
//  then(매개변수) : 비동기 함수 실행이 완료된 후 실행되는 함수
//  catch(매개변수) : 비동기 함수 실행이 거부된 후 실행되는 함수

// 사용법
// 선언:
// function promise 사용할 함수명 (매개변수){
//  return new Promise(function(resolve, reject){
//         비동기 통신 소스..
//         비동기 통신 경과에 따라 resolve(), reject();
//      });
//  }

// 실행구문 :
//promise를 사용한 함수 명 ()
//.then(function(매개변수)){
//    성공 시 실행 할 내용
// }
// .catch(function(매개변수)){
//      실패 시 실행할 내용
// }
import React from "react";
import $ from "jquery";
import {getInfo} from "./MyMod.mjs";

//promise 객체를 사용할 함수
function getData() {
    return new Promise(function (resolve, reject) {
        const data = 100;
        resolve(data); //then이 실행됨.
        // reject(data) //catch가 실행됨
    })
}

//promise 사용 후 결과를 출력하는 구문 => 함수 실행구문
getData()
        .then(function (data) {
            console.log(`promise 사용 반환값 : ${data}`);
        })
        .catch(function (error) {
            console.log(`promise 사용 오류시 출력 : ${error}`)
        });



const getData1 = function () {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: 'http://localhost:8080/async/data1',
            type: 'post',
            success: function (data) {
                console.log('통신 성공');
                resolve(data);
            },
            error: function () {
                reject('오류 발생!');
            }
        });
    });
};
export {getData , getData1};
