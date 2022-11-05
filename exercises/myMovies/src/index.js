/* eslint-disable no-plusplus */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import knyImage from './img/DemonSlayer.jpg';
import opImage from './img/OnePieceRed.jpg';

const FILMS = [
    {
        id: 1,
        title: "Demon Slayer: Le Train de l'Infini",
        img: knyImage,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        id: 2,
        title: "One Piece: Red",
        img: opImage,
        description: "description op red"
    },
    {
        id: 3,
        title: "One Piece: Red",
        img: opImage,
        description: "description op red "
    },
]; 

getFilmsAsNodes(FILMS);

function getFilmsAsNodes(films) {

    const main = document.querySelector('main');
    const uList = document.createElement('ul');
    uList.className = "list-group list-group-flush";
    uList.id = "liste_films";
    const ourFilms = document.createElement('li');
    const titleText = document.createElement('p');
    titleText.className = "h1";
    titleText.innerText = "Nos films";
    ourFilms.appendChild(titleText);
    uList.appendChild(ourFilms);

    films?.forEach(film => {
        const line = document.createElement('li');
        line.className = "media list-group-item d-inline-flex align-content-stretch";
        const image = document.createElement('img');
        image.src = film.img;
        image.className = "mr-3";
        const textHolder = document.createElement('div');
        textHolder.className = "media-body d-flex flex-column m-3 mt-1 mb-1";
        const filmTitle = document.createElement('h5');
        filmTitle.className = "mt-0 mb-1";
        filmTitle.innerText = film.title;
        textHolder.appendChild(filmTitle);
        const filmDescription = document.createElement('p');
        filmDescription.innerText = film.description;
        textHolder.appendChild(filmDescription);
        line.appendChild(image);
        line.appendChild(textHolder);
        uList.appendChild(line);
    }); 

    main.appendChild(uList);
};

/*
const createTableForm = document.getElementById('createTableForm');
createTableForm.addEventListener('submit', renderTableFromForm, false);

function renderTableFromForm(event) {
    event.preventDefault();
    const main = document.querySelector('main');
    const numberOfLines = parseInt(document.getElementById('lineNumber').value, 10);
    const numberOfColumns = parseInt(document.getElementById('columnNumber').value, 10);
    const initString = document.getElementById('initString').value;
    const tableWrapper = document.createElement('div');
    const table = document.createElement('table');
    table.className = 'table table-bordered';
    
    for (let i = 0; i < numberOfLines; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < numberOfColumns; j++) {
            const td = document.createElement('td');
            td.innerText = `${initString}[${i}][${j}]`;
            tr.appendChild(td);
        };
        table.appendChild(tr);
    };

    tableWrapper.appendChild(table);
    main.appendChild(tableWrapper);
}; */