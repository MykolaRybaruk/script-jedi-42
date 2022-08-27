// Node.js Async IO
// https://www.codewars.com/kata/542106e2dda52658bf00001a/train/javascript

const { exec } = require('child_process');

async function execute(command, callback) {
  exec(command, (err, data) => {
    if (err) { callback(err) }
    else { callback(null, data) }
  });
}
