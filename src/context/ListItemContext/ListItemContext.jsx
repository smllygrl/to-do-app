import { createContext, useState } from "react";

export const ListItemContext = createContext();

export const ListItemProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [update, setUpdate] = useState("");
  const [liId, setLiId] = useState("");

  const toggle = (className) => {
    if (editMode === true) {
      return `${className}--on`;
    } else {
      return className;
    }
  };

  const updateListItem = (id, newContent) => {
    if (newContent != "") {
      toDoList[id].text = newContent;
    } else {
      console.log("Add some content ya nuftie");
    }
  };

  const value = {
    liId,
    setLiId,
    toggle,
    editMode,
    setEditMode,
    update,
    setUpdate,
    toDoList,
    setToDoList,
    toDo,
    setToDo,
    updateListItem,
  };

  return (
    <ListItemContext.Provider value={value}>
      {children}
    </ListItemContext.Provider>
  );
};
