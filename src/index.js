import './style.css';
import { getWeatherData } from './apiFunctions';
import { searchCity } from './search';

window.addEventListener('DOMContentLoaded', getWeatherData(), searchCity());
