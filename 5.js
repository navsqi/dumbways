function arrayReverse(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }

  return reverse;
}

console.log(arrayReverse([19, 22, 3, 28, 26, 17, 18, 4, 28, 0]));
