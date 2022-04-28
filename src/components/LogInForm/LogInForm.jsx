import {
  securePassword,
  checkLength,
} from "../../helpers/password/passwordHelp";

import { validCharacters } from "../../helpers/username/usernameHelp";

const LogInForm = () => {
  // INPUT TESTING NOT SUBMIT TESTING

  const handlePasswordChange = (event) => {
    let tempPswrd = event.target.value;
    validCharacters(tempPswrd);
    checkLength(tempPswrd);
    securePassword(tempPswrd);
  };

  const handleUserNameChange = (event) => {
    let tempUserName = event.target.value;
    validCharacters(tempUserName);
  };

  return (
    <div data-testid="login-1">
      <form name="logIn">
        <label>
          Username:
          <input onChange={handleUserNameChange} />
        </label>
        <label>
          Password:
          <input
            placeholder=""
            onChange={handlePasswordChange}
            type="password"
          />
        </label>
      </form>
    </div>
  );
};

export default LogInForm;
