document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('nexus-theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('nexus-theme', newTheme);
        });
    }

    // Easter Egg Console
    console.log("[SYSTEM] Nexus Hub Ready.");

    // Easter Egg Footer
    const footerText = document.getElementById('footer-text');
    const secretTerminal = document.getElementById('secret-terminal');
    let clickCount = 0;

    if (footerText && secretTerminal) {
        footerText.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                secretTerminal.style.display = 'block';
                secretTerminal.innerHTML = "> Access Granted. Operator mode active.";
            }
        });
    }
    
    const searchInput = document.getElementById('search-input');
    const filterTags = document.getElementById('filter-tags');
    const cards = document.querySelectorAll('.game-card');

    function filterGames() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedTag = filterTags.value;

        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            const tags = card.getAttribute('data-tags').split(' ');
            
            const matchesSearch = name.includes(searchTerm);
            const matchesTag = (selectedTag === 'all' || tags.includes(selectedTag));

            if (matchesSearch && matchesTag) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    if (searchInput && filterTags) {
        searchInput.addEventListener('input', filterGames);
        filterTags.addEventListener('change', filterGames);
    }
});