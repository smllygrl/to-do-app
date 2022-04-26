import UserGreeting from "../../components/UserGreeting";
import LogOutButton from "../../components/LogOutButton";
import ToDoList from "../../components/ToDoList";
import DarkModeButton from "../../components/DarkModeButton";
import BaseFormat from "../../styling/formats/BaseFormat";

const LoggedInPage = () => {
  return (
    <BaseFormat
      adminPanelContent={
        <>
          <UserGreeting />
          <LogOutButton />
          <DarkModeButton />
        </>
      }
      displayContent={
        <>
          <ToDoList />
        </>
      }
    ></BaseFormat>
  );
};

export default LoggedInPage;
