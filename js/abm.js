//scope 
let personas = JSON.parse(localStorage.getItem('personas')) || [];

function agregar() {
    //viene fabrica: me permite llegar al html desde js
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    
    const obj = {
        id: Math.random(),
        nombre: nombre.value,
        apellido: apellido.value
    };

    //valido que exista....

    //agregar dentro de un array
    personas.push(obj);

    //console.log(personas);
    // mostrar();
    TablaPersonas(personas);

    //limpiar los campos
    nombre.value = '';
    apellido.value = '';

    //dejar el foco en nombre
    nombre.focus();

    //guardar en localStorage
    guardarEnLocalStorage('personas',personas)
}

function guardarEnLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function obtenerDeLocalStorage(key) {
    return localStorage.getItem(key);
}

function mostrar() {
    const div = document.getElementById('alumnos');
    
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
/*
    Personas es un array de objetos
*/
function TablaPersonas(personas) {
    let tablaPersona = `<table border=1 width="100%">
        <tr>
            <th>
                Nombre
            </th>
            <th>
                Apellido
            </th>
            <th>
                &nbsp;
            </th>
        </tr>`;
        personas.forEach(persona => {            
            tablaPersona += FilaPersona(persona)
        });

    tablaPersona += '</table>';

    const divPersonas = getDivPersonas()
    divPersonas.innerHTML = tablaPersona;

    //return  tablaPersona;
}

function FilaPersona(persona) {
    const fila = `<tr id=${persona.id}>
        <td>
            ${persona.nombre}
        </td>
        <td>
            ${persona.apellido}
        </td>
        <td>
            <button onclick="elminarPorNodo(${persona.id})">eliminar</button>
            <button onclick="cargarParaEditar(${persona.id})">editar</button>
        </td>
    </tr>`;
    return fila;
}
/*
function eliminar(id) {
    alert(`eliminando ${id}`);

    //quitar del array el id
    personas = personas.filter(p=> p.id !== id);

    //ahora qué?
    limpiarDiv();

    TablaPersonas(personas);
}
*/
function elminarPorNodo(id) {
    if(!confirm('Dese eliminar a la persona?')) {
        return;
    }
    
    const child = document.getElementById(id);
    const parentNode = child.parentNode;    
    parentNode.removeChild(child);

    //quitamos el id de la lista de personas
    personas = personas.filter(p=> p.id !== id);
    guardarEnLocalStorage('personas', personas);
}

function limpiarDiv() {
    const divPersonas = getDivPersonas()
    divPersonas.innerHTML = '';
}
function getDivPersonas() {
    return document.getElementById('alumnos');
}

function cargarParaEditar(id){
    //buscar en la lista personas
    const persona = personas.find(p=> p.id === id);
    
    //actualizo el html con los datos de la pesona
    document.getElementById('personaNombre').value = persona.nombre;
    document.getElementById('personaApellido').value = persona.apellido;
    //actualizo el id 
    document.getElementById('idAActualizar').value = persona.id;
}

function actualizar() {
    const id = document.getElementById('idAActualizar').value;
    //const persona = personas.find(p=> p.id === id);
    const idxPersona = personas.findIndex(p=> p.id === +id);

    //validaciones
    if(!!idxPersona) {
        return;
    }

    const persona = personas[idxPersona];
    //actualizo la persona que busqué en el array
    persona.nombre = document.getElementById('personaNombre').value;
    persona.apellido = document.getElementById('personaApellido').value;

    //actualizo el array
    personas[idxPersona] = persona;
    guardarEnLocalStorage('personas',personas);
}

//cuando carga la pagina invoco a TablaPersonas(personas);
TablaPersonas(personas);
