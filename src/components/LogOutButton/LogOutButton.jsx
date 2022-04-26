import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext/DarkThemeContext";

const LogOutButton = () => {
  // takes user to login/ sign up page
  const { getClassName } = useContext(DarkThemeContext);

  let theClassName = getClassName("logOutButton");
  return (
    <Link to="/">
      <button className={theClassName}>LOG OUT</button>
    </Link>
  );
};

export default LogOutButton;
