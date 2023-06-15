const fs = require('fs');

fs.readFile('exercise1.txt', 'utf-8', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

fs.writeFile('exercise2.txt', 'Xorosho snasibo kak tvoi?', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('message sent');
    }
})

const newContent = "Hey guys what are talking here about?";

fs.appendFile('exercise2.txt', newContent, (e) =>{
    if (e) {
        console.log(e);
    } else {
        console.log('message updated');
    }
})

fs.unlink('exercise2.txt', (err) => {
     if (err) {
       console.log(e);
     } else {
       console.log("message deleted");
     }
})