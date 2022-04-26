import SignUpForm from "../../components/SignUpForm";
import LogInButton from "../../components/LogInButton";
import SignUpFormat from "../../styling/formats/SignUpFormat/SignUpFormat";

const SignUpPage = () => {
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
