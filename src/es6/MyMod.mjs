// export 설정 방법
// 1. 출력하고자 하는 변수 및 함수, 클래스의export를 접두사로 붙인다
// 변수, 함수, 클래스의 기존에 사용하듯 다 선언 후 파일 끝에 export 형태 있음.


export const name = '아이유'
export const gender = '여성'
export const job = '가수';
export const getInfo = () => console.log(`이름 : ${name}, 직업 : ${job}, 성별 : ${gender}`);