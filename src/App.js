import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/React_crwn-clothing/" component={HomePage} />
        <Route path="/React_crwn-clothing/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
