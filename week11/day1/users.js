function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url).then(res=>res.json()).then(data => console.log(data))
}



module.exports = {
    fetchUsers
}