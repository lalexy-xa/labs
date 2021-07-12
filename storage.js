import { reloadLi } from "./list.js";
import { allChecked, menuStatus, STORAGE } from "./constant.js";
import { changeNumItemsAcive, clear } from "./menu.js"
import { putStatOnBut } from "./helpFunc.js";


export let st = localStorage;

export const makeId = (length) => Math.random() * new Date() + length;

export const start = () => {
	!st.getItem(STORAGE.LIST) ? st.setItem(STORAGE.LIST, JSON.stringify([])) : reloadLi();
	if (st.getItem(STORAGE.PRESSED)) {
		putStatOnBut(st.getItem(STORAGE.PRESSED));
	} else {
		st.setItem(STORAGE.PRESSED, "all");
	}
}

export const addTask = (item) => {//добав эл в хранилище
	let list = JSON.parse(st.getItem(STORAGE.LIST));
	let newList = [...list, item];
	st.setItem(STORAGE.LIST, JSON.stringify(newList));
}

export const getItems = () => {//возвращает эл из хранилища
	return JSON.parse(st.getItem(STORAGE.LIST));
}

export const deleteItem = (li) => {//уд элемет в хранилище
	let id = li.dataset.id;
	let list = JSON.parse(st.getItem(STORAGE.LIST));
	list = list.filter((item) => item.id !== +id);
	st.setItem(STORAGE.LIST, JSON.stringify(list));
	reloadLi();
}

export const Change = (li) => {//меняет статус элемента
	let id = li.dataset.id;
	let list = JSON.parse(st.getItem(STORAGE.LIST));
	list.forEach(item => {
		if (item.id === +id) {
			item.active = !item.active;
			if (!item.active) {
				li.dataset.checked = true;
			} else {
				li.dataset.checked = false;
			}
		}
	});
	//чтобы удалять из отображения не соответсвующие после изменения статуса задания
	if (li.dataset.checked === "true") {
		st.getItem(STORAGE.PRESSED) === "active" ? li.hidden = true : li.hidden = false;
	} else {
		st.getItem(STORAGE.PRESSED) === "done" ? li.hidden = true : li.hidden = false;
	}
	st.setItem(STORAGE.LIST, JSON.stringify(list));

	changeNumItemsAcive();
}

export const isChecked = () => {//проверяет все ли задания выполнены, нужен для след функции
	allChecked.checked = true;
	getItems().forEach((it) => {
		if (it.active === true) {
			allChecked.checked = false;
		}
	});
}

export const checkAll = () => {//снимаеи и добовляет выделения
	isChecked();
	let list = getItems();
	list.forEach((it) => {
		it.active = allChecked.checked;
	});
	st.setItem(STORAGE.LIST, JSON.stringify(list));
	changeNumItemsAcive();
}


export const itemsNumStatus = () => {//меняет статусы в константе и скрывает/показывает кнопку очистить
	menuStatus.active = 0;
	menuStatus.done = 0;
	menuStatus.all = getItems().length;
	getItems().forEach((it) => {
		it.active ? menuStatus.active++ : menuStatus.done++;
	});
	if (menuStatus.done > 0) {
		clear.hidden = false;
	} else {
		clear.hidden = true;
	}
}

export const clearCompl = () => {//удаляет законченные задания и обновляет список
	let list = getItems();
	list = list.filter((it) => it.active);
	console.log(list);
	st.setItem(STORAGE.LIST, JSON.stringify(list));
	itemsNumStatus();
	reloadLi();
}


