// Вызвать alert
// Создайте страницу, которая отобразит сообщение «Я JavaScript!».
// Покажите сообщение с помощью внешнего скрипта

alert("Я JavaScript!(2.0)");

// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let admin;
let name;

name = "Джон";
admin = name;
alert(admin);

// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

let Earth;
let currentVisitorName;

// Шаблонные строки
// важность: 5
// Что выведет этот скрипт?

// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // ?

let name2 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name2"}` ); // hello name2

alert( `hello ${name2}` ); // hello Ilya
