function cetakGambar(num) {
  if (num % 2 === 0) {
    return 'Parameter harus ganjil!';
  }

  let str = '';

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i % 2 != 0) {
        str += '*';
      } else {
        if (j == 1 || j == num) {
          str += '*';
        } else {
          str += '=';
        }
      }
    }
    str += '\n';
  }

  return str;
}

console.log(cetakGambar(5));
