import React from "react";
import AddButton from "./AddButton";
import HistoryButton from "./HistoryButton";

function Header() {
  return (
    <div className="header">
      <AddButton />
      <HistoryButton />
    </div>
  );
}

export default Header;
