function waitAndReturn(value, seconds) {
  let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(value);
      } else {
        reject("xatolik");
      }
    }, seconds);
  });
  pro
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
waitAndReturn("muvoffaqiyatli bajarildi", 1000);
