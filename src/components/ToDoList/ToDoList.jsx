import { useState, useEffect } from "react";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

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

  return (
    <div>
      <h3>To Do List</h3>
      <input
        name="toDoItem"
        type="text"
        placeholder="Create a new 'to do' item!"
        value={toDo}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {toDoList.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
