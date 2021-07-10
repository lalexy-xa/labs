import { reloadLi } from "./list.js";
import { allChecked, menuStatus } from "./constant.js";
import { changeNumItemsAcive, clear } from "./menu.js"
export let st = localStorage;
st.setItem("pressedButton", "all");

export const makeId = (random) => Math.random() * new Date() + random;

export const start = () => {
	if (!st.getItem("list")) {
		st.setItem("list", JSON.stringify([]));
	} else {
		reloadLi();
	}
}

export const addTask = (item) => {
	let list = JSON.parse(st.getItem("list"));
	let newList = [...list, item];
	st.setItem("list", JSON.stringify(newList));
}

export const getItems = () => {
	return JSON.parse(st.getItem("list"));

}

export const deleteItem = (li) => {
	let id = li.dataset.id;
	let list = JSON.parse(st.getItem("list"));
	list = list.filter((item) => item.id !== +id);
	st.setItem("list", JSON.stringify(list));
	reloadLi();
}

export const Change = (li) => {
	let id = li.dataset.id;
	let list = JSON.parse(st.getItem("list"));
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
	st.setItem("list", JSON.stringify(list));

	changeNumItemsAcive();
}

export const isChecked = () => {
	allChecked.checked = true;
	getItems().forEach((it) => {
		if (it.active === true) {
			allChecked.checked = false;
		}
	});
}

export const itemsNumStatus = () => {
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

export const checkAll = () => {
	isChecked();
	let list = getItems();
	list.forEach((it) => {
		it.active = allChecked.checked;
	});
	st.setItem("list", JSON.stringify(list));
	changeNumItemsAcive();
}

export const clearCompl = () => {
	let list = getItems();
	list = list.filter((it) => it.active);
	console.log(list);
	st.setItem("list", JSON.stringify(list));
	itemsNumStatus();
	reloadLi();
}


export const findItemById = (id) => {
	let idIem = null;
	getItems().forEach((it) => {
		it.id === id ? idIem = it : it;
	});
	return idIem;
}