const fs = require('fs');

fs.readFile('exercise1.txt', 'utf-8', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})