import UserGreeting from "../../components/UserGreeting";
import LogOutButton from "../../components/LogOutButton";
import ToDoList from "../../components/ToDoList";
import BaseFormat from "../../styling/formats/BaseFormat";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const LoggedInPage = () => {
  return (
    <BaseFormat
      headerContent={<NavBar />}
      adminPanelContent={
        <>
          <UserGreeting />
          <LogOutButton />
        </>
      }
      displayContent={
        <>
          <ToDoList />
        </>
      }
      footerContent={<Footer />}
    ></BaseFormat>
  );
};

export default LoggedInPage;
