// MIGLIORAMENTI PER IL GIOCO

// 1. BOTTONE DISABILITATO FINO A SELEZIONE
function setupButtonControl() {
    const input = document.getElementById('countryInput');
    const button = document.querySelector('.input-area button');
    
    button.disabled = true;
    button.style.opacity = '0.6';
    button.style.cursor = 'not-allowed';
    
    input.addEventListener('input', function() {
        const selectedCountry = animalsData.find(animal => 
            animal.country.toLowerCase() === this.value.toLowerCase().trim()
        );
        
        if (selectedCountry) {
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        } else {
            button.disabled = true;
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
        }
    });
}

// 2. CORREGGI IMMAGINI AUTOMATICAMENTE
function correctImages() {
    if (currentAnimal && imageCorrections[currentAnimal.country]) {
        const img = document.getElementById('animalImage');
        img.src = imageCorrections[currentAnimal.country];
    }
}

// 3. BLOCCA RIGIOCO DOPO AGGIORNAMENTO
function preventReplay() {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem('lastPlayedDate');
    
    if (lastPlayed === today && gameWon) {
        document.querySelector('.input-area').style.display = 'none';
        document.getElementById('result').textContent = `🎯 You already played today! Come back tomorrow for a new animal!`;
        document.getElementById('result').className = 'result win';
        document.getElementById('result').style.display = 'block';
    }
}

// 4. RIMUOVI PUBBLICITÀ
function removeAds() {
    const originalCheckGuess = window.checkGuess;
    
    window.checkGuess = function() {
        if (gameWon) return;

        const input = document.getElementById('countryInput');
        const guess = input.value.trim().toLowerCase();
        const correctCountry = currentAnimal.country.toLowerCase();

        document.getElementById('autocomplete').style.display = 'none';

        if (guess === correctCountry) {
            document.getElementById('result').textContent = `🎉 Correct! It's ${currentAnimal.country}!`;
            document.getElementById('result').className = 'result win';
            gameWon = true;
            saveWin();
            updateStats();
        } else {
            errors++;
            document.getElementById('errorCount').textContent = errors;
            
            revealHint(errors);
            
            if (errors >= 5) {
                // SENZA PUBBLICITÀ - RIVELA DIRETTAMENTE
                document.getElementById('result').textContent = `Game Over! The country was ${currentAnimal.country}. Better luck tomorrow!`;
                document.getElementById('result').className = 'result lose';
                saveLoss();
                updateStats();
                
                // BLOCCA ULTERIORI TENTATIVI
                document.querySelector('.input-area').style.display = 'none';
            }
            
            input.value = '';
        }
    };
}

// INIZIALIZZA TUTTI I MIGLIORAMENTI
function initializeEnhancements() {
    if (typeof ENABLE_AUTOCOMPLETE_ONLY !== 'undefined' && ENABLE_AUTOCOMPLETE_ONLY) {
        setupButtonControl();
    }
    
    if (typeof SHOW_ADS !== 'undefined' && !SHOW_ADS) {
        removeAds();
    }
    
    // Correggi immagini dopo che l'animale è stato caricato
    setTimeout(correctImages, 100);
    
    // Previeni rigioco
    preventReplay();
}

// AVVIA QUANDO LA PAGINA È CARICATA
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeEnhancements, 500);
});
