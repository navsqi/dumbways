function cetakGambar(count) {
  if (count % 2 === 0) {
    return 'Nilai input harus bilangan ganjil!';
  }

  let center = Math.round(count / 2);
  let str = '';
  let x = 0; // pattern center + 1 atau center - 1
  let reverse = false;

  for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= count; j++) {
      //   console.log(x);
      if (center === j && x === 0) {
        str += '*';
        ++x;
        break;
      } else if (center === j && x != 0 && i != center) {
        str += '*';
      } else if (center + x === j && x != 0 && i != center) {
        str += '*';
        if (reverse) {
          x = x - 1;
        } else {
          x = x + 1;
        }
        break;
      } else if (center - x === j && x != 0 && i != center) {
        str += '*';
      } else if (i === center) {
        str += '*'; // center full
        reverse = true;
      } else {
        str += ' ';
      }
    }
    if (reverse && i === center) {
      x = x - 1;
    }
    str += '\n';
  }

  return str;
}

console.log(cetakGambar(11));
