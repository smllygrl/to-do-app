import { useState } from "react";

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

  const handleClearAll = () => {
    setToDoList([]);
  };

  const handleEdit = (id) => {
    const updatedList = toDoList.map((toDoitem) => {
      if (toDoitem.id === id) {
        console.log(toDoitem);
      }
    });
    // modal with input for updated text??
  };

  const handleDeleteItem = (id) => {
    const updatedToDoList = toDoList.filter((toDoItem) => toDoItem.id !== id);
    setToDoList(updatedToDoList);
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
          <div key={toDo.id}>
            <li>{toDo.text}</li>
            <button onClick={() => handleDeleteItem(toDo.id)}>x</button>
            <button onClick={() => handleEdit(toDo.id)}>Edit</button>
          </div>
        ))}
      </ul>
      <button onClick={handleClearAll}>CLEAR ALL</button>
    </div>
  );
};

export default ToDoList;
