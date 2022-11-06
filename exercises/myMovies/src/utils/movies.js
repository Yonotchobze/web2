const films = [];

function addOneMovie(nTitle, nDuration, nBudget, nLink) {
    films.push({
        title: nTitle,
        duration: nDuration,
        budget: nBudget,
        link: nLink,
    });
};

function readAllMovies() {
    return films;
};

export {addOneMovie, readAllMovies};