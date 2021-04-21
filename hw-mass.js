// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
	let mass = [];
	let sum = 0;
	do {
		let massElemm = prompt("Enter a number", "");
		if (isNaN(massElemm) || massElemm === "" || massElemm === null) {
			break;
		} else {
			mass.push(massElemm);
			sum += +massElemm;
		}
	} while (true)

	return sum;
}

console.log(sumInput());
console.log("---------");

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
//Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

function getMaxSubSum(arr) {
	let maxSum = 0;
	let subSumm = 0
	for (let i = arr.length - 1; i >= 0; i--) {
		subSumm = arr[i] + subSumm;
		if (subSumm <= 0) {
			subSumm = 0;
			continue;
		}
		if (subSumm > maxSum) {
			maxSum = subSumm;
		}
	}
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
console.log(getMaxSubSum([]));
