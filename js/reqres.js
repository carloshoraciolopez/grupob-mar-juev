/*SERVICIOS PARA EL RECURSO /USER */
const urlBase = 'https://reqres.in/api'

/*
obtiene los de /users/id
*/
async function get(id) {
    const urlEndpoint = `${urlBase}/users/${id}`;

    //funcion async
    const response = await fetch(urlEndpoint); 

    const jsonResponse = await response.json();

    UserCard(jsonResponse);
}

const UserCard = (user) => {
    const html = `
        <label>${user.data.first_name}</label>
        <label>${user.data.last_name}</label>
    `;
    document.getElementById('users').innerHTML = html;
}

function findUserCallback() {
    get(2);
}

//agregar la funcion de manera dinamica
const btn = document.getElementById('btnFindUsers');
btn.addEventListener('click', findUserCallback);
