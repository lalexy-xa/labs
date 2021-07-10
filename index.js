import { form } from "./input.js";
import { start } from "./storage.js";
import { ul } from "./list.js";
import { menu } from "./menu.js";

start();

const divForm = document.createElement("div");
divForm.classList.add("todo-wrapper");

divForm.append(form);
divForm.append(ul);
divForm.append(menu);

const divshadowWrapperF = document.createElement("div");
const divshadowWrapperS = document.createElement("div");
divshadowWrapperS.append(divForm);
divshadowWrapperF.append(divshadowWrapperS);

divshadowWrapperF.classList.add("todo-shadow-wrapper-first");
divshadowWrapperS.classList.add("todo-shadow-wrapper-second");
document.querySelector("body").append(divshadowWrapperF);