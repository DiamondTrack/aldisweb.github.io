// Fungsi untuk membuka RandomMovie
function openRandomMovie() {
  document.getElementById('myRandomMovie').style.left = '10px'; // Menampilkan popup
}

// Fungsi untuk menutup RandomMovie
function closeRandomMovie() {
  document.getElementById('myRandomMovie').style.left = '-300px'; // Menyembunyikan popup di luar layar
}

// Otomatis buka RandomMovie saat halaman dimuat
window.onload = function() {
  openRandomMovie();
};

function toggleSpoiler(button) {
    var contentDiv = button.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0];

    if (contentDiv.style.display != '') {
      contentDiv.style.display = '';
      button.value = '-';
      alert('Kamu berhasil menemukan Button ini :)'); // Tambahkan alert di sini
    } else {
      contentDiv.style.display = 'none';
      button.value = '-';
      alert('Terimakasih! Untuk Adinda aku Memohon Maaf sebesar-besarnya, dan Aku sendiri gak mau Begini tapi  ... ga taulah'); // Tambahkan alert di sini
    }
  }

function updateIndicator() {
  const indicator = document.getElementById('onlineIndicator');
  if (navigator.onLine) {
    indicator.style.backgroundColor = 'green'; // Online (hijau)
  } else {
    indicator.style.backgroundColor = 'red'; // Offline (merah)
  }
}

// Fungsi untuk menampilkan popup
function showPopup(message) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.style.display = 'block';

  setTimeout(function() {
    popup.style.display = 'none';
  }, 4000); // Tutup popup setelah 4 detik
}

// Event listener untuk mendengarkan perubahan status online/offline
window.addEventListener('online', function() {
  updateIndicator();
  showPopup('Kakak sudah Online kembali.');
});

window.addEventListener('offline', function() {
  updateIndicator();
  showPopup('Kak, Internet kakaknya terputus Nih');
});

// Panggil fungsi untuk inisialisasi indikator saat memuat halaman
updateIndicator();


var customPopup = document.getElementById('custom-popup');
    var isPopupClosed = false;

    function showCustomPopup() {
        if (!isPopupClosed) {
            customPopup.style.display = 'block';
        }
    }

    function closeCustomPopup() {
        customPopup.style.display = 'none';
        isPopupClosed = true;
    }

    window.onblur = function() {
        showCustomPopup();
    };

    window.onfocus = function() {
        if (isPopupClosed) { // Menambahkan kondisi jika popup ditutup, maka atur isPopupClosed kembali menjadi false
            isPopupClosed = false;
        }
        showCustomPopup();
    };