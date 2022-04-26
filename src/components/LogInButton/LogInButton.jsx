import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkThemeContext } from "../../context/DarkModeContext/DarkThemeContext";

const LogInButton = ({ buttonName }) => {
  const { getClassName } = useContext(DarkThemeContext);

  let theClassName = getClassName("logInButton");

  return (
    <Link to="/user">
      <button className={theClassName}>{buttonName}</button>
    </Link>
  );
};

export default LogInButton;
