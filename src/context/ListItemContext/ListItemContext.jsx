import { createContext, useState } from "react";

export const ListItemContext = createContext();

export const ListItemProvider = ({ children }) => {
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState("");

  const toggle = (className) => {
    if (editMode === true) {
      return `${className}--on`;
    } else {
      return className;
    }
  };

  const value = { toggle, editMode, setEditMode, update, setUpdate };

  return (
    <ListItemContext.Provider value={value}>
      {children}
    </ListItemContext.Provider>
  );
};
