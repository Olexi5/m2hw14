//1
function delayedPromise(text, time) {
  return new Promise((res) => setTimeout(() => res(text), time));
}
const promiseArr = [];
for (let i = 0; i < 5; i++) {
  promiseArr.push(delayedPromise(`Promise ${i + 1} resolved`, (i + 1) * 1000));
}
Promise.all(promiseArr).then((d) => console.log(d));

//2
function randomDelay() {
    const delay= Math.floor(Math.random()*10000)
  return new Promise((res) => setTimeout(() => res(`Promise solved in ${delay} was first`), delay));
}
const promiseArr2 = [];
for (let i = 1; i <= 5; i++) {
  promiseArr2.push(randomDelay());
}
Promise.race(promiseArr2).then((d) => console.log(d));