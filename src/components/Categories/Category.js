import React from "react";
import { addConsumption } from "../../redux/actions/categories";
import {useDispatch, useSelector} from "react-redux";

function Category(props) {
  const dispatch = useDispatch();

  const sum = useSelector(state => state.categories.sum)

  const comment = useSelector(state => state.categories.comment)

  const AddConsumption = () => {
    dispatch(addConsumption({ sum: sum, comment: comment }));
  };

  return (
    <div className="col-3" onClick={AddConsumption}>
      <div className="category">
        <div className="categoryCommon">
          <div className="categoryIcon">
            <i className="material-icons">{props.category.icon}</i>
          </div>
          {props.category.category}
        </div>
      </div>
    </div>
  );
}

export default Category;
