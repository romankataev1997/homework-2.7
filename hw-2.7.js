// 1
let str = "js";
console.log(str.toUpperCase())

// 2

function searchStart(arr, str) {
    return arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// 3

function roundFloor(a, b) {
    return Math.floor(a * b);
}
console.log(roundFloor(32.58884, 1));

function roundCeil(a, b) {
    return Math.ceil(a * b);
}
console.log(roundCeil(32.58884, 1));

function roundRound(a, b) {
    return Math.round(a * b);
}
console.log(roundRound(32.58884, 1));

// 4 

const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);

// 5 

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10));

// 6 

function getRandomArrNumbers(n) {

    let i = n / 2;
    i = Math.floor(i);
    for (let index = 0; index < i; index++) {
        console.log(Math.round(Math.random() * n))
    };
}
getRandomArrNumbers(7);

// 7 
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomInt(10, 15))

// 8 
console.log(new Date());

// 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// 10 

function ruDateTime() {
    const myDate = new Date();
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let ruDateTime = "Дата:" + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " " + days[myDate.getDay()] + "." + "Время:" + myDate.toLocaleTimeString();
    return ruDateTime;
}
ruDateTime();
console.log(ruDateTime())

// 11 

function seasonsBtn() {

    let words = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let wordsfirst = prompt(`Назовите первое слово`);
    let wordsLast = prompt(`Назовите последнее слово`);
    if (wordsfirst === words[0] && wordsLast === words[words.length - 1]) {
        alert`Это правильный ответ!`;
    } else if (wordsfirst === words[0] || wordsLast === words[words.length - 1]) {
        alert`А счастье было так близко!`;
    }
    else {
        alert`Вы не угадали!`;
    }
}
