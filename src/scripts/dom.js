export function renderWeather(data, gifUrl, unit) {
    const display = document.getElementById('weatherDisplay');
  
    display.innerHTML = `
      <div class="card">
        <h2>${data.location}</h2>
        <p>${data.description}</p>
        <p>Temperature: ${data.temp}°${unit.toUpperCase()}</p>
        <p>Feels Like: ${data.feelsLike}°${unit.toUpperCase()}</p>
        <p>Timezone: ${data.timezone}</p>
        <p>Time: ${new Date().toLocaleTimeString('en-GB',{timeZone:data.timezone})}</p>
        ${gifUrl ? `<img src="${gifUrl}" alt="weather gif" style="max-width: 100%;"/>` : ''}
      </div>
    `;
  }
  