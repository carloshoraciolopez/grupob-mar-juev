//inicio de la carga de nuestrso componentes
function render() {

    //poder invocar a el componente=funcion
    
    //const html = ListadoUsuario({});
    
    //tomar el resultado y "dibujar" en el div con id=userList
    //inyectar('userList',html);
}

function inyectar(key, data) {
    document.getElementById(key).innerHTML = data;
}

async function callbackClick  () {
    const listado = await findUsers(1);

    const html = ListadoUsuario(listado.data);
    
    //tomar el resultado y "dibujar" en el div con id=userList
    inyectar('userList',html);
}

//asociar al boton el evento click
document
    .getElementById('btnFindUsers')
    .addEventListener('click',callbackClick);

render();