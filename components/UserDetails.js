
async function UserDetails(id) {
    const urlBase = 'https://reqres.in/api';
    //hago la busaqueda al api
    debugger;
    const response = await axios.get(`${urlBase}/users/${id}`);
    console.log(response.data);


    document.getElementById('btnModal').click()
    
    document.getElementById('modalImg').src = response.data.data.avatar;
}