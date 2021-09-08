import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import { Switch, Route } from "react-router-dom";

const HatPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
