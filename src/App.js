import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Consumption from "./components/Consumption/Consumption";
import ModalWindow from "./components/Window/ModalWindow";
import History from "./components/History/History";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App mt-3">
      <Header />
      <Route exact path="/">
        <Consumption />
        <Categories />
        <ModalWindow />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </div>
  );
}

export default App;
