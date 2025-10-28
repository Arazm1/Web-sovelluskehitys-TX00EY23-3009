'use strict';

const x1 = prompt("Give coordinate (x1): ");
const y1 = prompt("Give coordinate (y1): ");
const x2 = prompt("Give coordinate (x2): ");
const y2 = prompt("Give coordinate (y2): ");

const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

document.getElementById('result').innerHTML = 'Euclidean distance: ' + distance;