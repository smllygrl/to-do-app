import SignUpForm from "../../components/SignUpForm";
import LogInButton from "../../components/LogInButton";
import BaseFormat from "../../styling/formats/BaseFormat/BaseFormat";

const SignUpPage = () => {
  return (
    <BaseFormat
      adminPanelContent={
        <>
          <SignUpForm />
          <LogInButton buttonName={"SIGN UP"} />
        </>
      }
      displayContent=""
    />
  );
};

export default SignUpPage;
