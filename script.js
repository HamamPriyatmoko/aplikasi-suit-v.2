function computerPilih() {
  const comp = Math.random();

  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';
}

function getHasil(comp, player) {
  if (player == comp) return 'SERI!';
  if (player == 'gajah') return comp == 'orang' ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return comp == 'gajah' ? 'KALAH!' : 'MENANG!';
  if (player == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG!';
}

// var tanya = true;
// while( tanya ) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // menangkap pilihan computer
//     // membangkitkan bilangan random

//     // menentukan rules
//

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');
