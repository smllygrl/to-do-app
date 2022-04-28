import LogInForm from "../../components/LogInForm";
import LogInButton from "../../components/LogInButton";
import SignUpButton from "../../components/SignUpButton";
import BaseFormat from "../../styling/formats/BaseFormat";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const LogInPage = () => {
  return (
    <BaseFormat
      headerContent={<NavBar />}
      adminPanelContent={
        <>
          <p>Welcome</p>
          <LogInForm />
          <LogInButton buttonName={"LOG IN"} />
          <SignUpButton />
        </>
      }
      displayContent={
        <>
          <p>Sign up or Log in to make a to do list!!</p>
        </>
      }
      footerContent={<Footer />}
    ></BaseFormat>
  );
};

export default LogInPage;
