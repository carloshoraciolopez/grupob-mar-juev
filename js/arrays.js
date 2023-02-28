const alumnos = ['jorge','cesar','anahí' ,'gise','anahí']; //array inicilzado

//en que indice esta gise?
const busqueda = 'gise';
let idx = -1;
for(let i=0;idx === -1 && i<alumnos.length;i++) {
    if(busqueda === alumnos[i]) {
        idx = i;//-1 al i
    }
}

//alt  + 96 `${variables}`
console.log(`${busqueda} está en ${idx}`);

//METODOS DE ARRAYS
idx = alumnos.lastIndexOf('anahí');
console.log(idx)

idx = alumnos.indexOf('anahí');
console.log(idx)

const personas = [
    {
        id: 1,
        name:'a'
    },
    {
        id: 2,
        name:'b'
    },
    {
        id: 3,
        name:'c'
    }
] ;

//Arrow function
const idxP = personas.findIndex(aux => aux.id === 2);
console.log('2', idxP);

//FUNCIONES EN JS
// funcion tiene dos parametros,
// no realiza lógica
// a=1  b=1  > 1 o N veces --> 2
let xyz;
function sumar(a,b) {
    //aca
    return a + b;
}

//aca 

//funcion puras / impuras
function sumaNoPura(a,b) {
    ///aca
    return a + b + Math.random(); //viene de fabrica
}

//funciones sin parametros
function saludar() {
    alert("hola");
}

//invoca a una funcion??
saludar();

//invoco y obtengo resultado
const suma = sumar(10,30);

//scope de una variable

function validarFecha(dia,mes,anio) {
    //aca va la magia de uds!!!
    const esDiaValido = validarDia(dia);
    const esMesValido = validarMes(mes);
    const esAnioValido = validarAnio(anio);
    const esBisiesto = validarBisiesto(anio);

}

function validarDia(aux) {
    return dia >= 1 && dia <= 31;
}

