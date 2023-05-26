// exercise-1
function compareToTen(num) {
  let promise = new Promise((res, rej) => {
    if (num < 10) {
      res("Resolved");
    } else {
      rej("Rejected");
    }
  });
  return promise;
}

compareToTen(15)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

compareToTen(8)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//exercise-2

let promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('Success')
    }, 4000)
})

promise.then(res => console.log(res))

const myPromise = Promise.resolve(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  })
);

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Ooops something went wrong");
  });


// exercise-3

const resolvePromise = Promise.resolve(3);

resolvePromise.then(res => console.log(res)).catch(err => console.log('Ops'))

const rejectedPromise = Promise.reject('Boo!');

rejectedPromise.then(res => console.log(res)).catch(res => console.log("Opps"))