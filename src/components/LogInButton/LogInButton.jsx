import { Link } from "react-router-dom";

const LogInButton = ({ buttonName }) => {
  // function: cheks if valid user
  // takes to homepage if yes
  // return error if no
  // has the props of a loginForm
  return (
    <Link to="/user">
      <button>{buttonName}</button>
    </Link>
  );
};

export default LogInButton;
