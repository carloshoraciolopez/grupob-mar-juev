//scope 
const personas = [];

function agregar() {
    //viene fabrica: me permite llegar al html desde js
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    
    const obj = {
        nombre: nombre,
        apellido: apellido
    };

    //valido que exista....

    //agregar dentro de un array
    personas.push(obj);

    //console.log(personas);
    mostrar();
}

function mostrar() {
    const div = document.getElementById('alumnos');
    
    div.innerHTML = JSON.stringify(personas);
}