const baseURL = "https://api.weatherapi.com/v1/current.json?key=d2241292eb67486aba3161321240605";

export const weatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataForLocation = async(lat,log) => {
    const response = await fetch(`${baseURL}&q=${lat},${log}&aqi=yes`);
    return await response.json();
}