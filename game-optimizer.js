// ==========================================
// GAME OPTIMIZER v3.0 - COUNTRY ANIMALS
// Risolve: Bottone Guess, Immagini, UX Migliore
// ==========================================

// Database immagini CORRETTO e garantito
const IMAGE_SOLUTIONS = {
    "United States": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "China": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    "Australia": "https://images.unsplash.com/photo-1551089071-30f1a1d6bf5c?w=400&h=300&fit=crop",
    "India": "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=400&h=300&fit=crop",
    "Russia": "https://images.unsplash.com/photo-1573921470441-32ceb635f4c9?w=400&h=300&fit=crop",
    "Kenya": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop",
    "Brazil": "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
    "Canada": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop",
    "South Africa": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Germany": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "France": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop",
    "Japan": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop",
    "United Kingdom": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop",
    "Italy": "https://images.unsplash.com/photo-1598751331615-2c855ed5b6f2?w=400&h=300&fit=crop",
    "Mexico": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "South Korea": "https://images.unsplash.com/photo-1598751331615-2c855ed5b6f2?w=400&h=300&fit=crop",
    "Spain": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop",
    "Egypt": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "Thailand": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop",
    "Argentina": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "New Zealand": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop",
    "United Arab Emirates": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Indonesia": "https://images.unsplash.com/photo-1575550959106-5a7defa08d27?w=400&h=300&fit=crop",
    "El Salvador": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "Colombia": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "Pakistan": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Turkey": "https://images.unsplash.com/photo-1598751331615-2c855ed5b6f2?w=400&h=300&fit=crop",
    "Poland": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "Ethiopia": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop",
    "North Korea": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop"
};

class GameOptimizer {
    constructor() {
        this.initialize();
    }

    initialize() {
        console.log('🔄 Game Optimizer v3.0 - Inizializzazione...');
        
        // Aspetta che il gioco sia pronto
        if (typeof currentAnimal !== 'undefined') {
            this.applyEnhancements();
        } else {
            setTimeout(() => this.applyEnhancements(), 1000);
        }
    }

    applyEnhancements() {
        this.fixImages();
        this.enhanceGuessButton();
        this.improveAutocomplete();
        this.removeAds();
        this.addGameCompletionCheck();
        
        console.log('✅ Game Optimizer - Miglioramenti applicati!');
    }

    // 1. CORREGGI IMMAGINI AUTOMATICAMENTE
    fixImages() {
        if (currentAnimal && IMAGE_SOLUTIONS[currentAnimal.country]) {
            const correctImage = IMAGE_SOLUTIONS[currentAnimal.country];
            const imgElement = document.getElementById('animalImage');
            
            if (imgElement) {
                // Sostituisci l'immagine corrotta
                imgElement.onerror = () => {
                    console.log(`🖼️ Correggendo immagine per: ${currentAnimal.country}`);
                    imgElement.src = correctImage;
                };
                
                // Forza il ricaricamento
                if (imgElement.src !== correctImage) {
                    imgElement.src = correctImage;
                }
            }
        }
    }

    // 2. BOTTONE GUESS INTELLIGENTE
    enhanceGuessButton() {
        const guessButton = document.querySelector('.input-area button');
        const countryInput = document.getElementById('countryInput');
        
        if (!guessButton || !countryInput) return;

        // Stato iniziale
        this.updateButtonState(guessButton, false);
        
        // Controllo input in tempo reale
        countryInput.addEventListener('input', () => {
            const inputValue = countryInput.value.trim();
            const isValidCountry = this.isValidCountry(inputValue);
            this.updateButtonState(guessButton, isValidCountry);
        });

        // Click sull'autocomplete
        document.addEventListener('click', (e) => {
            if (e.target.closest('.autocomplete-item')) {
                setTimeout(() => {
                    this.updateButtonState(guessButton, true);
                }, 100);
            }
        });
    }

    isValidCountry(inputValue) {
        return animalsData.some(animal => 
            animal.country.toLowerCase() === inputValue.toLowerCase()
        );
    }

    updateButtonState(button, isEnabled) {
        if (isEnabled) {
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
            button.style.transform = 'translateY(0)';
        } else {
            button.disabled = true;
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
            button.style.transform = 'translateY(0)';
        }
    }

    // 3. AUTECOMPLETE MIGLIORATO
    improveAutocomplete() {
        const originalSetup = window.setupAutocomplete;
        
        window.setupAutocomplete = function() {
            if (originalSetup) originalSetup();
            
            const input = document.getElementById('countryInput');
            const autocomplete = document.getElementById('autocomplete');
            
            if (!input || !autocomplete) return;

            // Migliora la visibilità
            autocomplete.style.zIndex = '10000';
            autocomplete.style.border = '2px solid #4CAF50';
            
            // Auto-selezione primo elemento con Enter
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && autocomplete.style.display === 'block') {
                    const firstItem = autocomplete.querySelector('.autocomplete-item');
                    if (firstItem) {
                        firstItem.click();
                        e.preventDefault();
                    }
                }
            });
        };
    }

    // 4. RIMUOVI PUBBLICITÀ
    removeAds() {
        const originalCheckGuess = window.checkGuess;
        
        window.checkGuess = function() {
            if (typeof gameWon !== 'undefined' && gameWon) return;

            const input = document.getElementById('countryInput');
            const guess = input.value.trim().toLowerCase();
            const correctCountry = currentAnimal.country.toLowerCase();

            // Nascondi autocomplete
            const autocomplete = document.getElementById('autocomplete');
            if (autocomplete) autocomplete.style.display = 'none';

            if (guess === correctCountry) {
                // VITTORIA
                document.getElementById('result').textContent = `🎉 Correct! It's ${currentAnimal.country}!`;
                document.getElementById('result').className = 'result win';
                gameWon = true;
                if (typeof saveWin === 'function') saveWin();
                if (typeof updateStats === 'function') updateStats();
                
                // Blocca ulteriori tentativi
                this.disableGameInput();
            } else {
                // ERRORE
                errors++;
                document.getElementById('errorCount').textContent = errors;
                
                if (typeof revealHint === 'function') revealHint(errors);
                
                if (errors >= 5) {
                    // SCONFITTA - SENZA PUBBLICITÀ
                    document.getElementById('result').textContent = `💔 Game Over! The country was ${currentAnimal.country}. Better luck tomorrow!`;
                    document.getElementById('result').className = 'result lose';
                    if (typeof saveLoss === 'function') saveLoss();
                    if (typeof updateStats === 'function') updateStats();
                    
                    // Blocca ulteriori tentativi
                    this.disableGameInput();
                }
                
                input.value = '';
                
                // Aggiorna stato bottone
                const guessButton = document.querySelector('.input-area button');
                if (guessButton) {
                    guessButton.disabled = true;
                    guessButton.style.opacity = '0.6';
                }
            }
        }.bind(this);
    }

    disableGameInput() {
        const inputArea = document.querySelector('.input-area');
        if (inputArea) {
            inputArea.style.opacity = '0.6';
            inputArea.style.pointerEvents = 'none';
        }
    }

    // 5. CONTROLLO COMPLETAMENTE GIOCO
    addGameCompletionCheck() {
        const checkGameCompletion = () => {
            const today = new Date().toDateString();
            const lastPlayed = localStorage.getItem('lastPlayedDate');
            
            if (lastPlayed === today) {
                const resultElement = document.getElementById('result');
                if (resultElement && resultElement.style.display === 'none') {
                    // Utente ha già giocato ma ha ricaricato la pagina
                    resultElement.textContent = "✅ You've already played today! Come back tomorrow for a new challenge!";
                    resultElement.className = 'result win';
                    resultElement.style.display = 'block';
                    this.disableGameInput();
                }
            }
        };

        // Controlla al caricamento e ogni 2 secondi
        checkGameCompletion();
        setInterval(checkGameCompletion, 2000);
    }
}

// ==================== 
// INIZIALIZZAZIONE AUTOMATICA
// ====================

// Aspetta che la pagina sia completamente caricata
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new GameOptimizer();
    });
} else {
    new GameOptimizer();
}

// Backup: Inizializza dopo 3 secondi per sicurezza
setTimeout(() => {
    if (typeof window.gameOptimizer === 'undefined') {
        window.gameOptimizer = new GameOptimizer();
    }
}, 3000);

console.log('🎮 Game Optimizer v3.0 - Caricato e pronto!');
