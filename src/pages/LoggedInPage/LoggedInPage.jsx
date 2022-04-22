import UserGreeting from "../../components/UserGreeting";
import LogOutButton from "../../components/LogOutButton";
import ToDoList from "../../components/ToDoList";
import BaseFormat from "../../styling/format/BaseFormat/BaseFormat";

const LoggedInPage = () => {
  return (
    <BaseFormat
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
    ></BaseFormat>
  );
};

export default LoggedInPage;
