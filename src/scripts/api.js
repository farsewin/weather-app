
const WEATHER_API_KEY = process.env.VISUAL_CROSSING_API_KEY;

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;


export async function getWeather(location, unit = 'c') {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unit === 'c' ? 'metric' : 'us'}&key=${WEATHER_API_KEY}&contentType=json`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    location: data.resolvedAddress,
    description: data.currentConditions.conditions,
    temp: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    timezone: data.timezone,
    icon: data.currentConditions.icon,
  };
}

export async function getGif(description) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${encodeURIComponent(description)}`;
  const res = await fetch(url, { mode: 'cors' });
  const data = await res.json();
  return data.data.images.original.url;
}
