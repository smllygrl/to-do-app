import DarkModeButton from "../DarkModeButton/DarkModeButton";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
import WeatherContent from "../WeatherContent/WeatherContent";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext/DarkThemeContext";

const NavBar = () => {
  const { getClassName } = useContext(DarkThemeContext);
  return (
    <div className={getClassName("navBar")}>
      <div className={getClassName("navBar__darkMode")}>
        <DarkModeButton />
      </div>
      <div className={getClassName("navBar__weatherInput")}>
        <WeatherWidget />
      </div>
      <div className={getClassName("navBar__weatherContent")}>
        <WeatherContent />
      </div>
    </div>
  );
};

export default NavBar;
