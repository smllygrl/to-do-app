import {
  securePassword,
  validCharacters,
  checkLength,
} from "./helperfunctions";

const LogInForm = () => {
  // This component only handles the user input and testing
  // NOT SUBMIT TESTING

  const handlePasswordChange = (event) => {
    let tempPswrd = event.target.value;
    validCharacters(tempPswrd);
    checkLength(tempPswrd);
    if (tempPswrd.length >= 5) {
      securePassword(tempPswrd);
    }
  };

  return (
    <form name="logIn">
      <input
        placeholder="Username"
        // onChange={handleUserChange()}
      ></input>
      <input placeholder="Password" onChange={handlePasswordChange}></input>
    </form>
  );
};

export default LogInForm;
