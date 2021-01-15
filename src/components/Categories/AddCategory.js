import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/actions/categories";

function AddCategory() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="col-3">
      <div className="addCategory">
        <div className="addCategoryButton" onClick={handleClick}>
          <div className="icon">
            <i className="material-icons">add</i>
          </div>
          <div className="add">Добавить</div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
