document.addEventListener("DOMContentLoaded", function() {
            var loading = document.getElementById("loading");
            setTimeout(function() {
                loading.style.opacity = "0";
                setTimeout(function() {
                    loading.style.display = "none";
                }, 500);
            }, 1000); // Simulate loading delay
        });