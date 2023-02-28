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
let anioCualquiera = '2023';//???
// 31/04/2023 ---> false (abril tiene 30)
// 31/06/2023 idem 

// 2023  NO ES BISIESTO
const esPor4 = anioCualquiera % 4 === 0;
const noPor100 = ! (anioCualquiera % 100 === 0);
const esPor400 = anioCualquiera % 400 === 0;

