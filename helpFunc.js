import { all, active, done } from "./menu.js"

export const putStatOnBut = (pr) => {
	switch (pr) {
		case "all":
			all.dataset.pressed = true;
			active.dataset.pressed = false;
			done.dataset.pressed = false;
			break;
		case "active":
			all.dataset.pressed = false;
			active.dataset.pressed = true;
			done.dataset.pressed = false;
			break;
		case "done":
			all.dataset.pressed = false;
			active.dataset.pressed = false;
			done.dataset.pressed = true;
			break;
	}
}