const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

axios.get(url).then(res => {
    if (res.status === 200) {
        console.log(res.data);
    }
})