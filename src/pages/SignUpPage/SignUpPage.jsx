import SignUpForm from "../../components/SignUpForm";
import LogInButton from "../../components/LogInButton";
import BaseFormat from "../../styling/formats/BaseFormat/BaseFormat";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const SignUpPage = () => {
  return (
    <BaseFormat
      headerContent={<NavBar />}
      adminPanelContent={
        <>
          <SignUpForm />
          <LogInButton buttonName={"SIGN UP"} />
        </>
      }
      displayContent=""
      footerContent={<Footer />}
    />
  );
};

export default SignUpPage;
