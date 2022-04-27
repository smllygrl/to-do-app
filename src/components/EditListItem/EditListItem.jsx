import { useContext, useEffect } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext/DarkThemeContext";
import { ListItemContext } from "../../context/ListItemContext/ListItemContext";

const EditListItem = () => {
  const { getClassName } = useContext(DarkThemeContext);
  const {
    updateListItem,
    liId,
    toggle,
    editMode,
    setEditMode,
    update,
    setUpdate,
  } = useContext(ListItemContext);

  useEffect(() => {}, [editMode]);

  const handleUpdate = () => {
    updateListItem(liId, update);
    setEditMode(false);
    setUpdate("");
  };

  const handleChange = (event) => {
    setUpdate(event.target.value);
  };

  return (
    <div className={toggle("editListItem")}>
      <div className={getClassName("editListItem__content")}>
        <input value={update} onChange={handleChange}></input>
        <button onClick={handleUpdate}>UPDATE</button>
      </div>
    </div>
  );
};

export default EditListItem;