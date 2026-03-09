let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('1 natija (1s)')
  }, 4000)
})
let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('2-natija (2s)')
  }, 2000)
})
let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('3-natija (3s)')
  }, 3000)
})

Promise.race([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error))
