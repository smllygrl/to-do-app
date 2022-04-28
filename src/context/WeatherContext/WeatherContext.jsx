import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [postcode, setPostcode] = useState("");
  const [weather, setWeather] = useState("");

  // getName
  // getDescription

  const value = { postcode, setPostcode, weather, setWeather };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
