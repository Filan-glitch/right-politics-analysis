/**
 * app.js - Hauptlogik für Right-Politics-Analysis Website
 * Features: Datenladung, Navigation, Suche, Dark Mode, Audio-Player
 */

class App {
    constructor() {
        this.data = null;
        this.allCodes = [];
        this.currentCategory = null;
        this.filteredResults = [];
        this.darkMode = true;
        this.activeAudio = null;
        this.activeMusicButton = null;
    }

    async init() {
        try {
            // Daten laden
            await this.loadData();
            
            // UI aufbauen
            this.buildNavigation();
            this.setupEventListeners();
            this.applyDarkMode();
            
            // Erste Kategorie laden
            this.selectCategory(this.data.categories[0].id);
        } catch (error) {
            console.error('Fehler beim Initialisieren der App:', error);
            this.showError('Die Webseite konnte nicht geladen werden. Bitte versuchen Sie es später erneut.');
        }
    }

    async loadData() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) throw new Error('Datendatei konnte nicht geladen werden');
            this.data = await response.json();
            
            // Validierung
            if (!this.data.categories || !Array.isArray(this.data.categories)) {
                throw new Error('Kategorien-Format ungültig');
            }
            
            // Alle Codes sammeln
            this.allCodes = (this.data.codes || []).filter(code => code.id && code.category);
            
            // Debug-Info
            console.log(`✅ ${this.allCodes.length} Codes geladen aus ${this.data.categories.length} Kategorien`);
        } catch (error) {
            console.error('Fehler beim Laden der Daten:', error);
            // Fallback: Leere Struktur mit Test-Daten
            this.data = {
                categories: [
                    { id: "test", name: "Demo", description: "Test-Kategorie", icon: "✅" }
                ],
                codes: []
            };
            this.allCodes = [];
        }
    }

    buildNavigation() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.innerHTML = '';

        this.data.categories.forEach((cat, index) => {
            const li = document.createElement('li');
            li.setAttribute('role', 'tab');
            li.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            li.className = 'px-3 py-2 rounded-md font-medium text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer transition';
            li.dataset.categoryId = cat.id;
            li.textContent = `${cat.icon} ${cat.name}`;
            
            li.addEventListener('click', () => this.selectCategory(cat.id));
            navMenu.appendChild(li);
        });
    }

    selectCategory(categoryId) {
        this.currentCategory = categoryId;
        
        // Navigation aktualisieren
        document.querySelectorAll('[role="tab"]').forEach(tab => {
            tab.setAttribute('aria-selected', tab.dataset.categoryId === categoryId ? 'true' : 'false');
        });

        // Inhalte rendern
        this.renderCategory(categoryId);
    }

    renderCategory(categoryId) {
        const category = this.data.categories.find(c => c.id === categoryId);
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = '';

        if (!category) {
            contentArea.innerHTML = '<p class="text-slate-500">Kategorie nicht gefunden.</p>';
            return;
        }

        // Kategorieheader
        const header = document.createElement('div');
        header.className = 'mb-8';
        header.innerHTML = `
            <h2 class="text-3xl font-bold mb-2">${category.icon} ${category.name}</h2>
            <p class="text-lg text-slate-600 dark:text-slate-400 mb-6">${category.description}</p>
        `;
        contentArea.appendChild(header);

        // Relevante Codes filtern
        const codes = this.allCodes.filter(code => code.category === categoryId);
        
        if (codes.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = 'bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center';
            emptyState.innerHTML = `
                <p class="text-slate-600 dark:text-slate-400 text-lg">📋 Inhalte werden noch aufgebaut.</p>
                <p class="text-slate-500 dark:text-slate-500 text-sm mt-2">Diese Kategorie hat noch keine Einträge. Bitte später erneut versuchen.</p>
            `;
            contentArea.appendChild(emptyState);
            return;
        }

        // Codes rendern
        const grid = document.createElement('div');
        grid.className = 'code-grid';
        
        codes.forEach((code, index) => {
            const card = this.createCodeCard(code);
            card.style.animationDelay = `${index * 0.05}s`;
            grid.appendChild(card);
        });

        contentArea.appendChild(grid);
    }

    createCodeCard(code) {
        const card = document.createElement('article');
        card.className = 'code-card animate-fade-in';

        const riskClass = `risk-${code.risk || 'medium'}`;
        const riskLabel = code.risk === 'critical' ? 'KRITISCH' : code.risk === 'high' ? 'HOCH' : code.risk === 'medium' ? 'MITTEL' : 'GERING';
        
        const platformsHtml = code.platforms ? code.platforms
            .map(p => `<span class="platform-badge">${p}</span>`)
            .join('') : '';

        const sourcesHtml = code.sources ? code.sources
            .map(src => `<li><a href="${src.url}" target="_blank" rel="noopener noreferrer">${src.title}</a></li>`)
            .join('') : '';

        // Image rendering
        const imageHtml = code.image ? `
            <div class="mb-4">
                <img src="${code.image}" alt="${code.imageAlt || code.code}" 
                     class="w-full h-48 object-cover rounded-md border border-gray-300 dark:border-gray-600"
                     loading="lazy">
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${code.imageAlt || ''}</p>
            </div>
        ` : '';

        // Audio player rendering
        const audioHtml = code.audioExample ? `
            <div class="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md border border-yellow-200 dark:border-yellow-800">
                <p class="text-xs font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ ${code.audioLabel}</p>
                <audio controls class="w-full" style="height: 30px;">
                    <source src="${code.audioExample}" type="audio/mpeg">
                    Ihr Browser unterstützt das Audio-Element nicht.
                </audio>
                <p class="text-xs text-yellow-700 dark:text-yellow-200 mt-2">
                    <strong>Hinweis:</strong> Diese Musik enthält extremistische Inhalte und dient nur zu Bildungszwecken.
                </p>
            </div>
        ` : '';

        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <div class="flex-1">
                    <span class="text-3xl font-bold">${code.code}</span>
                    ${code.subtitle ? `<p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">${code.subtitle}</p>` : ''}
                </div>
                <span class="${riskClass} ml-2 flex-shrink-0">
                    ${riskLabel}
                </span>
            </div>

            ${imageHtml}

            <p class="text-gray-700 dark:text-gray-300 mb-3"><strong>Bedeutung:</strong> ${code.meaning}</p>

            ${code.context ? `<p class="text-gray-700 dark:text-gray-300 mb-3"><strong>Kontext:</strong> ${code.context}</p>` : ''}

            ${audioHtml}

            ${platformsHtml ? `
                <div class="mb-3">
                    <strong class="text-sm">Plattformen:</strong>
                    <div>${platformsHtml}</div>
                </div>
            ` : ''}

            ${sourcesHtml ? `
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <strong class="text-sm">Quellen:</strong>
                    <ul class="sources-list text-sm mt-2">
                        ${sourcesHtml}
                    </ul>
                </div>
            ` : ''}
        `;

        return card;
    }

    setupEventListeners() {
        // Landing Page
        document.getElementById('enter-btn').addEventListener('click', () => this.hideLanding());

        // Suche
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Musik-Player (delegiert)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('music-play-btn')) {
                this.handleMusicButton(e.target);
            }
        });
    }

    handleSearch(query) {
        if (!query.trim()) {
            document.getElementById('search-results').innerHTML = '';
            return;
        }

        const lowerQuery = query.toLowerCase();
        const results = this.allCodes.filter(code => 
            code.code.toLowerCase().includes(lowerQuery) ||
            code.subtitle?.toLowerCase().includes(lowerQuery) ||
            code.meaning.toLowerCase().includes(lowerQuery) ||
            code.context?.toLowerCase().includes(lowerQuery)
        );

        this.displaySearchResults(results, query);
    }

    displaySearchResults(results, query) {
        const container = document.getElementById('search-results') || this.createSearchResultsContainer();
        container.innerHTML = '';

        if (results.length === 0) {
            container.innerHTML = '<p class="text-slate-600 dark:text-slate-400">Keine Ergebnisse gefunden.</p>';
            return;
        }

        const heading = document.createElement('h3');
        heading.className = 'text-xl font-bold mb-4';
        heading.textContent = `${results.length} Ergebnis(se) gefunden`;
        container.appendChild(heading);

        results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'search-result-item cursor-pointer';
            item.innerHTML = `
                <span class="text-lg font-bold">${this.highlightQuery(result.code, query)}</span>
                <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    ${this.highlightQuery(result.meaning.substring(0, 100), query)}...
                </p>
            `;
            item.addEventListener('click', () => {
                this.selectCategory(result.category);
                document.getElementById('search-input').value = '';
                container.innerHTML = '';
                // Scroll zu dem Code
                const cards = document.querySelectorAll('.code-card');
                const targetCard = Array.from(cards).find(card => card.textContent.includes(result.code));
                if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            container.appendChild(item);
        });
    }

    createSearchResultsContainer() {
        const contentArea = document.getElementById('content-area');
        const container = document.createElement('div');
        container.id = 'search-results';
        container.className = 'mb-8';
        contentArea.insertBefore(container, contentArea.firstChild);
        return container;
    }

    highlightQuery(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    handleMusicButton(button) {
        const audioSrc = button.dataset.audioSrc;
        
        if (!this.activeAudio) {
            this.activeAudio = new Audio();
        }

        const isCurrentButton = this.activeMusicButton === button;
        const isPlaying = button.dataset.state === 'playing';

        // Wenn der gleiche Button geklickt und spielt: pausieren
        if (isCurrentButton && isPlaying) {
            this.activeAudio.pause();
            this.resetMusicButton(button);
            this.activeMusicButton = null;
            return;
        }

        // Andere Buttons resetten
        if (this.activeMusicButton && this.activeMusicButton !== button) {
            this.resetMusicButton(this.activeMusicButton);
        }

        // Neuen Audio laden und spielen
        this.activeAudio.src = audioSrc;
        this.activeAudio.currentTime = 0;
        this.activeAudio.play().catch(err => {
            console.error('Audio konnte nicht abgespielt werden:', err);
            this.resetMusicButton(button);
        });

        button.dataset.state = 'playing';
        button.textContent = '⏸ Wiedergabe stoppen';
        this.activeMusicButton = button;

        // Automatisches Resetten bei Ende
        this.activeAudio.onended = () => {
            this.resetMusicButton(this.activeMusicButton);
            this.activeMusicButton = null;
        };
    }

    resetMusicButton(button) {
        if (!button) return;
        button.dataset.state = 'idle';
        button.textContent = button.dataset.defaultLabel || '▶ Betroffenen Ausschnitt abspielen';
    }

    applyDarkMode() {
        // Dark Mode ist jetzt Standard und kann nicht toggled werden
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark-mode');
    }

    hideLanding() {
        const landing = document.getElementById('landing-page');
        landing.style.opacity = '0';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            landing.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }

    showError(message) {
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = `
            <div class="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 p-6 rounded-lg">
                <h2 class="font-bold text-lg">Fehler</h2>
                <p>${message}</p>
            </div>
        `;
    }
}

// App starten wenn DOM bereit
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
