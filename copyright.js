// Mencegah klik kanan pada halaman web
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('Ekhem😌, 𝚛𝚒𝚐𝚑𝚝𝚌𝚕𝚒𝚌𝚔, mau ngapain nih🤨');
  console.log('Mau Ngapain sih Kak');
});

// Mencegah copy atau ctrl+c pada halaman web
document.addEventListener('copy', function(e) {
  e.preventDefault();
  e.clipboardData.setData('text/plain', 'Cie Cie, mau nyalin apa nieh Hayo🤣');
});
console.log('Ga Boleh Nyalin! Kalo mau ketik Manual');