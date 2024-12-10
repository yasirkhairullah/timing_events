// //  1. setTimeout()
// const tes = setTimeout(function () {
//   console.log("ok");
// }, 5000);

// const tombol = document.querySelector("#tombol");
// tombol.addEventListener("click", function () {
//   clearTimeout(tes);
//   console.log("selesai");
// });

// // 2. setInterval()
// const tes = setInterval(function () {
//   console.log("ok");
// }, 2000);

// const tombol = document.querySelector("#tombol");
// tombol.addEventListener("click", function () {
//   clearTimeout(tes);
//   console.log("selesai");
// });

// // #studi kasus program hitung mundur
const tanggalTujuan = new Date("dec 11, 2024 16:00:00").getTime();
const sekarang = new Date().getTime();
const selisih = tanggalTujuan - sekarang;

console.log(selisih);
