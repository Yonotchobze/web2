var clickCounter = 0;

function incrementClick() {
    clickCounter++;
    displayPopup();
}

function displayPopup() {
    if (5 <= clickCounter < 10) {
        alert("Bravo, bel échauffement !")
    }
    if (10 <= clickCounter) {
        alert("Vous êtes passé maître en l'art du clic ! ")
    }
}