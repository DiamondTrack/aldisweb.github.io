window.onload = function() {
    if (!("Notification" in window)) {
        alert("Browser Anda tidak mendukung notifikasi.");
    } else if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                console.log("Izin notifikasi diberikan!");
            }
        });
    }
};

// Fungsi untuk menampilkan notifikasi
function displayNotification(title, body) {
    if (Notification.permission === "granted") {
        var notification = new Notification(title, {
            body: body,
            icon: "https://i.ibb.co/pr9G8dK/f3b737fa-888d-4efd-85c2-802660ff4c87.jpg"
        });

        notification.vibrate = [200, 100, 200];

        var sound = new Audio("notification_sound.mp3");
        sound.play();
    } else {
        alert("Izin notifikasi belum diberikan.");
    }
}

// Menampilkan notifikasi pada waktu-waktu tertentu
setTimeout(function() {
    displayNotification("Waktunya Sahur", "Segera bersiap untuk sahur.");
}, sahurTime.getTime() - Date.now());

setTimeout(function() {
    displayNotification("Waktunya Berbuka", "Segera bersiap untuk berbuka puasa.");
}, maghribTime.getTime() - Date.now());

setTimeout(function() {
    displayNotification("Waktunya Berhenti Makan dan Minum", "Puasa hari ini telah berakhir.");
}, stopTime.getTime() - Date.now());