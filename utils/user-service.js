const urlBase = 'https://reqres.in/api';

/*
    /users
*/
async function findUsers(page) {

    // Make a request for a user with a given ID
    /*axios.get(`${urlBase}/users?page=${page}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
    });*/
    
    const response = await axios.get(`${urlBase}/users?page=${page}`);
    console.log(response.data);
    return response;
}