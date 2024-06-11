// Fungsi untuk memeriksa file baru
function checkForNewContent() {
  // Daftar file yang ada
  const existingFiles = ['motivasi1.html', 'motivasi2.html', 'motivasi3.html', 'motivasi4.html', 'motivasi5.html']; // Tambahkan semua file yang sudah ada

  // URL dasar untuk file motivasi
  const baseUrl = '/quote/motivasi/';

  // Periksa setiap file dengan increment nomor
  let fileNumber = existingFiles.length + 1;
  let newFile = baseUrl + 'motivasi' + fileNumber + '.html';

  // Gunakan fetch API untuk memeriksa file
  fetch(newFile)
    .then(response => {
      if (response.ok) {
        // Jika file ditemukan, tambahkan ke daftar dan lakukan update yang diperlukan
        existingFiles.push('motivasi' + fileNumber + '.html');
        console.log('File baru ditemukan:', newFile);
        // Tempatkan logika update halaman di sini
        updatePageWithNewContent(newFile);
      } else {
        console.log('Tidak ada file baru.');
      }
    })
    .catch(error => {
      console.error('Terjadi kesalahan saat memeriksa file baru:', error);
    });
}

// Fungsi untuk memperbarui halaman dengan konten baru
function updatePageWithNewContent(newFile) {
  // Logika untuk memperbarui halaman dengan konten dari file baru
  // Misalnya, kamu bisa memuat konten file baru ke dalam elemen tertentu di halaman
}

// Jalankan fungsi checkForNewContent secara berkala
setInterval(checkForNewContent, 600); // Periksa setiap 60 detik
