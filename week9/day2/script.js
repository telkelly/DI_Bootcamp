// exercise-1
function compareToTen(num) {
  let promise = new Promise((res, rej) => {
    if (num < 10) {
      res('Resolved');
    } else {
      rej('Rejected');
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
