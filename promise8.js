function promiseWithTimeout(promise, timeout){
  let timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Vaqt tugadi (Timeout)!"));
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise])

}
let myTask  = new Promise((resolve)=> setTimeout(() =>resolve("Muvaffaqiyatli!"), 3000))
promiseWithTimeout(myTask, 2000)
  .then(result => console.log("Natija", result))
  .catch(error => console.log(" Xato", error))
  