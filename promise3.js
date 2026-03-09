let chaen = true;

let pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (chaen) {
      resolve(5);
    } else {
      reject("error")
    }
  }, 1000);
});

pro
  .then(result => result)
  .then(result=> 2 * result)
  .then(result => console.log(result))
  .catch(error => console.log(error))