import { getWeatherByCity, getImg } from "./download.js";
let city = prompt("Enter city", "Kharkiv");
getWeatherByCity(city).then((data) => {
	console.log(data);

	let city = document.querySelector("h1");
	city.innerHTML = data.name;

	let img = document.querySelector(".img");
	img.append(document.createElement("img"));
	img.querySelector("img").src = getImg(data.weather[0].icon);

	let mainTemp = document.querySelector(".main-temp");
	mainTemp.innerHTML = `${(data.main.temp - 273.15).toFixed(0)} &deg;С`;
	console.log(mainTemp);
	let weather = document.querySelector(".weather");

	let temp = weather.querySelector(".temp .weather__ind");

	temp.innerHTML = (data.main.temp_min - 273.15).toFixed(0) +
		"/" + (data.main.temp_max - 273.15).toFixed(0) + " &deg;С";

	let cloudly = weather.querySelector(".cloud .weather__ind");
	cloudly.innerHTML = `${data.clouds.all}%`;

	let windy = weather.querySelector(".wind .weather__ind");
	windy.innerHTML = `${data.wind.speed} m/c`;

	let rain = weather.querySelector(".rain .weather__ind");
	rain.innerHTML = `${data.main.humidity}%`;

})
// let pr = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		reject("Whoops!");
// 	}, 1000);
// }).catch((a) => alert(a));;

// pr.then((a) => alert(a));
