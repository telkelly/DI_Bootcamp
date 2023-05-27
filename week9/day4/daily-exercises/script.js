// exercise-1
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

// Promise.all waits till all promises will fullfilled or rejected and then i console array of promises if it isn't rejected it gives me the response
// i recieved this output cause promise one already resolved with value 3
// promise2 has value only 42 and promise 3 has setTimeOut with 3 sec delay and value foo
// so after 3 sec all promises are going to be resolved

// exercise-2

