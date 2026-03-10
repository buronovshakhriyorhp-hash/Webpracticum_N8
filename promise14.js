function processNumber(num) {
  let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num) {
        resolve(num);
      } else {
        reject("error");
      }
    }, 1000);
  });
  pro
    .then(result => console.log(result * 10))
    .then(result => console.log(result - 5))
    .then(result => console.log(result / 2))
    .catch(error => console.log(error))
}
processNumber(20)