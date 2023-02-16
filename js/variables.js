/*
 SUMAR DOS NUMEROS Y MOSTRAR EL RESULTADO
*/

//DEFINO UNA VARIABLE
//var es mala palabra (globales)
//let es bueno (local)
//const  (constante)

//inicio
let v1;
let v2;
let res;
//debugger;
v1 = 1;
v2 = 2;
res = v1 + v2;

console.log(res);

//fin

//VARIABLES
//TIPO NUMBER
console.log('v1 es: ',typeof v1);
console.log(typeof v2);
console.log(typeof res);

//TIPO STRING
let nombre = 'carlos';
let edad = 37;
let sexo = 'M';
let soyAlto = true;

// TIPOS OBJETOS
let alumno = {
    dni: 12345789,
    nombre: 'juan',
    edad: edad
};

// mostrar los valores de alumno
console.log('alumno',alumno);