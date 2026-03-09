let easyPromise = true;

let pro = new Promise((resolve, reject)=> {
    setTimeout(() => {
      if (easyPromise) {
        resolve("salom dunyo"); // fulfilled
      } else {
        reject('Good bye world'); //reject
      }
    }, 2000);
  }
)

pro
  .then(result => console.log(result))
  .catch(error => console.log(error))