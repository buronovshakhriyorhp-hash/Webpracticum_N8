let errorPromise = false;

let pro = new Promise((resolve, reject)=> {
    setTimeout(() => {
      if (errorPromise) {
        resolve("tug'ri bajarildi!")
      } else {
        reject('Xato yuz berdi!')
      }
    }, 1000)
  }
)

pro
  .then(result => console.log(result))
  .catch(error => console.log(error))