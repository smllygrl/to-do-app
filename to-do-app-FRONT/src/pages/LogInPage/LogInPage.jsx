// SignUpButton
// -> takes you to log in form
//SignUpButton Form
// CreateButton
// -> creates a new user
// -> takes you to home page

//LogInButton
// -> takes you to sign up page/ form
// LogInForm
// -> takes you to home page

// The Void is on the right

import LogInSignUp from "../../containers/LogInSignUp";
import LogInDisplay from "../../containers/LogInDisplay";

const LogInPage = () => {
  return (
    <div>
      <p>You see this page when you first access the site</p>
      <LogInSignUp />
      <LogInDisplay />
    </div>
  );
};

export default LogInPage;
