import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkModeContext/DarkThemeContext";

const SignUpButton = () => {
  const { getClassName } = useContext(DarkThemeContext);

  let theClassName = getClassName("signUpButton");

  return (
    <Link to="/signup">
      <button className={theClassName}>SIGN UP</button>
    </Link>
  );
};

export default SignUpButton;
