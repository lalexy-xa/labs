import { itemsNumStatus, clearCompl, getItems } from "./storage.js";
import { menuStatus, STORAGE } from "./constant.js";
import { ul } from "./list.js";
import { putStatOnBut } from "./helpFunc.js"

export const menu = document.createElement("div");

const numItemsAcive = document.createElement("button");
numItemsAcive.innerHTML = `${menuStatus.active} items left`;

export const changeNumItemsAcive = () => {
	itemsNumStatus();
	numItemsAcive.innerHTML = `${menuStatus.active} items left`;
}

export const all = document.createElement("button");
all.innerHTML = "all";
all.type = "button";
all.addEventListener("click", () => {
	let liList = ul.querySelectorAll("li");
	for (let i of liList) {
		i.hidden = false;
	}
	localStorage.setItem(STORAGE.PRESSED, "all");
	putStatOnBut("all");
});


export const active = document.createElement("button");
active.innerHTML = "active";
active.type = "button";
active.addEventListener("click", () => {
	let liList = ul.querySelectorAll("li");
	for (let i = 0; i < liList.length; i++) {
		let item = getItems()[i];
		item.active ? liList[i].hidden = false : liList[i].hidden = true;
	}
	localStorage.setItem(STORAGE.PRESSED, "active");
	putStatOnBut("active");
});

export const done = document.createElement("button");
done.innerHTML = "done";
done.type = "button";
done.addEventListener("click", () => {
	let liList = ul.querySelectorAll("li");
	for (let i = 0; i < liList.length; i++) {
		let item = getItems()[i];
		!item.active ? liList[i].hidden = false : liList[i].hidden = true;
	}
	localStorage.setItem(STORAGE.PRESSED, "done");
	putStatOnBut("done");
});

export const clear = document.createElement("button");
clear.innerHTML = "Clear completed";
clear.type = "button";
clear.addEventListener("click", () => {
	clearCompl();
})
clear.hidden = true;

const leftWrapper = document.createElement("div");//обертка для стилей
leftWrapper.classList.add("todo__menu-const-items");

const statDiv = document.createElement("div");//обертка для стилей
statDiv.append(all);
statDiv.append(active);
statDiv.append(done);


all.classList.add("todo__menu-all");
active.classList.add("todo__menu-active");
done.classList.add("todo__menu-done");

menu.classList.add("todo__menu");
statDiv.classList.add("todo__menu-filter");
numItemsAcive.classList.add("todo__num-active");
clear.classList.add("todo__menu-clear");

leftWrapper.append(numItemsAcive);
leftWrapper.append(statDiv);

menu.append(leftWrapper);
menu.append(clear);
