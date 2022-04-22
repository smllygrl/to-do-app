import UserGreeting from "../../components/UserGreeting";
import LogOutButton from "../../components/LogOutButton";
import CreateListButton from "../../components/CreateListButton/CreateListButton";
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
          <CreateListButton />
        </>
      }
    ></BaseFormat>
  );
};

export default LoggedInPage;
