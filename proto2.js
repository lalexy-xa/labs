"use strict"
// Добавить функциям метод "f.defer(ms)"
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:
Function.prototype.defer = function (ms) {
	setTimeout(() => this(), ms);
}

function f() {
	console.log("Hello!");
}

f.defer(1000);

// Добавьте функциям декорирующий метод "defer()"
// Добавьте всем функциям в прототип метод defer(ms),
// который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:

Function.prototype.defer2 = function (ms) {
	let wrapper = (...args) => {
		setTimeout(() => this(...args), ms);
	}
	return wrapper;
}

function f2(a, b) {
	console.log(a + b);
}

f2.defer2(1000)(1, 2);


