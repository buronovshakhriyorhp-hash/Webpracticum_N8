async function executeSequentially(promises) {
  let results = [];

  for (let promiseFn of promises) {
    let result = await promiseFn();
    results.push(result);
    console.log("Vazifa bajarildi:", result);
  }
  return results;
}
const task1 = () => new Promise(res => setTimeout(() => res("1-vazifa"), 2000));
const task2 = () => new Promise(res => setTimeout(() => res("2-vazifa"), 1000));

executeSequentially([task1, task2]).then(allResults => {
  console.log("Hamma natijalar:", allResults);
});