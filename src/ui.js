function createWeatherCard() {
  // main elements
  const todayWeather = document.querySelector('.today-weather');
  const container = document.createElement('div');
  const header = document.createElement('div');
  const tempArea = document.createElement('div');
  const detailArea = document.createElement('div');
  // append
  todayWeather.appendChild(container);
  container.appendChild(header);
  container.appendChild(tempArea);
  container.appendChild(detailArea);
  // class
  container.classList.add('weathercard', 'card-fade-in');
  header.classList.add('weathercard-header');
  tempArea.classList.add('weathercard-temp');
  detailArea.classList.add('weathercard-detail');

  //temp area children
  const celcius = document.createElement('p');
  const celciusText = document.createElement('p');
  // append
  tempArea.appendChild(celcius);
  tempArea.appendChild(celciusText);

  // detail area children
  const description = document.createElement('div');
  const feelslike = document.createElement('div');
  const humidity = document.createElement('div');
  const subDetailVar = document.createElement('p');
  // append - class
  [description, feelslike, humidity].forEach((item) => {
    item.classList.add('subdetail');
    item.appendChild(subDetailVar);
    detailArea.appendChild(item);
  });

  return container;
}

function setWeatherCardInfo(weatherObj) {
  // delete current card if it exists
  if (document.querySelector('.today-weather').firstChild) {
    deleteWeatherCard();
  }

  // create card
  const container = createWeatherCard();
  // set weather object
  const obj = weatherObj;

  // header info
  container.childNodes[0].innerHTML = `${obj.cityName}, ${obj.country}`;
  // temp info
  container.childNodes[1].childNodes[0].innerHTML = `${Math.round(obj.temp)}`;
  container.childNodes[1].childNodes[1].innerHTML = '°C';
  // detail info
  container.childNodes[2].childNodes[0].innerHTML = `${obj.description.toUpperCase()}`;
  container.childNodes[2].childNodes[1].innerHTML = `FEELS LIKE: ${Math.round(
    obj.feelsLike
  )}°C`;
  container.childNodes[2].childNodes[2].innerHTML = `HUMIDITY: ${obj.humidity}%`;
}

function deleteWeatherCard() {
  document.querySelector('.today-weather').firstChild.remove();
}

export { setWeatherCardInfo };
