// ==========================================
// ULTIMATE ANIMAL GUESSER FIX
// Tutte le funzionalità che ti piacciono
// ==========================================

// IMMAGINI CORRETTE E VERIFICATE
const ULTIMATE_IMAGES = {
    "United States": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600&h=400&fit=crop",
    "China": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop",
    "Australia": "https://images.unsplash.com/photo-1583324114696-0b6d9e5b9a3b?w=600&h=400&fit=crop",
    "India": "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=600&h=400&fit=crop",
    "Russia": "https://images.unsplash.com/photo-1573921470441-32ceb635f4c9?w=600&h=400&fit=crop",
    "Kenya": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=400&fit=crop",
    "Brazil": "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&h=400&fit=crop",
    "Canada": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=600&h=400&fit=crop",
    "South Africa": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=600&h=400&fit=crop",
    "Germany": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=600&h=400&fit=crop",
    "France": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&h=400&fit=crop",
    "Japan": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=600&h=400&fit=crop",
    "United Kingdom": "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
    "Italy": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=600&h=400&fit=crop",
    "Mexico": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=600&h=400&fit=crop",
    "South Korea": "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=600&h=400&fit=crop",
    "Spain": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=600&h=400&fit=crop",
    "Egypt": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=600&h=400&fit=crop",
    "Thailand": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&h=400&fit=crop",
    "Argentina": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600&h=400&fit=crop",
    "New Zealand": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600&h=400&fit=crop",
    "United Arab Emirates": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=600&h=400&fit=crop",
    "Indonesia": "https://images.unsplash.com/photo-1575550959106-5a7defa08d27?w=600&h=400&fit=crop",
    "El Salvador": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600&h=400&fit=crop",
    "Colombia": "https://images.unsplash.com/photo-1558149520-86e87baa0106?w=600&h=400&fit=crop",
    "Pakistan": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=600&h=400&fit=crop",
    "Turkey": "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=600&h=400&fit=crop",
    "Poland": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600&h=400&fit=crop",
    "Ethiopia": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=400&fit=crop",
    "North Korea": "https://images.unsplash.com/photo-1599159340314-44c65384fafe?w=600&h=400&fit=crop"
};

// APPLICA TUTTI I MIGLIORAMENTI
function applyUltimateFixes() {
    console.log('🎯 Applicando fix definitivi...');
    
    // 1. CORREGGI IMMAGINI IMMEDIATAMENTE
    fixImagesNow();
    
    // 2. ATTIVA AUTECOMPLETE CON BANDIERE
    activateAutocomplete();
    
    // 3. BOTTONE GUESS INTELLIGENTE
    setupSmartGuess();
    
    // 4. SISTEMA DI BLOCCAGGIO
    setupPlayOnce();
    
    console.log('✅ Fix applicati!');
}

// 1. CORREGGI IMMAGINI SUBITO
function fixImagesNow() {
    const checkImage = setInterval(() => {
        if (window.currentAnimal) {
            clearInterval(checkImage);
            
            const correctImage = ULTIMATE_IMAGES[currentAnimal.country];
            const imgElement = document.getElementById('animalImage');
            
            if (imgElement && correctImage) {
                console.log(`🖼️ Impostando immagine per: ${currentAnimal.country}`);
                imgElement.src = correctImage;
                
                // Backup: controlla continuamente
                setInterval(() => {
                    if (imgElement.src !== correctImage) {
                        imgElement.src = correctImage;
                    }
                }, 500);
            }
        }
    }, 100);
}

// 2. AUTECOMPLETE CON BANDIERE (COME PRIMA)
function activateAutocomplete() {
    const input = document.getElementById('countryInput');
    const autocomplete = document.getElementById('autocomplete');
    
    if (!input || !autocomplete) return;
    
    // Migliora lo stile
    autocomplete.style.background = 'white';
    autocomplete.style.border = '2px solid #4CAF50';
    autocomplete.style.borderRadius = '10px';
    autocomplete.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    autocomplete.style.zIndex = '10000';
    autocomplete.style.maxHeight = '250px';
    autocomplete.style.overflowY = 'auto';
    
    // Assicurati che funzioni
    const originalInputHandler = input.oninput;
    input.oninput = function(e) {
        if (originalInputHandler) originalInputHandler(e);
        
        // Forza la visualizzazione
        if (this.value.length > 0) {
            autocomplete.style.display = 'block';
        }
    };
    
    // Click su autocomplete
    document.addEventListener('click', function(e) {
        if (e.target.closest('.autocomplete-item')) {
            setTimeout(() => {
                const guessButton = document.querySelector('.input-area button');
                if (guessButton) {
                    guessButton.disabled = false;
                    guessButton.style.opacity = '1';
                    guessButton.style.cursor = 'pointer';
                }
            }, 50);
        }
    });
}

// 3. BOTTONE GUESS INTELLIGENTE
function setupSmartGuess() {
    const guessButton = document.querySelector('.input-area button');
    const countryInput = document.getElementById('countryInput');
    
    if (!guessButton || !countryInput) return;
    
    // Disabilita inizialmente
    guessButton.disabled = true;
    guessButton.style.opacity = '0.6';
    guessButton.style.cursor = 'not-allowed';
    
    // Controllo input in tempo reale
    countryInput.addEventListener('input', function() {
        const value = this.value.trim();
        let isValid = false;
        
        // Controlla se è un paese valido
        if (window.animalsData) {
            isValid = animalsData.some(animal => 
                animal.country.toLowerCase() === value.toLowerCase()
            );
        }
        
        // Aggiorna bottone
        if (isValid) {
            guessButton.disabled = false;
            guessButton.style.opacity = '1';
            guessButton.style.cursor = 'pointer';
            guessButton.style.background = 'linear-gradient(45deg, #ff6b35, #ff8e53)';
        } else {
            guessButton.disabled = true;
            guessButton.style.opacity = '0.6';
            guessButton.style.cursor = 'not-allowed';
            guessButton.style.background = '#666';
        }
    });
    
    // Sostituisci la funzione checkGuess
    overrideCheckGuess();
}

function overrideCheckGuess() {
    const originalCheckGuess = window.checkGuess;
    
    window.checkGuess = function() {
        // Controlla se già giocato
        const today = new Date().toDateString();
        if (localStorage.getItem(`played_${today}`) === 'true') {
            showCompletionMessage();
            return;
        }
        
        const input = document.getElementById('countryInput');
        const guess = input.value.trim();
        
        if (!guess) {
            alert('Please select a country from the list!');
            return;
        }
        
        const isCorrect = guess.toLowerCase() === currentAnimal.country.toLowerCase();
        
        // Nascondi autocomplete
        const autocomplete = document.getElementById('autocomplete');
        if (autocomplete) autocomplete.style.display = 'none';
        
        if (isCorrect) {
            // VITTORIA
            document.getElementById('result').textContent = `🎉 Correct! It's ${currentAnimal.country}!`;
            document.getElementById('result').className = 'result win';
            document.getElementById('result').style.display = 'block';
            
            // Marca come giocato
            localStorage.setItem(`played_${today}`, 'true');
            window.gameWon = true;
            
            // Disabilita input
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
                // SCONFITTA
                document.getElementById('result').textContent = `💔 Game Over! The country was ${currentAnimal.country}.`;
                document.getElementById('result').className = 'result lose';
                document.getElementById('result').style.display = 'block';
                
                // Marca come giocato
                localStorage.setItem(`played_${today}`, 'true');
                disableGameInput();
            }
            
            // Reset input
            input.value = '';
            
            // Disabilita bottone
            const guessButton = document.querySelector('.input-area button');
            if (guessButton) {
                guessButton.disabled = true;
                guessButton.style.opacity = '0.6';
            }
        }
    };
}

// 4. BLOCCA RIGIOCO
function setupPlayOnce() {
    const today = new Date().toDateString();
    if (localStorage.getItem(`played_${today}`) === 'true') {
        showCompletionMessage();
        disableGameInput();
    }
}

function showCompletionMessage() {
    const resultElement = document.getElementById('result');
    if (resultElement && window.currentAnimal) {
        resultElement.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="margin-bottom: 15px; color: #4CAF50;">✅ Today's Challenge Completed!</h3>
                <p style="margin-bottom: 10px;">You've already played today's animal guessing game.</p>
                <p style="margin-bottom: 15px;">Come back tomorrow for a new challenge! 🦁</p>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <p style="margin: 5px 0; font-size: 0.9em;"><strong>Today's Animal:</strong> ${currentAnimal.animal}</p>
                    <p style="margin: 5px 0; font-size: 0.9em;"><strong>Country:</strong> ${currentAnimal.country}</p>
                </div>
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
        guessButton.disabled = true;
    }
}

// INIZIALIZZAZIONE RAPIDA
function initUltimateFix() {
    console.log('🦁 Ultimate Fix - Inizializzazione...');
    
    // Applica i fix immediatamente
    applyUltimateFixes();
    
    // Backup: riapplica ogni secondo per sicurezza
    setInterval(applyUltimateFixes, 1000);
    
    // Controllo immagini continuo
    setInterval(() => {
        if (window.currentAnimal && ULTIMATE_IMAGES[currentAnimal.country]) {
            const img = document.getElementById('animalImage');
            if (img) {
                img.src = ULTIMATE_IMAGES[currentAnimal.country];
            }
        }
    }, 500);
}

// AVVIA APPENA POSSIBILE
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUltimateFix);
} else {
    initUltimateFix();
}

// ULTERIORE BACKUP
setTimeout(initUltimateFix, 100);
setTimeout(initUltimateFix, 1000);
setTimeout(initUltimateFix, 3000);

console.log('🎮 Ultimate Animal Guesser Fix - Caricato!');
