import React from "react";
import { Link } from "react-router-dom";

function AddButton() {
  return (
    <div className="add">
      <Link to="/" className="addButton">
        Добавить
      </Link>
    </div>
  );
}

export default AddButton;
