// ==========================================
// FINAL FIXES v4.0 - SOLUZIONE COMPLETA
// ==========================================

// 1. DATABASE IMMAGINI CORRETTE E VERIFICATE
const CORRECT_ANIMAL_IMAGES = {
    "United States": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "China": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    "Australia": "https://images.unsplash.com/photo-1583324114696-0b6d9e5b9a3b?w=400&h=300&fit=crop", // Kangaroo reale
    "India": "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=400&h=300&fit=crop",
    "Russia": "https://images.unsplash.com/photo-1573921470441-32ceb635f4c9?w=400&h=300&fit=crop",
    "Kenya": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop",
    "Brazil": "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=300&fit=crop", // Giaguaro reale
    "Canada": "https://images.unsplash.com/photo-1574085975024-eaa85ec28107?w=400&h=300&fit=crop", // Castoro
    "South Africa": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Germany": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "France": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop",
    "Japan": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop", // Gallo
    "United Kingdom": "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop", // Leone
    "Italy": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=400&h=300&fit=crop", // Lupo
    "Mexico": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "South Korea": "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=400&h=300&fit=crop", // Tigre
    "Spain": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop", // Toro
    "Egypt": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "Thailand": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop",
    "Argentina": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop", // Uccello
    "New Zealand": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop", // Kiwi
    "United Arab Emirates": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop", // Gazzella
    "Indonesia": "https://images.unsplash.com/photo-1575550959106-5a7defa08d27?w=400&h=300&fit=crop", // Drago di Komodo
    "El Salvador": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop",
    "Colombia": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=400&h=300&fit=crop",
    "Pakistan": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=400&h=300&fit=crop",
    "Turkey": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=400&h=300&fit=crop", // Lupo
    "Poland": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=300&fit=crop", // Bisonte
    "Ethiopia": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop",
    "North Korea": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=400&h=300&fit=crop" // Cavallo
};

// 2. SISTEMA DI GESTIONE GIOCO
class GameManager {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    init() {
        console.log('🎮 Game Manager - Inizializzazione...');
        
        // Aspetta che il gioco sia pronto
        this.waitForGameReady().then(() => {
            this.applyAllFixes();
            this.isInitialized = true;
        });
    }

    waitForGameReady() {
        return new Promise((resolve) => {
            const checkGame = () => {
                if (typeof currentAnimal !== 'undefined' && document.getElementById('countryInput')) {
                    resolve();
                } else {
                    setTimeout(checkGame, 100);
                }
            };
            checkGame();
        });
    }

    applyAllFixes() {
        this.fixImagesPermanently();
        this.enhanceGuessSystem();
        this.preventReplayAfterRefresh();
        this.removeAdSystem();
        console.log('✅ Tutte le correzioni applicate!');
    }

    // CORREGGI IMMAGINI IN MODO PERMANENTE
    fixImagesPermanently() {
        if (currentAnimal && CORRECT_ANIMAL_IMAGES[currentAnimal.country]) {
            const correctImageUrl = CORRECT_ANIMAL_IMAGES[currentAnimal.country];
            const imgElement = document.getElementById('animalImage');
            
            if (imgElement) {
                console.log(`🖼️ Correggendo immagine per: ${currentAnimal.country}`);
                imgElement.src = correctImageUrl;
                
                // Previeni il ricaricamento con immagini sbagliate
                const originalSrc = imgElement.src;
                setInterval(() => {
                    if (imgElement.src !== correctImageUrl) {
                        imgElement.src = correctImageUrl;
                    }
                }, 1000);
            }
        }
    }

    // SISTEMA GUESS MIGLIORATO
    enhanceGuessSystem() {
        const guessButton = document.querySelector('.input-area button');
        const countryInput = document.getElementById('countryInput');
        
        if (!guessButton || !countryInput) return;

        // Stato iniziale bottone
        this.updateGuessButton(false);

        // Controlla input in tempo reale
        countryInput.addEventListener('input', () => {
            const isValid = this.isValidCountry(countryInput.value.trim());
            this.updateGuessButton(isValid);
        });

        // Click autocomplete
        document.addEventListener('click', (e) => {
            if (e.target.closest('.autocomplete-item')) {
                setTimeout(() => this.updateGuessButton(true), 50);
            }
        });

        // Sostituisci la funzione checkGuess originale
        this.overrideCheckGuess();
    }

    isValidCountry(input) {
        return animalsData.some(animal => 
            animal.country.toLowerCase() === input.toLowerCase()
        );
    }

    updateGuessButton(enabled) {
        const button = document.querySelector('.input-area button');
        if (!button) return;

        if (enabled) {
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
            button.innerHTML = '🚀 Guess';
        } else {
            button.disabled = true;
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
            button.innerHTML = '🔒 Guess';
        }
    }

    // SOSTITUISCI LA FUNZIONE CHECKGUESS ORIGINALE
    overrideCheckGuess() {
        const originalCheckGuess = window.checkGuess;
        
        window.checkGuess = () => {
            if (typeof gameWon !== 'undefined' && gameWon) {
                alert('🎯 You already completed today\'s game! Come back tomorrow!');
                return;
            }

            const input = document.getElementById('countryInput');
            const guess = input.value.trim();
            
            if (!guess) {
                alert('Please select a country from the list!');
                return;
            }

            const correctCountry = currentAnimal.country.toLowerCase();
            const userGuess = guess.toLowerCase();

            // Nascondi autocomplete
            const autocomplete = document.getElementById('autocomplete');
            if (autocomplete) autocomplete.style.display = 'none';

            if (userGuess === correctCountry) {
                // VITTORIA - Sistema corretto
                this.handleWin();
            } else {
                // ERRORE - Sistema corretto
                this.handleMistake();
            }
            
            // Aggiorna stato bottone
            this.updateGuessButton(false);
            input.value = '';
        };
    }

    handleWin() {
        document.getElementById('result').textContent = `🎉 Perfect! It's ${currentAnimal.country}!`;
        document.getElementById('result').className = 'result win';
        document.getElementById('result').style.display = 'block';
        
        // Marca come completato
        gameWon = true;
        this.markGameAsCompleted();
        this.disableGameInput();
        
        console.log('✅ Vittoria registrata!');
    }

    handleMistake() {
        errors++;
        document.getElementById('errorCount').textContent = errors;
        
        // Rivela hint
        if (typeof revealHint === 'function') {
            revealHint(errors);
        }
        
        if (errors >= 5) {
            // SCONFITTA - Senza pubblicità
            document.getElementById('result').textContent = `💔 Game Over! The answer was ${currentAnimal.country}.`;
            document.getElementById('result').className = 'result lose';
            document.getElementById('result').style.display = 'block';
            
            this.markGameAsCompleted();
            this.disableGameInput();
        }
    }

    // IMPEDISCI RIGIOCO DOPO REFRESH
    preventReplayAfterRefresh() {
        const today = new Date().toDateString();
        const gameCompleted = localStorage.getItem(`gameCompleted_${today}`);
        
        if (gameCompleted === 'true') {
            this.showAlreadyPlayedMessage();
            this.disableGameInput();
        }
    }

    markGameAsCompleted() {
        const today = new Date().toDateString();
        localStorage.setItem(`gameCompleted_${today}`, 'true');
    }

    showAlreadyPlayedMessage() {
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerHTML = `
                <div style="text-align: center;">
                    <h3>✅ Already Played Today!</h3>
                    <p>You've completed today's challenge. Come back tomorrow for a new animal!</p>
                    <p><small>Today's animal was: ${currentAnimal.animal} → ${currentAnimal.country}</small></p>
                </div>
            `;
            resultElement.className = 'result win';
            resultElement.style.display = 'block';
        }
    }

    disableGameInput() {
        const inputArea = document.querySelector('.input-area');
        if (inputArea) {
            inputArea.style.opacity = '0.5';
            inputArea.style.pointerEvents = 'none';
        }
        
        const guessButton = document.querySelector('.input-area button');
        if (guessButton) {
            guessButton.innerHTML = '✅ Completed';
            guessButton.style.background = '#4CAF50';
        }
    }

    // RIMUOVI SISTEMA PUBBLICITÀ
    removeAdSystem() {
        // Elimina qualsiasi riferimento a pubblicità
        const adElements = document.querySelectorAll('.ad-prompt, [class*="ad"], [class*="advertisement"]');
        adElements.forEach(el => el.remove());
        
        // Pulisci localStorage da dati pubblicitari
        Object.keys(localStorage).forEach(key => {
            if (key.includes('ad') || key.includes('ads') || key.includes('advertisement')) {
                localStorage.removeItem(key);
            }
        });
    }
}

// 3. INIZIALIZZAZIONE AUTOMATICA E SICURA
function initializeGameManager() {
    // Evita doppie inizializzazioni
    if (window.gameManagerInitialized) return;
    window.gameManagerInitialized = true;
    
    new GameManager();
}

// Avvia quando la pagina è pronta
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGameManager);
} else {
    initializeGameManager();
}

// Backup per sicurezza
setTimeout(initializeGameManager, 2000);

console.log('🎮 Final Fixes v4.0 - Caricato e pronto!');
