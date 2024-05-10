import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
  const weather = useWeather();
  return (
    <>
      <div class="shadow-md flex-col text-center justify-center items-center pb-10 rounded-lg m-2 bg-zinc-100 hover:bg-orange-100">
        <div class="img_cont">
          <img class="" src={weather.data?.current?.condition?.icon} />
        </div>
        <h2 class="text-2xl text-pretty font-bold mb-4">
          {weather.data?.current?.temp_c}°C
        </h2>
        <h5 class="text-md text-pretty font-normal">
          {weather?.data?.location?.name}, {weather?.data?.location?.region}{" "}
          {weather?.data?.location?.country}
        </h5>
      </div>
    </>
  );
};

export default Card;
