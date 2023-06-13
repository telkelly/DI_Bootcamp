// const getX = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//           return 2;
//         }, 1000);
//     })
// };

// const getY = () => {
//   return 3;
// };

// const getXY = () => {
//     //   getX((x) => {
//     //     let y = getY();
//     //     return x + y;
//     //   });
//     let x = getX();
//     x.then(res => {
//         let y = getY();
//         return res + y;
//     });
// }
// console.log(getXY());

// new Promise()
// async/await function

// 1. pennding
// 2. fullfiled - resolve
// 3. fullfiled - reject

// const p = new Promise((resolve, reject) => {
//     reject("reject");
// })

// console.log(p);

// const flip = () => {
//     const coin = Math.floor(Math.random() * 3);
//     return (coin < 2) ? (coin == 2) ? 'head' : 'tail' : 'side';
// }

// const flipCoin = new Promise((res, rej) => {
//     const flipResult = flip();
//     let obj;
//     if (flipResult == 'head' || flipResult == 'tail') {
//         obj = {
//             result: flipResult
//         }
//     } else {
//         rej(JSON.stringify(obj));
//     }
// })

// console.log(flipCoin);

// // flipCoin.then((result) => {
// //   console.log('resolve=>',result); // get a value from promise
// // }).catch((error) => {
// //     console.log('reject=>',error.message);
// // })

// flipCoin
//   .then((result) => {
//     return console.log(JSON.parse(result))
//   }).then((result) => {
//       console.log(result);
//   })
//   .catch((error) => {
//     console.log("reject=>", error.message);
//   }).finally(()=>{
//       console.log('after');
//   })

// function testNum(number) {
//     return number;
// }

// const test = new Promise((res, rej) => {
//     const result = testNum(15);

//     if (result <= 10) {
//         console.log(res, 'number is less than 10, success');
//     } else {
//         console.log(rej, "number is greater or equal to 10, error");
//     }
// })

// test

// const testNum = (num) => {
//     return new Promise((res, rej) => {
//         if (num < 10) {
//             res(num + ' is less than 10')
//         } else {
//             rej(num + ' is greater or equal')
//         }
//     })
// }

// testNum(15).then(res => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const pose = document.getElementById('pose');

fetch("https://zivuch.github.io/yogaapi.json")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);
      data.forEach(e => {
          let newImg = document.createElement('img');
          let newH3 = document.createElement('h3');
          newImg.setAttribute('src', e.img_url)
          newH3.innerText = e.english_name;
          pose.appendChild(newImg);
          pose.appendChild(newH3);
      });
    }).catch(e => {
        console.log(e);
    })
