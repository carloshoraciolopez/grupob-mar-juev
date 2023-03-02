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
    const div = document.getElementById('alumnos'); //Parent
    
    div.innerHTML = '';

    //for of
    for(let item of personas) {
        //crear el elemento 
        const h = document.createElement('h1');
        h.textContent = `${item.nombre} ${item.apellido}`;
        
        //agregar al nodo padre
        div.appendChild(h);
    }
    //personas.forEach(x => div.innerHTML +=  x.nombre + ' ' + x.apellido + '<br>');
}