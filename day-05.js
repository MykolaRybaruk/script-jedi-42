// 1) Syntax task
// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  const bodyChar = body[body.length - 1];
  const tailChar = tail[0];
  if (bodyChar === tailChar) {
    return true;
  } else {
    return false;
  }
}

