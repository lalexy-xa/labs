// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика,
//можно воспользоваться как замыканием, так и свойством функции.
//Или сделать два варианта решения: и так, и так.


function makeCounter() {
	let count = 0;

	function counter() {
		return count++;
	};
	counter.set = (value) => {  //Как объявить внутри функции? СПРОСИТЬ???
		count = value;
	};

	counter.decrease = () => {
		--count;
	};

	return counter;
}
let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter());

// Сумма с произвольным количеством скобок

let sum = function mySum(a) {

	let add = (b) => {
		return mySum(a + b);

	};

	add[Symbol.toPrimitive] = (hint) => {
		return +a;
	}
	return add;
};

console.log(sum(4)(5)(1) == 10);
console.log(sum(4)(5)(1)(-7)(0)(3)); //Почему тип все равно не примитив??? (СПРОСИТЬ)
