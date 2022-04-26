import LogInForm from "../../components/LogInForm";
import LogInButton from "../../components/LogInButton";
import SignUpButton from "../../components/SignUpButton";
import BaseFormat from "../../styling/format/BaseFormat/BaseFormat";
import DarkModeButton from "../../components/DarkModeButton/DarkModeButton";

const LogInPage = () => {
  return (
    <BaseFormat
      adminPanelContent={
        <>
          <p>Welcome</p>
          <LogInForm />
          <LogInButton buttonName={"LOG IN"} />
          <SignUpButton />
          <DarkModeButton />
        </>
      }
      displayContent={
        <>
          <p>Sign up or Log in to make a to do list!!</p>
        </>
      }
    ></BaseFormat>
  );
};

export default LogInPage;
