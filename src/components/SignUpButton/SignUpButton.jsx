import { Link } from "react-router-dom";

const SignUpButton = () => {
  // has props of sign up form
  // creates new user on click

  return (
    <Link to="/signup">
      <button>SIGN UP</button>
    </Link>
  );
};

export default SignUpButton;
