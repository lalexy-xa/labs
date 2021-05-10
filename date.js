// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
	let interval = Date.now() - date.getTime();
	switch (true) {
		case interval < 1000:
			return ("прямо сейчас");
		case interval < 1000 * 60:
			return (`${interval / 1000} сек. назад`);
		case interval < 1000 * 60 * 60:
			return (`${interval / 1000 / 60} мин. назад`);
		default:
			return (("0" + date.getDate() % 100).slice(-2)
				+ "." + ("0" + (date.getMonth() + 1)).slice(-2)
				+ "." + ("0" + date.getFullYear() % 1000).slice(-2)
				+ " " + ("0" + date.getHours()).slice(-2)
				+ ":" + ("0" + date.getMinutes()).slice(-2));
	}
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000)));//"30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));// "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата
console.log(formatDate(new Date(2001, 0, 1, 1, 1)));//01.01.01 01:01
console.log(formatDate(new Date(2010, 9, 10, 10, 10)));//10.10.10 10:10