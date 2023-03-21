function ListadoUsuario (props) { //propiedad | variable | parametro

    const usuarios = props.data;

    return (`
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    ${usuarios.map(u => RowUsuario(u)).join('') }
                </tbody>
            </table>
            <!--paginador-->
            ${Pagination(props)}
        `);
}

function Pagination(props) {
    const {page,per_page,total_pages,total} = props;

    return `
        <nav aria-label="..." class="d-flex justify-content-center">
            <ul class="pagination">
                <li class="page-item ${page === 1 ? 'disabled': '' }">
                    <a class="page-link cursor" onclick="buscarUsuarios(${page - 1})">Previous</a>
                </li>
                ${Page(total_pages, page)}
                <li class="page-item ${page === total_pages ? 'disabled': '' }">
                    <a class="page-link cursor" onclick="buscarUsuarios(${page+1})">Next</a>
                </li>
            </ul>
        </nav>
    `
}
function Page(total_page, page) {
    let pages = '';
    for(let i=0;i<total_page;i++) {
        pages +=`<li class="page-item ${page === (i+1) ? 'active' : ''}" aria-current="page">
                    <a class="page-link cursor" onclick="buscarUsuarios(${i+1})">${i+1}</a>
                </li>`
    }
    return pages;
}

function RowUsuario(usuario) {
    return `<tr>
        <th scope="row">${usuario.id}</th>
        <td>${usuario.email}</td>
        <td>${usuario.first_name}</td>
        <td>${usuario.last_name}</td>
        <td>
            <img src='${usuario.avatar}' onclick="UserDetails(${usuario.id})"/>
        </td>
    </tr>`;
}
