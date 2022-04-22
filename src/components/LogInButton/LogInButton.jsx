import { Link } from "react-router-dom";

const LogInButton = ({ buttonName }) => {
  return (
    <Link to="/user">
      <button>{buttonName}</button>
    </Link>
  );
};

export default LogInButton;
