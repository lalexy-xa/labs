import { addTask, makeId, checkAll, getItems } from "./storage.js";
import { makeLiItem, reloadLi } from "./list.js";
import { changeNumItemsAcive } from "./menu.js";


const divInput = document.createElement("div");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "What needs to be done?";

const button = document.createElement("button");
button.innerHTML = "&#9660;";
button.type = "button";

button.addEventListener("click", (event) => {
	checkAll();
	reloadLi();
})

const form = document.createElement("form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	let inpt = event.target.querySelector("input");
	if (inpt.value === "") {
		return;
	}
	addTask({ //добавляет новый элемент в хранилище
		id: makeId(getItems().length),
		active: true,
		value: inpt.value
	});
	inpt.value = "";

	changeNumItemsAcive();//меняет счетчик активных заданий в нижнем меню
	makeLiItem();//вставляет новую li
});

divInput.classList.add("form-inner");
button.classList.add("form-inner__button");
input.classList.add("form-inner__input");
form.classList.add("form-wrapper");

divInput.append(input);
divInput.append(button);
form.append(divInput);

export { form };
