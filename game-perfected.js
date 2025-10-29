// ==========================================
// ANIMAL GUESSER PERFECTED v1.0
// Tutto in un unico file - Nessun conflitto
// ==========================================

// DATABASE IMMAGINI CORRETTE E GARANTITE
const PERFECT_IMAGES = {
    "United States": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "China": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    "Australia": "https://images.unsplash.com/photo-1583324114696-0b6d9e5b9a3b?w=400&h=300&fit=crop",
    "India": "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=400&h=300&fit=crop",
    "Russia": "https://images.unsplash.com/photo-1573921470441-32ceb635f4c9?w=400&h=300&fit=crop",
    "Kenya": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop",
    "Brazil": "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=300&fit=crop",
    "Canada": "https://images.unsplash.com/photo-1574085975024-eaa85ec28107?w=400&h=300&fit=crop",
    "South Africa": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Germany": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "France": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop",
    "Japan": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop",
    "United Kingdom": "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    "Italy": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=400&h=300&fit=crop",
    "Mexico": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "South Korea": "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=400&h=300&fit=crop",
    "Spain": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop",
    "Egypt": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "Thailand": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop",
    "Argentina": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "New Zealand": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "United Arab Emirates": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Indonesia": "https://images.unsplash.com/photo-1575550959106-5a7defa08d27?w=400&h=300&fit=crop",
    "El Salvador": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "Colombia": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "Pakistan": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Turkey": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=400&h=300&fit=crop",
    "Poland": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "Ethiopia": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop",
    "North Korea": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop"
};

class PerfectAnimalGuesser {
    constructor() {
        this.todayKey = new Date().toDateString();
        this.init();
    }

    init() {
        console.log('🦁 Perfect Animal Guesser - Inizializzazione...');
        this.waitForGame().then(() => {
            this.applyPerfectSolutions();
        });
    }

    waitForGame() {
        return new Promise((resolve) => {
            const check = () => {
                if (window.currentAnimal && document.getElementById('countryInput')) {
                    resolve();
                } else {
                    setTimeout(check, 100);
                }
            };
            check();
        });
    }

    applyPerfectSolutions() {
        this.fixAllImages();
        this.perfectGuessSystem();
        this.smartGameCompletion();
        this.enhanceUserExperience();
        console.log('✅ Perfect Animal Guesser - Tutto configurato!');
    }

    // 1. IMMAGINI PERFETTE - CORREGGI TUTTE
    fixAllImages() {
        if (currentAnimal && PERFECT_IMAGES[currentAnimal.country]) {
            const perfectImage = PERFECT_IMAGES[currentAnimal.country];
            const imgElement = document.getElementById('animalImage');
            
            if (imgElement) {
                console.log(`🎯 Correggendo immagine: ${currentAnimal.country}`);
                imgElement.src = perfectImage;
                
                // Impedisci a qualsiasi altro codice di cambiare l'immagine
                const originalSetAttribute = imgElement.setAttribute;
                imgElement.setAttribute = function(name, value) {
                    if (name === 'src' && value !== perfectImage) {
                        return; // Blocca modifiche all'immagine
                    }
                    originalSetAttribute.call(this, name, value);
                };
            }
        }
    }

    // 2. SISTEMA GUESS PERFETTO
    perfectGuessSystem() {
        const guessButton = document.querySelector('.input-area button');
        const countryInput = document.getElementById('countryInput');
        
        // Bottone intelligente
        this.updateGuessButton(false);
        
        // Controllo input in tempo reale
        countryInput.addEventListener('input', () => {
            const isValid = this.isValidCountry(countryInput.value.trim());
            this.updateGuessButton(isValid);
        });

        // Autocomplete migliorato
        this.enhanceAutocomplete();

        // Sostituisci completamente checkGuess
        this.replaceCheckGuessFunction();
    }

    isValidCountry(input) {
        return animalsData.some(country => 
            country.country.toLowerCase() === input.toLowerCase()
        );
    }

    updateGuessButton(active) {
        const button = document.querySelector('.input-area button');
        if (!button) return;

        if (active) {
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
            button.style.background = 'linear-gradient(45deg, #ff6b35, #ff8e53)';
            button.textContent = '🎯 Guess';
        } else {
            button.disabled = true;
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
            button.style.background = '#666';
            button.textContent = '🔒 Select Country';
        }
    }

    enhanceAutocomplete() {
        const input = document.getElementById('countryInput');
        const autocomplete = document.getElementById('autocomplete');
        
        if (!input || !autocomplete) return;

        // Migliora l'autocomplete esistente
        input.addEventListener('focus', () => {
            if (input.value.length >= 1) {
                autocomplete.style.display = 'block';
            }
        });

        // Selezione rapida con Enter
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && autocomplete.style.display === 'block') {
                const firstItem = autocomplete.querySelector('.autocomplete-item');
                if (firstItem) {
                    firstItem.click();
                    e.preventDefault();
                }
            }
        });
    }

    // SOSTITUISCI COMPLETAMENTE LA FUNZIONE ORIGINALE
    replaceCheckGuessFunction() {
        window.checkGuess = () => {
            // Controlla se già giocato oggi
            if (this.hasPlayedToday()) {
                this.showCompletionMessage();
                return;
            }

            const input = document.getElementById('countryInput');
            const guess = input.value.trim();
            
            if (!guess) {
                alert('🇺🇳 Please select a country from the list!');
                return;
            }

            const isCorrect = guess.toLowerCase() === currentAnimal.country.toLowerCase();
            
            // Nascondi autocomplete
            document.getElementById('autocomplete').style.display = 'none';

            if (isCorrect) {
                this.handlePerfectWin();
            } else {
                this.handleSmartMistake();
            }

            // Reset input e bottone
            input.value = '';
            this.updateGuessButton(false);
        };
    }

    // 3. GESTIONE VITTORIA INTELLIGENTE
    handlePerfectWin() {
        // Mostra risultato
        document.getElementById('result').textContent = `🎉 Bravo! It's ${currentAnimal.country}!`;
        document.getElementById('result').className = 'result win';
        document.getElementById('result').style.display = 'block';
        
        // Marca come completato
        this.markAsPlayedToday();
        gameWon = true;
        
        // Disabilita input
        this.disableGameInput();
        
        // Aggiorna statistiche in modo sicuro
        this.updateStatsSafely(true);
    }

    // 4. GESTIONE ERRORI INTELLIGENTE
    handleSmartMistake() {
        errors++;
        document.getElementById('errorCount').textContent = errors;
        
        // Rivela hint
        if (typeof revealHint === 'function') {
            revealHint(errors);
        }
        
        if (errors >= 5) {
            // Game over - senza pubblicità
            document.getElementById('result').textContent = `💔 The answer was ${currentAnimal.country}. Try again tomorrow!`;
            document.getElementById('result').className = 'result lose';
            document.getElementById('result').style.display = 'block';
            
            // Marca come completato
            this.markAsPlayedToday();
            this.disableGameInput();
            this.updateStatsSafely(false);
        }
    }

    // 5. IMPEDISCI RIGIOCO DOPO REFRESH
    smartGameCompletion() {
        if (this.hasPlayedToday()) {
            this.showCompletionMessage();
            this.disableGameInput();
        }
    }

    hasPlayedToday() {
        return localStorage.getItem(`played_${this.todayKey}`) === 'true';
    }

    markAsPlayedToday() {
        localStorage.setItem(`played_${this.todayKey}`, 'true');
    }

    showCompletionMessage() {
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h3 style="margin-bottom: 10px;">✅ Today's Challenge Completed!</h3>
                    <p>You already guessed today's animal. Come back tomorrow for a new challenge!</p>
                    <p style="margin-top: 15px; font-size: 0.9em; opacity: 0.8;">
                        Today's animal: <strong>${currentAnimal.animal}</strong><br>
                        Country: <strong>${currentAnimal.country}</strong>
                    </p>
                </div>
            `;
            resultElement.className = 'result win';
            resultElement.style.display = 'block';
        }
    }

    disableGameInput() {
        const inputArea = document.querySelector('.input-area');
        if (inputArea) {
            inputArea.style.opacity = '0.6';
            inputArea.style.pointerEvents = 'none';
        }
        
        const guessButton = document.querySelector('.input-area button');
        if (guessButton) {
            guessButton.textContent = '✅ Completed';
            guessButton.style.background = '#4CAF50';
        }
    }

    // 6. STATISTICHE SICURE - NON SI INCREMENTANO DOPO REFRESH
    updateStatsSafely(isWin) {
        const statsKey = `stats_${this.todayKey}`;
        const alreadyUpdated = localStorage.getItem(statsKey) === 'true';
        
        if (!alreadyUpdated) {
            if (typeof saveWin === 'function' && isWin) saveWin();
            if (typeof saveLoss === 'function' && !isWin) saveLoss();
            if (typeof updateStats === 'function') updateStats();
            
            localStorage.setItem(statsKey, 'true');
        }
    }

    // 7. MIGLIORA ESPERIENZA UTENTE
    enhanceUserExperience() {
        // Aggiungi loading state alle immagini
        const img = document.getElementById('animalImage');
        if (img) {
            img.onload = () => {
                img.style.opacity = '1';
            };
            img.onerror = () => {
                // Se l'immagine fallisce, usa l'emoji
                const animalEmojis = {
                    "Bald Eagle": "🦅", "Giant Panda": "🐼", "Red Kangaroo": "🦘",
                    "Bengal Tiger": "🐯", "Brown Bear": "🐻", "Lion": "🦁",
                    "Jaguar": "🐆", "Beaver": "🦫"
                };
                const emoji = animalEmojis[currentAnimal.animal] || '🐾';
                img.style.display = 'none';
                document.querySelector('.animal-image').innerHTML = 
                    `<div style="font-size: 80px;">${emoji}</div>`;
            };
        }

        // Migliora gli hint
        const hints = document.querySelectorAll('.hint');
        hints.forEach((hint, index) => {
            hint.style.transition = 'all 0.5s ease';
        });
    }
}

// ==================== 
// INIZIALIZZAZIONE SICURA
// ====================

// Evita doppie inizializzazioni
if (!window.perfectGameInitialized) {
    window.perfectGameInitialized = true;
    
    document.addEventListener('DOMContentLoaded', function() {
        // Aspetta un po' che il gioco originale si carichi
        setTimeout(() => {
            new PerfectAnimalGuesser();
        }, 500);
    });

    // Backup per sicurezza
    setTimeout(() => {
        if (window.currentAnimal && !window.perfectGameRunning) {
            new PerfectAnimalGuesser();
            window.perfectGameRunning = true;
        }
    }, 2000);
}

console.log('🎮 Animal Guesser Perfected - Caricato e pronto!');
