import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext/WeatherContext";
import WeatherContent from "../WeatherContent/WeatherContent";
import { validPostcode } from "../../helpers/validation/postcode/validPostcode";

const WeatherWidget = () => {
  const {
    getName,
    postcode,
    setPostcode,
    getWeather,
    getRawWeather,
    getDescription,
    description,
  } = useContext(WeatherContext);

  const handleChange = (event) => {
    let tempPostcode = event.target.value;
    setPostcode(tempPostcode);
  };

  const handleSubmit = () => {
    if (validPostcode(postcode)) {
      getRawWeather();
      getWeather();
      getName();
      getDescription();
    }
  };

  return (
    <div>
      <input placeholder="Postcode" onChange={handleChange} />
      <button onClick={handleSubmit}>GET WEATHER</button>
      <div>
        <WeatherContent />
      </div>
    </div>
  );
};

export default WeatherWidget;
