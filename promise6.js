function loadUserData(userId) {
  let promise = new Promise((resolve, reject) => {
    if (userId % 2 === 0) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
loadUserData(3);

