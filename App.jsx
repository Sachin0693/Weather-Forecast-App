import Input from './components/input';
import { useEffect } from 'react';
import Button from './components/button';
import Card from './components/card';
import './App.css'
import { useWeather } from './context/weather';


function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchUserCurrentLocationData();
  },[]);


  return (
      <div class="card flex-col p-4 shadow-lg rounded-xl">
        <h1 class="text-pretty font-bold text-center text-2xl mb-4 mt-2">WEATHER FORECAST</h1>
        <div class="w-full flex justify-center items-center">
        <Input />
        <Button onClick={weather.fetchData} value="Search"/>
        </div>
        <Card />
        <div class="refresh_btn"><Button onClick={weather.fetchUserCurrentLocationData} value="Refresh"/></div>
      </div>
  )
}

export default App;