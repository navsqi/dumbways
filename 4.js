function hitungKata(kata) {
  let jumlahKata = 0;

  [...kata].forEach(function (el) {
    if (el.toUpperCase() === el) {
      jumlahKata += 1;
    }
  });

  return jumlahKata;
}

console.log(hitungKata('PapaMakanJerukWaktuBuka'));
