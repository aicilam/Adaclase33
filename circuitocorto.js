const añoActual = prompt("Por favor, escribe año actual");
const anioNacimiento = prompt("Por favor, escribe tu año de nacimiento");
const mesNacimiento = prompt("Por favor, escribe tu mes de nacimiento");
const mesActual = prompt("Por favor, escribe el mes actual");
let edad = añoActual - anioNacimiento
mesActual <= mesNacimiento && console.log(`Tu edad es ${edad - 1}`)
mesActual > mesNacimiento && console.log(`Tu edad es  ${edad}`)
