"use strict"
// 	1. С помощью свойства __proto__ задайте прототипы так,
// чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head.
// Например, pockets.pen должно возвращать значение 3(найденное в table),
// а bed.glasses – значение 1(найденное в head).
// 	2. Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses
// или через head.glasses ? При необходимости составьте цепочки поиска и сравните их.
// 		через head.glasses быстрее

let head = {
	glasses: 1
};

let table = {
	__proto__: head,
	pen: 3
};

let bed = {
	__proto__: table,
	sheet: 1,
	pillow: 2
};

let pockets = {
	__proto__: bed,
	money: 2000
};

console.log(pockets.glasses);

// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
// Ответ: rabbit:
let animal = {
	eat() {
		this.full = true;
	}
};

let rabbit = {
	__proto__: animal
};

rabbit.eat();
console.log(rabbit); // добавилось
console.log(animal);// не добавилось

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
	stomach: [],

	eat(food) {
		// мой вариант исправления:
		if (!this.hasOwnProperty("stomach")) {
			this.stomach = [];
		}
		//
		this.stomach.push(food);
	},

};

let speedy = {
	__proto__: hamster,

};

let lazy = {
	__proto__: hamster,

};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("banana");
lazy.eat("bread");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple


//Прошлое занятия:

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать
// user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {

	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: 'Вася',

	loginOk() {
		console.log(`${this.name} logged in`);
	},

	loginFail() {
		console.log(`${this.name} failed to log in`);
	},

};
// изменения тут:
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//  /\
// /  \
//  ||
//привязали контекст к функции, чтобы находило name в user

// Объект user был изменён.
// Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже,
// чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
function askPassword2(ok, fail) {
	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
}

let user2 = {
	name: 'John',

	login(result) {
		console.log(this.name + (result ? ' logged in' : ' failed to log in'));
	}
};
// изменения тут:
askPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false)); // ?


