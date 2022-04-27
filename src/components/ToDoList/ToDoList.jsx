import { useState } from "react";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext/DarkThemeContext";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");
  const [update, setUpdate] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { getClassName } = useContext(DarkThemeContext);

  const handleChange = (event) => {
    setToDo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDo !== "") {
      setToDoList([
        ...toDoList,
        {
          id: toDoList.length + 1,
          text: toDo,
        },
      ]);
    }
    setToDo("");
  };

  const handleClearAll = () => {
    setToDoList([]);
  };

  // const toggleHide = (index) => {
  //   const itemToEdit = document.getElementsByClassName("toDoList__item");
  //   const buttons = document.getElementsByClassName("toDoList__itemButtons");
  //   itemToEdit.sty;
  // };

  const handleEdit = (id) => {
    setEditMode(true);
  };

  const handleUpdate = (newContent, id) => {
    setEditMode(false);
  };

  const handleDeleteItem = (id) => {
    const updatedToDoList = toDoList.filter((toDoItem) => toDoItem.id !== id);
    setToDoList(updatedToDoList);
  };

  return (
    <div className={getClassName("toDoList")}>
      <h3>To Do List</h3>
      <div className={getClassName("toDoList__formBox")}>
        <input
          className={getClassName("toDoList__input")}
          name="toDoItem"
          type="text"
          placeholder="Create a new 'to do' item!"
          value={toDo}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className={getClassName("toDoList__addBtnBox")}
        >
          Add
        </button>
      </div>
      <div className={getClassName("toDoList__ulBox")}>
        <ul className={getClassName("toDoList__ul")}>
          {toDoList.map((toDo) => (
            <div className={getClassName("toDoList__itemBox")} key={toDo.id}>
              <li className={getClassName("toDoList__item")}>{toDo.text}</li>
              {/* EDIT/ UPDATE */}
              <div className={getClassName("toDoList__updateItem")}>
                <input></input>
                <button onClick={handleUpdate}>UPDATE</button>
              </div>
              {/*  */}
              <div className={getClassName("toDoList__itemButtons")}>
                <button
                  className={getClassName("toDoList__button")}
                  onClick={() => handleDeleteItem(toDo.id)}
                >
                  X |
                </button>
                <button
                  className={getClassName("toDoList__button")}
                  onClick={() => handleEdit(toDo.id)}
                >
                  EDIT |
                </button>
                <button className={getClassName("toDoList__button")}>
                  DONE
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <button onClick={handleClearAll}>CLEAR ALL</button>
    </div>
  );
};

export default ToDoList;
