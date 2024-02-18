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