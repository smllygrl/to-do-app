import {
  securePassword,
  checkLength,
} from "../../helpers/validation/password/passwordHelp";

import { validCharacters } from "../../helpers/validation/username/usernameHelp";

const LogInForm = () => {
  // INPUT TESTING NOT SUBMIT TESTING

  const handlePasswordChange = (event) => {
    let tempPswrd = event.target.value;
    validCharacters(tempPswrd);
    checkLength(tempPswrd);
    if (tempPswrd.length >= 5) {
      securePassword(tempPswrd);
    }
  };

  const handleUserNameChange = (event) => {
    let tempUserName = event.target.value;
    validCharacters(tempUserName);
  };

  return (
    <div data-testid="login-1">
      <form name="logIn">
        <input placeholder="Username" onChange={handleUserNameChange}></input>
        <input placeholder="Password" onChange={handlePasswordChange}></input>
      </form>
    </div>
  );
};

export default LogInForm;
