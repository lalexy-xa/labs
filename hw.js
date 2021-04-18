// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max),
// которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
	return min + (max - min) * Math.random();
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log("________________");

// Напишите функцию randomInteger(min, max),
// которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
function randomInteger(min, max) {
	return Math.round(min + (max - min) * Math.random());
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log("________________");


// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));
console.log("________________");

// Напишите функцию checkSpam(str), возвращающую true,
// если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
	str = str.toLowerCase();
	return (str.includes("viagra") || str.includes("xxx")) ? true : false;
}

console.log("buy ViAgRA now", checkSpam('buy ViAgRA now'));
console.log('free xxxxx', checkSpam('free xxxxx'));
console.log("innocent rabbit", checkSpam('innocent rabbit'));
console.log("________________");

// Создайте функцию truncate(str, maxlength),
// которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка,
// если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
	if (str.length <= maxlength) {
		return str;
	}
	return `${str.slice(0, maxlength - 1)}\u2026`;
}

console.log("Вот, что мне хотелось бы сказать на эту тему:", 20, "\t",
	truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20).length);
console.log("Всем привет!", 20, "\t", truncate("Всем привет!", 20));
console.log("Всем привет!", 3, "\t", truncate("Всем привет!", 3));
console.log("________________");

// Есть стоимость в виде строки "$120".
// То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str),
// которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
	return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));