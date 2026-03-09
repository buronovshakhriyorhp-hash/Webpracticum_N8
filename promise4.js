let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('1-natija 1(s)')
  }, 1000)
})
let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('2-natija 2(s)')
  }, 2000)
})
let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('3-natija 3(s)')
  })
})
Promise.all([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error))
  // .fullfiled(console.log('muvoffaqiyatli bajarildi.'))