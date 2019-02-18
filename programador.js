// Importar modulo Later.js:
const later = require('later');

// Usar zona horaria local:
later.date.localTime();

// Crear planificación para todos los dias a las 18:00
const hora1 = later.parse.text('at 07:00');
const hora2 = later.parse.text('at 18:00');

// Crear un temporizador que escriba indefinidamente "hola"
// en los instantes planificados anteriormente:
later.setInterval(() => console.log('hola',hora1), termostato.indicarTemperaturaIdeal(22));
//setInterval(Code,milisec)
//() => {crear un funtion temporada}


class Programador {

}