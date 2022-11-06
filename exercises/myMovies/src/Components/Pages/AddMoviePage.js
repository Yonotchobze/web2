import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import {addOneMovie} from '../../utils/movies';

const AddMoviePage = () => {
  clearPage();
  renderAddMovieForm();
};

function renderAddMovieForm() {
  const main = document.querySelector('main');
  const form = document.createElement('form');
  
  form.innerHTML = `
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Enter the title of the movie" required="required">
    </div> <br>
    <div class="form-group">
      <label for="duration">Duration (minutes)</label>
      <input type="number" class="form-control" id="duration" placeholder="Enter the duration" required="required">
    </div> <br>
    <div class="form-group">
      <label for="budget">Budget (millions)</label>
      <input type="number" class="form-control" id="budget" placeholder="Enter the budget" required="required">
    </div> <br>
    <div class="form-group">
      <label for="link">Link to IMDb</label>
      <input type="text" class="form-control" id="link" placeholder="Enter the link" required="required">
    </div> <br>`

  const submit = document.createElement('input');
  submit.value = 'Add new movie';
  submit.type = "submit";
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    addOneMovie(document.getElementById('title').value, document.getElementById('duration').value, document.getElementById('budget').value, document.getElementById('link').value);
    Navigate('/movies');
  });

  form.appendChild(submit);
  main.appendChild(form);
}

export default AddMoviePage;
