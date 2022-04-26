import { useContext } from "react";
import { DarkThemeContext } from "../../../context/DarkThemeContext/DarkThemeContext";

const BaseFormat = ({ adminPanelContent, displayContent }) => {
  const { getClassName } = useContext(DarkThemeContext);

  return (
    <div className={getClassName("baseFormat")}>
      <div className={getClassName("baseFormat__adminPanel")}>
        {adminPanelContent}
      </div>
      <div className={getClassName("baseFormat__display")}>
        {displayContent}
      </div>
    </div>
  );
};

export default BaseFormat;
