async function retryPromise(promiseFn, retries = 3) {
    try {
      return await promiseFn()
    } catch (error) {
      if (retries > 1) {
        console.log(`Xato yuz berdi Qayta urinish: ${retries - 1} ta qoldi...`);
        return await retryPromise(promiseFn, retries - 1);
      } else {
        throw new Error("Barcha urinishlar muvaffaqiyatsiz tugadi: " + error.message);
      }
    }
}
retryPromise()
  .then(data => console.log("Muvaffaqiyatli:", data))
  .catch(err => console.log("Baribir bo'lmadi:", err));
