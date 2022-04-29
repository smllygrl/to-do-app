import { useContext } from "react";
import { DarkThemeContext } from "../../../context/DarkThemeContext/DarkThemeContext";

const BaseFormat = ({
  headerContent,
  adminPanelContent,
  displayContent,
  footerContent,
}) => {
  const { getClassName } = useContext(DarkThemeContext);

  return (
    <div className={getClassName("baseFormat")}>
      <div className={getClassName("baseFormat__header")}>{headerContent}</div>
      <div className={getClassName("baseFormat__body")}>
        <div className={getClassName("baseFormat__adminPanel")}>
          {adminPanelContent}
        </div>
        <div className={getClassName("baseFormat__display")}>
          {displayContent}
        </div>
      </div>
      <div className={getClassName("baseFormat__footer")}>{footerContent}</div>
    </div>
  );
};

export default BaseFormat;
