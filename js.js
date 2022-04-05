let data = null;

const promise = new Promise((resolve, reject) => {
  const rand = Math.random() > 0.5;
  setTimeout(() => {
    if (rand) {
      resolve("resolved");
    }
    reject("rejected");
  }, 500);
});

const varProm1 = promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  console.log(`onFulfilled result from resolve:: ${result}`);
  data = result;
}

function onRejected(error) {
  console.log(`onRejected result from reject:: ${error}`);
  data = error;
}

setTimeout(() => {
  console.log(data);
}, 2000);
