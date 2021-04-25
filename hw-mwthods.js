// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
// и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i]≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.


let filterRangeInPlace = (arr, a, b) => arr.forEach((it, ind) => {
	if (it > a || it < b) {
		arr.splice(ind, 1);
	}
});
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log(arr); // [3, 1]

// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
// alert( arr ); // 8, 5, 2, 1, -10
console.log("----------");

let arr2 = [5, 2, 1, -10, 8];
arr2 = arr2.sort((second, first) => first - second);
console.log(arr2);

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
console.log("----------");

function copySorted(arr) {
	let res = arr.slice(0);
	return res.sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr3); // HTML, JavaScript, CSS (без изменений)

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// 	Во-первых, реализуйте метод calculate(str), который принимает строку типа
// 	"1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
// 	Метод должен понимать плюс + и минус -.
// 	Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// 	Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.
console.log("----------");
function Calculator() {
	this.keys = ["+", "-"];
	this.methods = [
		(a, b) => +a + +b,
		(a, b) => a - b,
	]
	this.calculate = function (str) {
		let expr = str.split(" ");

		if (!isFinite(expr[0]) || !isFinite(expr[2]) || !this.keys.includes(expr[1])) {
			return "Wrong expression";
		}

		return this.methods[this.keys.findIndex(item => item === expr[1])](expr[0], expr[2]);
	}

	this.addMethod = function (name, func) {
		if (!name, !func) {
			console.log("No name or function");
			return;
		}
		if (typeof func !== "function") {
			console.log("Wrong function");
			return;
		}
		if (this.keys.includes(name.trim())) {
			console.log("Already excists");
			return;
		}
		this.keys.push(name.trim());
		this.methods.push(func);
	}
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("***", 5);
powerCalc.addMethod("***");


console.log("2 ** 3:\t", powerCalc.calculate("2 ** 3"));
console.log("2 + 3:\t", powerCalc.calculate("2 + 3"));
console.log("2 - 3:\t", powerCalc.calculate("2 - 3"));
console.log("2 * 3:\t", powerCalc.calculate("2 * 3"));
console.log("6 / 3:\t", powerCalc.calculate("6 / 3"));
console.log("6 *** 3:\t", powerCalc.calculate("6 *** 3"));
console.log("6  ** 3:\t", powerCalc.calculate("6  ** 3"));
console.log("6 +:\t", powerCalc.calculate("6 +"));

// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.
console.log("----------");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names); // Вася, Петя, Маша

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.
console.log("----------");
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped = users1.map(item => {
	return {
		fullName: item.name + " " + item.surname,
		id: item.id,
	}
});
console.log("users:\t", users1);
console.log("usersMapped:\t", usersMapped);

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
console.log("----------");
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };


let arrUsers = [vasya2, petya2, masha2];
// let copy = arrUsers.slice(0);
// console.log("Before sorting copy\n", copy);
// copy.push("add");
// console.log("Before sorting\n", arrUsers); // Спросить про console.log

let sortByAge = (arr) => arr.sort((s, f) => s.age - f.age);

console.log(sortByAge(arrUsers));

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д.,
// с равной вероятностью каждого случая.
console.log("----------");
function shuffle(arr) {
	let copy = arr.slice(0);

	for (let i = 0; i < arr.length; i++) {
		let randIndex = Math.floor(copy.length * Math.random());
		arr[i] = copy[randIndex];
		copy.splice(randIndex, 1);
	}
	return arr;
}
let arrShuf = [1, 2, 3];
console.log(shuffle(arrShuf));
console.log(shuffle(arrShuf));
console.log(shuffle(arrShuf));
console.log(shuffle(arrShuf));
console.log(shuffle(arrShuf));
console.log(shuffle(arrShuf));

// Напишите функцию getAverageAge(users),
// которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
console.log("----------");
let vasyaAv = { name: "Вася", age: 25 };
let petyaAv = { name: "Петя", age: 30 };
let mashaAv = { name: "Маша", age: 28 };

let getAverageAge = (users) => users.reduce((sum, item) => sum + item.age, 0) / users.length;

let arrAvarage = [vasyaAv, petyaAv, mashaAv];
console.log(getAverageAge(arrAvarage));

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
console.log("----------");
function unique(arr) {
	let result = [];
	for (let i of arr) {
		if (!result.includes(i)) {
			result.push(i);
		}
	}
	return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O
