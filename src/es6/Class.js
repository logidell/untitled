// ES6 부터 자바스크립트에서도 class 키워드 지원
//자바 class 보다는 간소화됨.
//constructor(매개변수) : 자바스크립트 클래스의 생성자, 자바스크립트의 생성자는 이름을 지정할 수 없음.
// == > 얘 자체가 생성자.
// extends : 자바스크립트의 클래스도 상속을 지원


//클래스 선언
class Shape {
//정적 멤버, 클래스명. 정적멤버명으로 사용
    static create(x, y) {
        return new Shape(x, y);
    }

//멤버변수 선언, let, const var가 붙지 않는 이유는 name은 키 이기때눈이다.
    name = 'Shape';

// 생성자 , 이름 고정
// 생성자에서 this.변수명을 입력 시 멤버 변수가 선언된다.
    constructor(x, y) {
        this.move(x, y);
//    객체의 move라는게 동작
    }

//메서드 선언
    move(x, y) {
        this.x = x;
        this.y = y;
    }

//
    area() {
        return 0;
    }
}

var s = new Shape(10, 20);
//뒤에는 자동으로 생성자가 실행된 것.
s.area();
s.move(100, 200);
console.log(s.name);
console.log(s.x);
console.log(s.y);


var s1 = Shape.create(0, 0);
s.area();
s.move(10, 20)
console.log(s1.name);
console.log(s1.x);
console.log(s1.y);


console.log('--------------------------------');

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        if(this.radius === 0){
            return super.area();
        }
        return this.radius * this.radius;
    }
}
var c = new Circle(0,0,10);
c.area();
console.log(c.area());