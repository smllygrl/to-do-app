import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [postcode, setPostcode] = useState("");
  const [weather, setWeather] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // const API_KEY = "da85effc916513909a80249aae6bc673";
  // const COUNTRY_CODE = "AU";
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${postcode},au&appid=da85effc916513909a80249aae6bc673&units=metric`;

  const getName = async () => {
    fetch(WEATHER_URL)
      .then((weatherResponse) => weatherResponse.json())
      .then((json) => setName(json.name));
  };

  const getDescription = async () => {
    fetch(WEATHER_URL)
      .then((weatherResponse) => weatherResponse.json())
      .then((json) => setDescription(json.weather.description))
      .then((description) => console.log(`description: ${description}`));
  };

  const getWeather = async () => {
    fetch(WEATHER_URL)
      .then((weatherResponse) => weatherResponse.json())
      .then((json) => setWeather(json.main.temp));
  };

  const getRawWeather = async () => {
    fetch(WEATHER_URL)
      .then((weatherResponse) => weatherResponse.json())
      .then((json) => console.log(json));
  };

  const value = {
    postcode,
    setPostcode,
    weather,
    setWeather,
    getWeather,
    getRawWeather,
    getName,
    name,
    description,
    getDescription,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
