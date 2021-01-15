import React from "react";
import { useSelector } from "react-redux";
import HistoryItem from "./HistoryItem";

function History() {
  const histories = useSelector((state) => state.categories.history);


  return (
    <div className="history">
      {histories.map((history) => {
        return <HistoryItem history={history} />;
      })}
    </div>
  );
}

export default History;
