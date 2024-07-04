// Polyfill of Promise

function MyPromise(exec) {
  let onResolve, onReject, isSettled = false;

  this.then = function(thenCallback) {
      onResolve = thenCallback;
      return this;
  };

  this.catch = function(catchCallback) {
      onReject = catchCallback;
      return this;
  };

  function resolve(res) {
      if (isSettled) return;
      onResolve(res);
      isSettled = true;
  }

  function reject(err) {
      if (isSettled) return;
      onReject(err);
      isSettled = true;
  }

  exec(resolve, reject);
}

const promise = new MyPromise((onResolve, onReject) => {
  setTimeout(function() {
      onResolve('Hello World');
  }, 100);
});

promise.then(console.log).catch(console.log);