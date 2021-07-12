import { all, active, done } from "./menu.js"
import { STORAGE } from "./constant.js";

export const putStatOnBut = (pr) => {
	switch (pr) {
		case "all":
			all.dataset.pressed = true;
			active.dataset.pressed = false;
			done.dataset.pressed = false;
			localStorage.setItem(STORAGE.PRESSED, "all");
			break;
		case "active":
			all.dataset.pressed = false;
			active.dataset.pressed = true;
			done.dataset.pressed = false;
			localStorage.setItem(STORAGE.PRESSED, "active");
			break;
		case "done":
			all.dataset.pressed = false;
			active.dataset.pressed = false;
			done.dataset.pressed = true;
			localStorage.setItem(STORAGE.PRESSED, "done");
			break;
	}
}