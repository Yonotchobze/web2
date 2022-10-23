const couleurs = ["red", "orange", "green", "orange"];

function colorLoop() {
    couleurs.forEach(couleur => {
        let balise = document.querySelector("." + couleur);
        balise.style.backgroundColor = couleur;
        balise.style.backgroundColor = "white";
    });
};

colorLoop();