import React from "react";
import { Link } from "react-router-dom";

function HistoryButton() {
  return (
    <div>
      <Link to="/history" className="historyButton">
        История
      </Link>
    </div>
  );
}

export default HistoryButton;
