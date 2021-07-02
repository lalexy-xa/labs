// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
let tree = document.querySelector(".tree");

tree.addEventListener("click", (event) => {
	if (event.target.tagName === "H6") {
		for (let i of event.target.closest("li").querySelectorAll("ul")) {
			i.hidden = !i.hidden;
		}
	}
});

// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type:

let table = document.querySelector("#grid");
let str = table.querySelectorAll("tbody tr");
table.addEventListener("click", (event) => {
	let numCol;
	if (event.target.tagName === "TH") {
		numCol = event.target.dataset.type === "number" ? 0 : 1;
		let mass = [];
		for (let i of str) {
			mass.push(i);
		}
		mass.sort((a, b) => {
			if (a.children[numCol].textContent > b.children[numCol].textContent) return 1; // если первое значение больше второго
			if (a.children[numCol].textContent === b.children[numCol].textContent) return 0; // если равны
			if (a.children[numCol].textContent < b.children[numCol].textContent) return -1;
		})
		let body = table.querySelector("tbody");
		body.innerHTML = "";
		for (i of mass) {
			body.append(i);
		}
	}
});


// Напишите JS-код, реализующий поведение «подсказка».
// При наведении мыши на элемент с атрибутом data-tooltip,
// над ним должна показываться подсказка и скрываться при переходе на другой элемент.
let message = document.createElement("div");
document.addEventListener("mouseover", (event) => {
	let button = event.target;
	if (!button.dataset.tooltip) {
		message.hidden = true;
		return;
	};
	message.hidden = false;
	let text = button.dataset.tooltip;
	message.innerHTML = text;
	button.append(message);
	message.style.cssText = `
		position: fixed;
		background-color: white;
		padding: 10px;
		border: 1px solid rgba(26, 129, 208, 0.2);
		border-radius: 10px;
		box-shadow: 4px 4px 8px 0px rgba(26, 129, 208, 0.2);
`;
	let Position = button.getBoundingClientRect();
	message.style.top = (Position.top - 5 - message.offsetHeight) + "px";
	message.style.left = (Position.left - 5) + "px";

})



