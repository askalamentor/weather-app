import { getWeatherData } from './apiFunctions';

const form = document.querySelector('form');
const search = document.querySelector('#search-city');
const searchError = document.querySelector('#search-error');

function searchCity() {
  let city = '';
  form.addEventListener('submit', (event) => {
    if (!search.validity.valid) {
      showError();
      event.preventDefault();
    } else {
      city = document.querySelector('#search-city').value;
      getWeatherData(city);
      event.preventDefault();
    }
  });
}

function showError() {
  if (search.validity.valueMissing) {
    searchError.textContent = 'No matching location found!';
  }
  searchError.className = 'error active';
}

export { searchCity };
