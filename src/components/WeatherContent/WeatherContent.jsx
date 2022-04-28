import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext/WeatherContext";

const WeatherContent = () => {
  const { weather, name, description } = useContext(WeatherContext);

  // useEffect(() => {}, [weather]);

  return (
    // be invisible until postcode is valid
    <div>
      <p>
        Temp at {name} is {weather}c.
      </p>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default WeatherContent;
