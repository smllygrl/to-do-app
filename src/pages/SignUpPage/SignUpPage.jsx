import SignUpForm from "../../components/SignUpForm";
import LogInButton from "../../components/LogInButton";
import SignUpFormat from "../../styling/format/SignUpFormat";

const SignUpPage = () => {
  // Sign Up is center justified
  // Sign Up Form
  // Name, email, username, age (must be over 18?)
  // Name with logic to make sure it's a real name
  // Same with email (can replicate login from log in page)
  // Create account takes you to LoggedInPage

  return (
    <SignUpFormat
      content={
        <>
          <SignUpForm />
          <LogInButton buttonName={"CREATE ACCOUNT"} />
        </>
      }
    ></SignUpFormat>
  );
};

export default SignUpPage;
