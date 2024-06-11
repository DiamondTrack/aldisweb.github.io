document.addEventListener('DOMContentLoaded', function() {
    console.log('Always love Adinda');

    var movies = document.querySelectorAll('.movie');
    movies.forEach(function(movie) {
        movie.addEventListener('click', function() {
            var page = this.getAttribute('data-page');
            goToMoviePage(page);
        });
    });

    function goToMoviePage(page) {
        window.location.href = page;
    }
});

// Mencegah klik kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('✋');
});

// Mencegah kombinasi tombol keyboard (CTRL+C, CTRL+X, CTRL+V, CTRL+SHIFT+V)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 88 || e.keyCode === 86)) || (e.ctrlKey && e.shiftKey && (e.keyCode === 86))) {
        e.preventDefault();
        alert('✋');
    } else if (e.ctrlKey) {
        e.preventDefault();
        alert('✋');
    }
});

// Mencegah tombol "i" pada keyboard
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 73) { // Untuk huruf kecil "i"
        e.preventDefault();
        alert('✋');
    } else if (e.keyCode === 105) { // Untuk huruf besar "I"
        e.preventDefault();
        alert('✋');
    }
});

// Mendeteksi saat teks disalin
document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', '✋');
    e.preventDefault();
    alert('✋');
});
