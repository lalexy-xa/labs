// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
	name: "John",
	years: 30
};
// ваш код должен быть с левой стороны:
// ... = user

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Создайте функцию topSalary(salaries),
// которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S.Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ / значение.
let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function topSalary(salaries) {
	let name = null;
	let max = -1;
	for (let [key, value] of Object.entries(salaries)) {
		if (value > max) {
			[name, max] = [key, value];
		}
	}
	return name;
	//вар без деструктурирования:
	// return Object.entries(salaries).reduce((max, item) => item[1] > max[1] ? item : max, [null, 0])[0];
}

console.log(topSalary(salaries));
