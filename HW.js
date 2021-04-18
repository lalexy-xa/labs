
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
//Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}
let sum = 0;
for (let key in salaries) {
	sum = sum + salaries[key];
}
console.log(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "number") {
			obj[key] *= 2;
		}
	}
	return null;
}

let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

multiplyNumeric(menu);
console.log(menu);

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
	read() {
		this.num1 = +prompt("Enter number 1", "");
		this.num2 = +prompt("Enter number 2", "");
	},
	sum() {
		return this.num1 + this.num2;
	},
	mul() {
		return this.num1 * this.num2;
	},
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Это ladder(лестница) – объект, который позволяет подниматься вверх и спускаться:
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке,
// например так: ladder.up().up().down().showStep();

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this; //изменение
	},
	down() {
		this.step--;
		return this;//изменение
	},
	showStep: function () { // показывает текущую ступеньку
		alert(this.step);
		return this;//изменение
	}
};
ladder.up().up().down().showStep(); // 1
ladder.up().up().up().up().down().showStep();