function hitungkembalian(total, uang) {
  if (uang - total === 0) {
    return 'Tidak ada kembalian!';
  }

  let uangKembalian = [20000, 10000, 5000];
  let selisih = uang - total;

  let kembalian = [];
  let sumbang = false;

  for (let i = 0; i < selisih; i++) {
    if (selisih - uangKembalian[0] >= 0) {
      kembalian.push(uangKembalian[0]);
      selisih = selisih - uangKembalian[0];
    } else if (selisih - uangKembalian[1] >= 0) {
      kembalian.push(uangKembalian[1]);
      selisih = selisih - uangKembalian[1];
    } else if (selisih - uangKembalian[2] >= 0) {
      kembalian.push(uangKembalian[2]);
      selisih = selisih - uangKembalian[2];
    } else {
      sumbang = true;
      break;
    }
  }

  let x = kembalian.filter((el) => el === 20000);
  let y = kembalian.filter((el) => el === 10000);
  let z = kembalian.filter((el) => el === 5000);

  let cetakSumbang = sumbang
    ? `${selisih} Disumbangkan karena tidak ada pecahan dibawah 5000
`
    : '';
  let cetak20k = x.length != 0 ? `${x.length} x 20000\n` : '';
  let cetak10k = y.length != 0 ? `${y.length} x 10000\n` : '';
  let cetak5k = z.length != 0 ? `${z.length} x 5000\n` : '';

  return cetak20k.concat(cetak10k, cetak5k, cetakSumbang);
}

console.log(hitungkembalian(14500, 50000));
