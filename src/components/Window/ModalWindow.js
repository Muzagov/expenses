import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/actions/categories";

function ModalWindow() {
  const opened = useSelector((state) => state.categories.opened);

  const dispatch = useDispatch();

  const [category, setCategory] = useState("");

  const [icon, setIcon] = useState("");

  const addCategories = () => {
    dispatch(
      addCategory({
        category: category,
        icon: icon,
      }),
      setCategory(""),
      setIcon("")
    );
  };

  if (!opened) {
    return null;
  }

  return (
    <div className="window">
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        placeholder="Название иконки..."
        className="windowIconInput"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Название категории..."
        className="windowInput"
      />
      <div className="windowButton">
        <button className="addWindowButton" onClick={addCategories}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
