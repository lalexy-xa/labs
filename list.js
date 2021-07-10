import { getItems, deleteItem, Change } from "./storage.js";
import { changeNumItemsAcive } from "./menu.js";
import { putStatOnBut } from "./helpFunc.js"

const ul = document.createElement("ul");

const makeListBase = () => {
	const li = document.createElement("li");
	li.classList.add("todo__item");

	const input = document.createElement("input");
	input.type = "text";
	input.classList.add("todo__item-input");

	const check = document.createElement("input");
	check.classList.add("todo__item-check");
	check.type = "checkbox";
	check.addEventListener("change", (event) => {
		let li = event.target.closest("li");
		Change(li);
	});

	const checkItem = document.createElement("div");//обертка для стилей
	checkItem.classList.add("todo__check-item")
	const label = document.createElement("label");

	checkItem.append(check);
	checkItem.append(label);

	const delBut = document.createElement("button");
	delBut.innerHTML = "X";
	delBut.classList.add("todo__item-delBut");
	delBut.type = "button";
	delBut.addEventListener("click", (event) => {
		deleteItem(event.target.closest("li"));
	});

	li.classList.add("todo__item");
	li.append(checkItem);
	li.append(input);
	li.append(delBut);
	return li;
}

export const makeLiItem = () => {
	let li = makeListBase();
	let input = li.querySelector("input[type='text']");

	input.value = getItems()[getItems().length - 1].value;

	li.dataset.id = getItems()[getItems().length - 1].id;

	let check = li.querySelector("input[type='checkbox']");
	check.id = li.dataset.id;
	li.querySelector("label").setAttribute("for", check.id);

	ul.append(li);
	return ul;
}

export const reloadLi = () => {
	ul.innerHTML = "";
	getItems().forEach(element => {
		let li = makeListBase();
		let input = li.querySelector("input[type='text']");
		let check = li.querySelector("input[type='checkbox']");

		input.value = element.value;
		check.checked = !element.active;
		li.dataset.id = element.id;
		li.dataset.checked = !element.active;//использую для стилей
		check.id = li.dataset.id;//связываю label с чекбоксом
		li.querySelector("label").setAttribute("for", check.id);

		if (localStorage.getItem("pressedItem") === "active") {
			!element.active ? li.hidden = true : li.hidden = false;
			putStatOnBut("active");
		} else {
			if (localStorage.getItem("pressedItem") === "done") {
				element.active ? li.hidden = true : li.hidden = false;
				putStatOnBut("done");
			}
			else {
				putStatOnBut("all");
			}
		}
		ul.append(li);
	});
	changeNumItemsAcive();//так как функция используется в кнопках, кот меняют кол-во акт эл (clear, ведылить все)
}

ul.classList.add("todo__list");
export { ul };