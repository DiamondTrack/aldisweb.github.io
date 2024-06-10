function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});

    console.log("╔════════════════════════════╗");
    console.log("║   Adinda Sevina Lestari    ║");
    console.log("╚════════════════════════════╝");

  // Fungsi untuk menampilkan pesan konfirmasi saat meninggalkan halaman
  window.addEventListener('beforeunload', function(e) {
    // Pesan konfirmasi
    var confirmationMessage = 'Apakah Anda yakin ingin meninggalkan halaman ini?';

    // Ubah pesan konfirmasi sesuai kebutuhan
    (e || window.event).returnValue = confirmationMessage; // Untuk browser yang lebih tua
    return confirmationMessage;
  });

  // Fungsi untuk memunculkan popup toast untuk konfirmasi kembali dan refresh
  function showConfirmationToast() {
    var toast = document.createElement('div');
    toast.textContent = 'Konfirmasi kembali dan refresh!';
    toast.style.cssText = 'position: fixed; top: 10px; left: 50%; transform: translateX(-50%); background-color: #333; color: #fff; padding: 10px 20px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); z-index: 1000;';
    document.body.appendChild(toast);

    // Sembunyikan popup toast setelah beberapa detik
    setTimeout(function() {
      toast.style.display = 'none';
    }, 3000); // 3000 milidetik (3 detik)
  }

  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'visible') {
      // Situs aktif, lakukan sesuatu di sini
      // Contoh: Tampilkan pesan atau jalankan fungsi untuk memperbarui data
      console.log("Situs tetap aktif");
    } else {
      // Situs tidak aktif, mungkin aplikasi atau tab lain sedang digunakan
      // Contoh: Jeda proses atau hentikan pembaruan otomatis
      console.log("Situs tidak aktif");
    }
  });




var pSequence = ''; // Variabel untuk menyimpan status pengetikan huruf P
var keyPressStartTime = 0; // Waktu mulai ketika tombol ditekan

document.addEventListener('keydown', function(event) {
    var key = event.key;

    // Reset waktu mulai ketika tombol ditekan
    keyPressStartTime = new Date().getTime();

    // Menambah key ke variabel pSequence
    pSequence += key;

    // Memeriksa apakah serangkaian key P telah diketik
    if (pSequence.toLowerCase() === 'p') {
        document.getElementById('keywhat').innerText = "Halo Kak, Kakaknya pencet P tadi, Kakak Manggil aku?";
        document.getElementById('keywhat').style.display = 'block';

        // Menyembunyikan PopUp setelah 12 detik
        setTimeout(function() {
            document.getElementById('keywhat').style.display = 'none';
        }, 12000);

        // Mereset variabel pSequence setelah menemukan huruf 'P'
        pSequence = '';
    }

    // Memeriksa apakah tombol ditekan dan ditahan selama 5 detik
    if ((new Date().getTime() - keyPressStartTime) >= 5000) {
        document.getElementById('keywhat').innerText = "Kak? Halo... Halo kak! Kakak Ketiduran kah?";
        document.getElementById('keywhat').style.display = 'block';

        // Menyembunyikan PopUp setelah keyboard dilepas
        document.addEventListener('keyup', function() {
            document.getElementById('keywhat').style.display = 'none';
        });
    }
});


