// Задание 1
function minNumber(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNumber());

// Задание 2
function parityOfNumber(a) {
    if (a % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(parityOfNumber(235));

// Задание 3
// Задание 3.1
function squareNumber(Number = 10) {
    console.log(Number ** 2);
}

squareNumber(5);

// Задание 3.2
function squareNumber1(Number = 4) {
    return Number ** 2;
}

console.log(squareNumber1(6));

// Задание 4
function Hello() {
    let age = prompt('Сколько тебе лет?');

    if (age < 0 || isNaN(age)) {
        console.log(`Вы ввели неправильное значение`);
    } else if (age >= 0 && age <= 12) {
        console.log(`Привет, друг!`);
    } else {
        console.log(`Добро пожаловать!`);
    }
}

Hello();

// Задание 5
function Numbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return a * b;
    }
}

console.log(Numbers("нет", "f"));

// Задание 6
function cubeOfNumbers() {
    let x = prompt(`Введите число`);

    if (isNaN(x)) {
        return `Переданный параметр не является числом`;
    } else {
        return x + ' в кубе равняется ' + x ** 3;
    }
}

console.log(cubeOfNumbers());

// Задание 7
function getCircleArea() {
    return Math.round(Math.PI * this.radius ** 2);
}

function getCirclePerimeter() {
    return Math.round(2 * Math.PI * this.radius);
}

const circle1 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

const circle2 = {
    radius: 10,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

console.log('Площадь первого круга составляет ' + circle1.getArea() + ' кв. мм');
console.log('Периметр первого круга составляет ' + circle1.getArea() + ' мм');
console.log('Площадь второго круга составляет ' + circle2.getArea() + ' кв. мм');
console.log('Периметр второго круга составляет ' + circle2.getArea() + ' мм');
