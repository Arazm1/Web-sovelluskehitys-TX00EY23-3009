'use strict';

const inputCelsius = prompt("Enter temperature in Celsius: ");

const convertedIntoFahrenheit = (inputCelsius * 9/5) + 32;

document.querySelector('#result').innerHTML = inputCelsius + '°C is ' + convertedIntoFahrenheit + ' Fahrenheit';