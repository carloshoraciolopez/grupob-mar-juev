const alumnos = ['jorge','cesar','gise','anahí']; //array inicilzado

console.log(alumnos);

alumnos.push('andrea'); //agrega al final

console.log(alumnos);

alumnos.unshift('carlos'); //agrega al principio

console.log(alumnos);
//----------------------------------------------

const ultimo = alumnos.pop(); //quito el ultimo

console.log('saque a', ultimo, 'de la lista', alumnos);

//sacar al primero 
const primero = alumnos.shift();
console.log('saque a', primero, 'de la lista', alumnos);

//agrego
alumnos.push(primero);//agregar al final
alumnos.push(ultimo);//agregar al final

console.log(alumnos);

//VALIDAR FECHAS.
// formato es dd/MM/aaaa
// 32/01/2023 ---> false
// 29/02/2023 ---> depende del año (false)

//¿cuando es bisiesto?
let anioCualquiera = 1989;//???
// 31/04/2023 ---> false (abril tiene 30)
// 31/06/2023 idem 

