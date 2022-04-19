import LogInForm from "../../components/LogInForm";
import LogInButton from "../../components/LogInButton";
import SignUpButton from "../../components/SignUpButton";
import SignUpForm from "../../components/SignUpForm";

const LogInSignUp = () => {
  return (
    <div>
      <LogInForm />
      <LogInButton />
      <SignUpForm />
      <SignUpButton />
    </div>
  );
};

export default LogInSignUp;
