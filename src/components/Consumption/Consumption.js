import React from "react";
import { getComment, getSum } from "../../redux/actions/categories";
import { useDispatch, useSelector } from "react-redux";

function Consumption() {
  const dispatch = useDispatch();

  const sum = useSelector((state) => state.categories.sum);

  const comment = useSelector((state) => state.categories.comment);

  const GetSum = (e) => {
    dispatch(getSum(e.target.value));
  };

  const GetComment = (e) => {
    dispatch(getComment(e.target.value));
  };

  return (
    <div className="consumption">
      <div className="description">
        <div className="sum">
          <input
            type="text"
            placeholder="Сумма"
            value={sum}
            className="sumInput"
            onChange={GetSum}
          />
        </div>

        <div className="desk">
          <input
            type="text"
            placeholder="Описание"
            value={comment}
            onChange={GetComment}
            className="descInput"
          />
        </div>
      </div>
    </div>
  );
}

export default Consumption;
