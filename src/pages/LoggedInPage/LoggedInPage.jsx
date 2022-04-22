import UserGreeting from "../../components/UserGreeting";
import LogOutButton from "../../components/LogOutButton";
import CreateListButton from "../../components/CreateListButton/CreateListButton";
import BaseFormat from "../../styling/format/BaseFormat/BaseFormat";

const LoggedInPage = () => {
  // ADMIN PANEL:
  // user greeting
  // sign out button (nav to log in page)

  // DISPLAY:
  // CREATE button (new list)

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
