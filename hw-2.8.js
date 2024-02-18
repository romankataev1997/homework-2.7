//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 const peopleAge = console.log(people.sort((x,y)=>x.age - y.age));

//2
function isPositive(item) {
    if (item > 0) {
        return item;
    }

}

function isMale(item) {
    if (item.gender === 'male') {
        return item;
    }
}

function filter(array, func) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            output.push(func(array[i]));
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peopleTwo = [{
    name: 'Глеб',
    gender: 'male'
},
{
    name: 'Анна',
    gender: 'female'
},
{
    name: 'Олег',
    gender: 'male'
},
{
    name: 'Оксана',
    gender: 'female'
}
];

console.log(filter(peopleTwo, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//3
let delay = 3000;
let printCurrentDate = () => {
    const currentDate = new Date(); // Получаем текущую дату и время в момент вызова функции
    console.log(currentDate);
    const interval = setInterval(() => {
        console.log(new Date()); // Получаем текущую дату и время в момент вызова функции
    }, delay)
    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30 * 1000)
}
 // printCurrentDate();

// 4 
function delayForSeconds(callback) {
    setTimeout(() => {
        callback();
    }, 1000)
}

delayForSeconds(function () {
    console.log('Привет, Глеб!');
})

// 5 
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }

    }, 1000)
}
// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => {
    sayHi('Глеб');
})