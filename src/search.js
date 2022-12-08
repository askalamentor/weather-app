import { getWeatherData } from './apiFunctions';

// form elements
const form = document.querySelector('form');
const search = document.querySelector('#search-city');
const searchError = document.querySelector('#search-error');

function searchCity() {
  // create city
  let city = '';

  form.addEventListener('submit', (event) => {
    // invalid user input
    if (!search.validity.valid) {
      showError();
      event.preventDefault();

      // valid user input
    } else {
      // get user input
      city = document.querySelector('#search-city').value;
      getWeatherData(city);

      // clear if city found
      searchError.textContent = '';
      event.preventDefault();
    }
  });
}

function showError(error) {
  // if user enters invalid input
  if (search.validity.valueMissing || error) {
    searchError.textContent = 'No matching location found!';
  }
  searchError.className = 'error active';
}

export { searchCity, showError };
