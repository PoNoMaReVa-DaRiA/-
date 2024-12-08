let image = document.getElementById("image");
let quote = document.getElementById("quote");
let images = [
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png',
        ]

let randomImg = getRandomElement(images);

// Скрывает текущие цитату и изображение
function hidePP() {
    image.classList.remove('show');
    quote.classList.remove('show');
    // Показывает следующие цитату и изображение с задержкой в пол секунды, чтобы успел сработать transition
    setTimeout(show, 500);
}

// Показывает новые цитату и изображение 
function show() {
    // Проверяет кол-во символов в тексте. Если их меньше 48, то меняет шрифт и выравнивает текст по центру, иначе - стандартные стили
    if (randomQuote.length <= 48) {
        quote.style.fontSize = '42px';
        quote.style.justifyContent = 'center';
    } else {
        quote.style.fontSize = '';
        quote.style.justifyContent = '';
    }

    image.src = 'images/' + randomImg;
    // Тут нужно добавить изменение текстового содержимого объекта quote

    image.classList.add('show');
    quote.classList.add('show');
}
function generateQuote () {
    quote.textContent=randomQuote;
    console.log (ending [0]+begining [0] );
    let resalt= ending [1]+begining [1];
    console.log(resalt);
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
let randombegining=getRandomElementfunction(begiining);
let randomend=getRandomElementfunction(ending);
let randomQuote=randombegining+''+randomend;
console.log (randomQuote);

}
let steps; 
 steps=5000;
console.log 
 let beginin= [
    'Кто рано встает, ',
    'Не бойся ошибаться, ',
    'Когда меня рожали, ',
    'Каждый может кинуть камень в волка, ',
    'Нельзя стоять, когда другие работают, ',
    'Иногда, жизнь — это жизнь, ',
 ]
 let ending= [
    'тот потом пожалеет о своем решении.',
    'собственно, тогда я и родился.',
    'но не каждый может кинуть волка в камень.',
    'надо лежать.',
    'а ты в ней — иногда.',
    'бойся не ошибаться.',
 ]
 console.log (begining [2]);
 console.log (begining [0]); 
 console.log (begining [4]);
 console.log (ending [1]);
 console.log (ending [3]); 
 console.log (ending [5]);

