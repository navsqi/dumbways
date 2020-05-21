let awal = '05:25:15';
let akhir = '09:00:00';
let kecepatan = 3;
let selisih;

awal = awal.split(':');
akhir = akhir.split(':');

selisih =
  (Number(akhir[0]) - Number(awal[0])) * 60 * 60 +
  (Number(akhir[1]) * 60 + Number(akhir[2]) - (Number(awal[1]) * 60 + Number(awal[2])));

let waktu = 0;
let waktuTambahKecepatan = 10 * 60;

while (waktu <= selisih) {
  if (waktu == waktuTambahKecepatan) {
    waktuTambahKecepatan = waktuTambahKecepatan + 7 * 60;
    kecepatan = kecepatan + 1;
  }
  waktu++;
}
