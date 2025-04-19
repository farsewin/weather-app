import './styles/main.scss';
import { getWeather, getGif } from './scripts/api';
import { renderWeather } from './scripts/dom';


// Check if service workers are supported and we're in production mode
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        //console.log('SW registered: ', registration);
      })
      .catch(() => {
        //console.log('SW registration failed: ', registrationError);
      });
  });
}

// DOM Content
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  if (app) {
    app.innerHTML = `
    <header>
      <h1>Weather Forecast</h1>
    </header>
    <div class="container">
      <form id="weatherForm" class="card">
        <input type="text" id="locationInput" placeholder="Enter location..." required />
        <select id="unitSelect">
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
        </select>
        <button type="submit" class="btn">Get Weather</button>
      </form>
      <div id="weatherDisplay" class="content"></div>
    </div>
    <footer>
      <p>${new Date().getFullYear()} Weather App</p>
    </footer>
  `;

  document.getElementById('weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const location = document.getElementById('locationInput').value;
    const unit = document.getElementById('unitSelect').value;
  
    const weatherData = await getWeather(location, unit);
    const gifUrl = await getGif(weatherData.description);
  
    renderWeather(weatherData, gifUrl, unit);
  });
  }
});

