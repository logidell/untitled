import {name,job, gender,getInfo} from "./MyMod.mjs";
import  {num1, num2,sum} from "./MyMod2.mjs"

import sub from "./MyMod2.mjs";

console.log(name)
console.log(job)
console.log(gender)
console.log(getInfo());


console.log(`첫 숫자 ${num1} + 두번째 숫자 : ${num2}의 값 :  ${sum()}`);

// export default sub;

console.log(`sub() 실행 : ${sub()}`);
