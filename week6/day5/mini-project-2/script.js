function allTruthy(...arr) {
  let checks = (item) => item == true;
  if (arr.every(checks)) {
    return true;
  } else {
    return false;
  }
}

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
