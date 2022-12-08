const form = document.querySelector('form');
const search = document.querySelector('#search-city');
const searchError = document.querySelector('#search-error');

function searchCity() {
  form.addEventListener('submit', (event) => {
    if (!search.validity.valid) {
      showError();
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
