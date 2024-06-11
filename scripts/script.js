function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

// Default to showing the first tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('quotes');
});

let currentPage = 0;
        const items = document.querySelectorAll('.carousel-item');

        function showPage(page) {
            items.forEach((item, index) => {
                item.style.display = index === page ? 'block' : 'none';
            });
        }

        function prevPage() {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        }

        function nextPage() {
            if (currentPage < items.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            showPage(currentPage);
        });