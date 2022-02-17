var myWorker = new Worker(worker.js);

myWorker.postMessage("start");

function counter() {
  var i = 0;
  i = i + 1;
  postMessage(i);
}

self.addEventListener("counter", function (event) {
  if (even.data == "start") {
    counter();
  }
});
