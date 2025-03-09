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

const pGajah = document.getElementsByClassName('gajah')[0];
const pOrang = document.getElementsByClassName('orang')[0];
const pSemut = document.getElementsByClassName('semut')[0];
// pGajah.addEventListener('click', () => {
//   const pilihanComp = computerPilih();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.src = `img/${pilihanComp}.png`;
//   const pInfo = document.querySelector('.info');
//   pInfo.innerHTML = hasil;
// });
// pOrang.addEventListener('click', () => {
//   const pilihanComp = computerPilih();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.src = `img/${pilihanComp}.png`;
//   const pInfo = document.querySelector('.info');
//   pInfo.innerHTML = hasil;
// });
// pSemut.addEventListener('click', () => {
//   const pilihanComp = computerPilih();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.src = `img/${pilihanComp}.png`;
//   const pInfo = document.querySelector('.info');
//   pInfo.innerHTML = hasil;
// });

[pGajah, pOrang, pSemut].forEach((event) => {
  event.addEventListener('click', () => {
    const pilihanComp = computerPilih();
    const pilihanPlayer = event.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.src = `img/${pilihanComp}.png`;
    const pInfo = document.querySelector('.info');
    pInfo.innerHTML = hasil;
  });
});

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
