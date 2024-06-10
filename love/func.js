//NAVBAR
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Fungsi untuk membuka modal dan menampilkan gambar yang diperbesar saat thumbnail diklik
function openModal(imgSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

// Fungsi untuk menutup modal saat tombol close diklik
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.animation = 'bounceOut 0.5s ease'; // Mengaktifkan animasi bounce out saat menutup modal
    setTimeout(function() {
        modal.style.display = 'none';
        modal.style.animation = ''; // Menghapus animasi setelah modal ditutup
    }, 500); // Menunggu animasi selesai sebelum menyembunyikan modal
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("╔════════════════════════════╗");
    console.log("║   Adinda Sevina Lestari    ║");
    console.log("╚════════════════════════════╝");

});
