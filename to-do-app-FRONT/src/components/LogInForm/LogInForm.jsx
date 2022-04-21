import {
  securePassword,
  validCharacters,
  checkLength,
} from "./helperfunctions";

const LogInForm = () => {
  // This component only handles the user input and testing
  // NOT SUBMIT TESTING

  const handlePassChange = (event) => {
    let tempPswrd = event.target.value;

    validCharacters(tempPswrd);

    checkLength(tempPswrd);

    if (tempPswrd.length >= 5) {
      securePassword(tempPswrd);
    }

    // can't contain ~ ` < >
    // length must be between 5 and 12
  };

  return (
    <form name="logIn">
      <input
        placeholder="Username"
        // onChange={handleUserChange()}
      ></input>
      <input
        placeholder="Password"
        onChange={handlePassChange}
        // innertext={returnStr}
      ></input>
    </form>
  );
};

export default LogInForm;
