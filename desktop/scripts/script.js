// Ambil modal
var modal = document.getElementById("myModal");

// Ambil tombol untuk membuka modal
var btn = document.getElementById("openModalBtn");

// Ketika tombol dibuka diklik, tampilkan modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Ambil tombol untuk menutup modal
var closeModalBtn = document.getElementById("closeModalBtn");

// Ketika tombol ditutup diklik, sembunyikan modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Ketika tombol close (x) pada modal diklik, sembunyikan modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, sembunyikan modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Tanggal saat ini
var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1; // Bulan dimulai dari 0 (Januari) hingga 11 (Desember)
var currentYear = currentDate.getFullYear();

// Periksa apakah tanggal saat ini adalah 10 atau 11 April 2024
if ((currentMonth === 4) && (currentDay === 10 || currentDay === 11) && (currentYear === 2024)) {
  // Tampilkan modal
  modal.style.display = "block";
}