import { Link } from "react-router-dom";

const LogOutButton = () => {
  // takes user to login/ sign up page
  return (
    <Link to="/">
      <button>LOG OUT</button>
    </Link>
  );
};

export default LogOutButton;
