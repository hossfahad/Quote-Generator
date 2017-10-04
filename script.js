var quotes = [
'Character is doing the right thing when nobody’s looking. — J.C. Watts',
'Not all those who wander are lost. — J.R. R. Tolkein',
'There is no substitute for hard work. — Thomas Edison',
'Both optimists and pessimists contribute to our society. The optimist invents the airplane, and the pessimist the parachute. — Gil Stein',
'The distance is nothing; it’s only the first step that is difficult. — Marquise du Deffand',
'If you don’t like something change it. If you can’t change it, change your attitude. Don’t complain. — Maya Angelou',
'Wise men talk because they have something to say; fools, because they have to say something. — Plato'
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

