let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию. 

console.log("abc order with rec");

function printList(list) {
	let value = list["value"];
	let next = list["next"];
	if (next) {
		console.log(value);
		printList(next);
	} else {
		console.log(value);
	}
}


printList(list);

console.log("abc order no rec");

function printListNoRec(list) {
	let now = list;
	while (now) {
		console.log(now.value);
		now = now["next"];
	}
}


// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

printListNoRec(list);

console.log("back order with rec");

function printListBack(list) {
	let value = list["value"];
	let next = list["next"];
	if (next) {
		printListBack(next);
		console.log(value);
	} else {
		console.log(value);
	}
}


printListBack(list);

console.log("back order no rec");

function printListNoRecBack(list) {
	let next = list["next"];
	let nextList = [];
	for (let i = 0; next;) {
		nextList[i] = next;
		next = next["next"];
		i++;
	}
	for (let i = nextList.length - 1; i >= 0; i--) {
		console.log(nextList[i]["value"]);
	}
	console.log(list["value"]);
}

printListNoRecBack(list);