import { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext/WeatherContext";

const WeatherContent = () => {
  const { weather, postcode } = useContext(WeatherContext);

  useEffect(() => {}, [weather]);

  return (
    // be invisible until weather has a value
    <div>
      {postcode}:{weather}
    </div>
  );
};

export default WeatherContent;
