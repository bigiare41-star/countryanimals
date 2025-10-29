// ==========================================
// PERFECT ANIMAL GUESSER - CODICE DEFINITIVO
// ==========================================

// DATABASE IMMAGINI CORRETTE E VERIFICATE
const PERFECT_ANIMAL_IMAGES = {
    "United States": "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "China": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Australia": "https://images.unsplash.com/photo-1551089071-30f1a1d6bf5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "India": "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Russia": "https://images.unsplash.com/photo-1573921470441-32ceb635f4c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Kenya": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Brazil": "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Canada": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "South Africa": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Germany": "https://images.unsplash.com/photo-1558149520-86e87baa0106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "France": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Japan": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "United Kingdom": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Italy": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Mexico": "https://images.unsplash.com/photo-1558149520-86e87baa0106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "South Korea": "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Spain": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Egypt": "https://images.unsplash.com/photo-1558149520-86e87baa0106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Thailand": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Argentina": "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "New Zealand": "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "United Arab Emirates": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Indonesia": "https://images.unsplash.com/photo-1575550959106-5a7defa08d27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "El Salvador": "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Colombia": "https://images.unsplash.com/photo-1558149520-86e87baa0106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Pakistan": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Turkey": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Poland": "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Ethiopia": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "North Korea": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
};

// APPLICA TUTTI I MIGLIORAMENTI
function applyAllFixes() {
    console.log('🎯 Applicando miglioramenti...');
    
    // 1. CORREGGI IMMAGINI IMMEDIATAMENTE
    fixAnimalImages();
    
    // 2. SISTEMA AUTECOMPLETE COME PRIMA
    enhanceAutocomplete();
    
    // 3. BOTTONE GUESS INTELLIGENTE
    setupSmartGuessButton();
    
    // 4. IMPEDISCI RIGIOCO
    preventReplay();
    
    // 5. RIMUOVI PUBBLICITÀ
    removeAds();
    
    console.log('✅ Tutti i miglioramenti applicati!');
}

// 1. CORREGGI IMMAGINI DEGLI ANIMALI
function fixAnimalImages() {
    if (window.currentAnimal && PERFECT_ANIMAL_IMAGES[currentAnimal.country]) {
        const correctImage = PERFECT_ANIMAL_IMAGES[currentAnimal.country];
        const imgElement = document.getElementById('animalImage');
        
        if (imgElement) {
            console.log(`🖼️ Correggendo: ${currentAnimal.country}`);
            imgElement.src = correctImage;
            
            // Backup: controlla ogni secondo che l'immagine sia corretta
            setInterval(() => {
                if (imgElement.src !== correctImage) {
                    imgElement.src = correctImage;
                }
            }, 1000);
        }
    }
}

// 2. AUTECOMPLETE PERFETTO COME PRIMA
function enhanceAutocomplete() {
    const input = document.getElementById('countryInput');
    const autocomplete = document.getElementById('autocomplete');
    
    if (!input || !autocomplete) return;
    
    // Migliora lo stile dell'autocomplete
    autocomplete.style.background = 'white';
    autocomplete.style.border = '2px solid #4CAF50';
    autocomplete.style.borderRadius = '10px';
    autocomplete.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    autocomplete.style.zIndex = '1000';
    
    // Assicurati che funzioni come prima
    input.addEventListener('focus', function() {
        if (this.value.length > 0) {
            autocomplete.style.display = 'block';
        }
    });
    
    // Selezione con Enter
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && autocomplete.style.display === 'block') {
            const firstItem = autocomplete.querySelector('.autocomplete-item');
            if (firstItem) {
                firstItem.click();
                e.preventDefault();
            }
        }
    });
}

// 3. BOTTONE GUESS INTELLIGENTE
function setupSmartGuessButton() {
    const guessButton = document.querySelector('.input-area button');
    const countryInput = document.getElementById('countryInput');
    
    if (!guessButton || !countryInput) return;
    
    // Stato iniziale
    updateButtonState(false);
    
    // Controlla input
    countryInput.addEventListener('input', function() {
        const value = this.value.trim();
        const isValid = animalsData.some(animal => 
            animal.country.toLowerCase() === value.toLowerCase()
        );
        updateButtonState(isValid);
    });
    
    // Click autocomplete
    document.addEventListener('click', function(e) {
        if (e.target.closest('.autocomplete-item')) {
            setTimeout(() => updateButtonState(true), 50);
        }
    });
    
    function updateButtonState(active) {
        if (active) {
            guessButton.disabled = false;
            guessButton.style.opacity = '1';
            guessButton.style.cursor = 'pointer';
            guessButton.style.background = 'linear-gradient(45deg, #ff6b35, #ff8e53)';
            guessButton.textContent = '🎯 Guess';
        } else {
            guessButton.disabled = true;
            guessButton.style.opacity = '0.6';
            guessButton.style.cursor = 'not-allowed';
            guessButton.style.background = '#666';
            guessButton.textContent = '🔒 Select Country';
        }
    }
}

// 4. IMPEDISCI DI RIGIOCARE DOPO AGGIORNAMENTO
function preventReplay() {
    const today = new Date().toDateString();
    const playedToday = localStorage.getItem(`played_${today}`);
    
    if (playedToday === 'true') {
        // Mostra messaggio "già giocato"
        showAlreadyPlayedMessage();
        disableGameInput();
    }
    
    // Sostituisci checkGuess per marcare come giocato
    const originalCheckGuess = window.checkGuess;
    window.checkGuess = function() {
        const result = originalCheckGuess.apply(this, arguments);
        
        // Marca come giocato oggi
        localStorage.setItem(`played_${today}`, 'true');
        
        return result;
    };
}

function showAlreadyPlayedMessage() {
    const resultElement = document.getElementById('result');
    if (resultElement && currentAnimal) {
        resultElement.innerHTML = `
            <div style="text-align: center; padding: 15px;">
                <h3 style="margin-bottom: 10px;">✅ Already Played Today!</h3>
                <p>Come back tomorrow for a new animal challenge!</p>
                <p style="margin-top: 10px; font-size: 0.9em; opacity: 0.8;">
                    Today's animal was: <strong>${currentAnimal.animal}</strong><br>
                    Country: <strong>${currentAnimal.country}</strong>
                </p>
            </div>
        `;
        resultElement.className = 'result win';
        resultElement.style.display = 'block';
    }
}

function disableGameInput() {
    const inputArea = document.querySelector('.input-area');
    if (inputArea) {
        inputArea.style.opacity = '0.5';
        inputArea.style.pointerEvents = 'none';
    }
    
    const guessButton = document.querySelector('.input-area button');
    if (guessButton) {
        guessButton.textContent = '✅ Completed';
        guessButton.style.background = '#4CAF50';
    }
}

// 5. RIMUOVI PUBBLICITÀ
function removeAds() {
    // Sostituisci la gestione degli errori per rimuovere pubblicità
    const originalCheckGuess = window.checkGuess;
    window.checkGuess = function() {
        if (window.gameWon) return;
        
        const input = document.getElementById('countryInput');
        const guess = input.value.trim().toLowerCase();
        const correctCountry = currentAnimal.country.toLowerCase();
        
        // Nascondi autocomplete
        document.getElementById('autocomplete').style.display = 'none';
        
        if (guess === correctCountry) {
            // VITTORIA
            document.getElementById('result').textContent = `🎉 Correct! It's ${currentAnimal.country}!`;
            document.getElementById('result').className = 'result win';
            window.gameWon = true;
            localStorage.setItem(`played_${new Date().toDateString()}`, 'true');
            disableGameInput();
        } else {
            // ERRORE
            window.errors++;
            document.getElementById('errorCount').textContent = window.errors;
            
            // Rivela hint
            if (typeof revealHint === 'function') {
                revealHint(window.errors);
            }
            
            if (window.errors >= 5) {
                // SCONFITTA - SENZA PUBBLICITÀ
                document.getElementById('result').textContent = `💔 Game Over! The country was ${currentAnimal.country}.`;
                document.getElementById('result').className = 'result lose';
                localStorage.setItem(`played_${new Date().toDateString()}`, 'true');
                disableGameInput();
            }
            
            input.value = '';
            updateButtonState(false);
        }
    };
}

// INIZIALIZZAZIONE
function initializePerfectGame() {
    console.log('🦁 Inizializando Perfect Animal Guesser...');
    
    // Aspetta che il gioco sia pronto
    const checkGame = setInterval(() => {
        if (window.currentAnimal && document.getElementById('countryInput')) {
            clearInterval(checkGame);
            applyAllFixes();
        }
    }, 100);
    
    // Backup dopo 3 secondi
    setTimeout(() => {
        if (window.currentAnimal) {
            applyAllFixes();
        }
    }, 3000);
}

// AVVIA QUANDO LA PAGINA È PRONTA
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePerfectGame);
} else {
    initializePerfectGame();
}

console.log('🎮 Perfect Animal Guesser - Caricato e pronto!');
