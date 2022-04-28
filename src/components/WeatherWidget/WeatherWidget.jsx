import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext/WeatherContext";
import WeatherContent from "../WeatherContent/WeatherContent";
import { validPostcode } from "../../helpers/validation/postcode/validPostcode";

const WeatherWidget = () => {
  const { postcode, setPostcode, setWeather } = useContext(WeatherContext);

  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${postcode},au&appid=da85effc916513909a80249aae6bc673&units=metric`;
  // const API_KEY = "da85effc916513909a80249aae6bc673";
  // const COUNTRY_CODE = "AU";

  // useEffect(() => {
  //   fetch
  // })

  const handleChange = (event) => {
    let tempPostcode = event.target.value;
    setPostcode(tempPostcode);
  };

  const handleSubmit = () => {
    if (validPostcode(postcode)) {
      callWeatherAPI();
    }

    // async
    // make api call
    // clean data
    // render temp
    // maybe images depending on temp??
  };

  const callWeatherAPI = async () => {
    fetch(WEATHER_URL)
      .then((weatherResponse) => weatherResponse.json())
      .then((json) => setWeather(json.main.temp));
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
