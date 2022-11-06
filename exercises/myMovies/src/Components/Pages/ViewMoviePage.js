import { clearPage } from '../../utils/render';
import {readAllMovies} from '../../utils/movies';

const ViewMoviePage = () => {
  clearPage();
  renderMovieList();
};

function renderMovieList() {
  const movieList = readAllMovies();
  const main = document.querySelector('main');
  const tbody = document.createElement('tbody');
  const table = document.createElement('table');
  table.className = 'table table-bordered';
  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Duration (min)</th>
        <th scope="col">Budget (million)</th>
      </tr>
    </thead>`;

  movieList?.forEach(movie => {
    const tr = document.createElement('tr');

    const titleWrapper = document.createElement('td');
    const title = document.createElement('a');
    title.href = movie.link;
    title.innerText = movie.title;
    titleWrapper.appendChild(title);

    const duration = document.createElement('td');
    duration.innerText = movie.duration;

    const budget = document.createElement('td');
    budget.innerText = movie.budget;

    tr.appendChild(titleWrapper);
    tr.appendChild(duration);
    tr.appendChild(budget);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  main.appendChild(table);
}

export default ViewMoviePage;