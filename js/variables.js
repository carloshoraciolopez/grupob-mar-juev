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

/*OPERADORES */
// aritmeticos: +, -, /, * 

// LOGICOS: or (||) and(&&) not (!) xor(^ a nivel de bit)

// binario: 0 y 1
// la cpu solo suma

let aux = 10; // en base 10 

//Como expreso 10 en binario???
// con potencias de 2
// 0 en banrio > 2 x 0 
// 1 es 2 x 1 ^ 0
// 2 es 2 x 1 ^ 1


// 10
// 8 + 2

//.. 256 128 64 32 16 8 4 2 1 0
//                  0 1 0 1 0 0

let aux2 = 20;
//.. 256 128 64 32 16 8 4 2 1 0
//                  1 0 1 0 0 0
//-----------------------------

//.. 256 128 64 32 16 8 4 2 1 0
//                  1 1 1 1 0 0 => 0 + 2 + 4 + 8 + 16 = 30

//sumar aux + aux2 en binario
let xor = aux ^ aux2;
 
console.log('xor',xor);

//ASIGNACION = 

//RELACIONALES siempre me dan un boolean(true|false)
// <, >, >=, <=, !==; == (VALOR), === (TIPO Y VALOR)
let a = 10;
let b = '10';

//si uso == me da true
//si uso === me da false
console.log(a == b);
console.log(a === b);

let c = 20;
let d = a > c;
console.log(d); //false

// Mostrar un mensaje SI a > c, de lo contrario 
// mostrar otro

if ( a > c ) {
    //true
    alert('a es mayor que c');
    console.log('a es mayor que c');
}else {
    //false
    console.log('a es meonr o igual que c');
}

//if(edad > 0 y edad <= 25) 
//TABLA DE VERDAD
//-------------------

let hoy = 'lunes';
let llueve = false;
//si es vieres y llueve => birra y pizza
//usando el and &&
const meQuedoEnCasa = hoy === 'viernes' && llueve === true; //false

//ahora evaluamos  OR
const auxOr = hoy === 'viernes' || llueve === true;

// c1   | c2    |   c1 && c2    | c1 || c2  |   !c1     | !(c1 && c2)
//-------------------------------------------------------------------
// true | true  |   true        |   true    |   false   |   false
// true | false |   false       |   true    |   false   |   true
// false| true  |   false       |   true    |   true    |   true
// false| false |   false       |   false   |   true    |   true


//DADO LA EDAD DETERMINAR EN QUE PLAN DE OSDE PUEDE TENER
let miEdad = 26;
// entre (0 y 25] es neo
// entre (25 y 35] es neo 2
// mas de 35  es MAYOR

//CONDICIONAL if()...else / if()...else if()..else
let plan;
if(miEdad > 0 && miEdad <= 25) {
    plan = 'NEO';
}else if(miEdad > 25 && miEdad <= 35) {
    plan = 'NEO 2';
}else {
    plan = 'MAYOR';
}

console.log(`La edad ${miEdad} van con el plan ${plan}` );

const cuota = 10;
// si es NEO cuota es 10% menor
// si es NEO2 cuota es 10% mas cara
// si es MAYOR cuota es 30% mas cara
switch(plan){
    case 'NEO': {
        console.log(cuota * 0.9);
        break;
    }
    case 'NEO 2': {
        console.log(cuota * 1.1);
        break;
    }
    default:{
        console.log(cuota * 1.3);
        //no es necesario el break
    }
}
