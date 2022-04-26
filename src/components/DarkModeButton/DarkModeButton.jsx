import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkModeContext/DarkThemeContext";

const DarkModeButton = () => {
  const { darkMode, setDarkMode, getClassName } = useContext(DarkThemeContext);

  let theClassName = getClassName("darkModeButton");

  const handleClick = () => {
    // if darkMode is true, set to false, else, set to true
    setDarkMode(darkMode ? false : true);
  };

  //   useEffect(() => {}, [darkMode]);

  return (
    <>
      <button onClick={handleClick} className={theClassName}>
        DARK MODE
      </button>
    </>
  );
};

export default DarkModeButton;
