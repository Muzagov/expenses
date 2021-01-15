import React from "react";

function HistoryItem(props) {
  return (
    <div className="historyItem d-flex mt-5">
      <div className="categoryHistory">Car</div>
      <div className="historySum">{props.history.sum}</div>
      <div className="historyComment">{props.history.comment}</div>
    </div>
  );
}

export default HistoryItem;
