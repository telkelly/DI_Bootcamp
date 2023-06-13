const fs = require('fs').promises;
// try {
//     const data = fs.readFileSync('info', 'utf-8');

//     console.log(data);
// } catch (err){
//     console.log('after log:', err);
// }

// fs.readFile('info', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// console.log('the file read');

// const data = [
//   { id: 1, name: "iphone", price: 1499 },
//   { id: 2, name: "ipad", price: 3499 },
//   { id: 3, name: "iwatch", price: 1090 },
// ];

// fs.writeFile('products.txt', JSON.stringify(data), 'utf-8', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.readFile('products.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.parse(data));
//     }
// })

// fs.appendFile('hello.txt', '7890', 'utf-8', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.copyFile('hello.txt', 'hello2.txt', err => {
//     if (err) {
//       console.log(err);
//     }
// })

// fs.mkdir('data', err => {
//     if (err) {
//       console.log(err);
//     }
// })

// fs.readdir('./data', (err, files) => {
//     if (err) {
//       console.log(err);
//     } else {
//         console.log(files);
//     }
// })

// fs.unlink('./data/hello.txt', err => {
//     if (err) {
//       console.log(err);
//     }
// })

const start = async () => {
    const data = await fs.readFile('./data/hello2.txt', 'utf-8')
    console.log(data);
}

start()

