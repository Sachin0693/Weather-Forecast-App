import React from "react";
import { useWeather } from "../context/weather";

const Input = () => {
  const weather = useWeather();
  return (
        <input
        class="btn1 border-2 rounded-lg p-2 "
        placeholder="Search Here"
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
  );
};

export default Input;