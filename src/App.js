import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import { Switch, Route } from "react-router-dom";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInSignUp.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/React_crwn-clothing/" component={HomePage} />
        <Route path="/React_crwn-clothing/shop" component={ShopPage} />
        <Route path="/React_crwn-clothing/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
