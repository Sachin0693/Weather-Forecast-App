import { createContext, useContext, useState } from "react";
import { weatherDataForCity, getWeatherDataForLocation } from "../api/api.js";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await weatherDataForCity(searchCity);
    setData(response);
  };

  const fetchUserCurrentLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{ searchCity, data, setSearchCity, fetchData , fetchUserCurrentLocationData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
