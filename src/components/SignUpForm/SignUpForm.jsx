import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext/DarkThemeContext";

const SignUpForm = () => {
  const { getClassName } = useContext(DarkThemeContext);

  return (
    <div className={getClassName("signUpForm")}>
      <form className={getClassName("signUpForm__form")}>
        <input
          className={getClassName("signUpForm__input")}
          placeholder="Name"
        ></input>
        <input
          className={getClassName("signUpForm__input")}
          placeholder="Email"
        ></input>
        <input
          className={getClassName("signUpForm__input")}
          placeholder="Password"
        ></input>
      </form>
    </div>
  );
};

export default SignUpForm;
