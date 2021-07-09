import { privateKey } from "./key.js";

export const getWeatherByCity = (city) =>
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${privateKey}`)
		.then((data) => data.json());

export const getImg = (icon) => `http://openweathermap.org/img/wn/${icon}.png`;