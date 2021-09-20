import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import { Switch, Route } from "react-router-dom";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInSignUp.component";
import { auth,createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          },()=>console.log(this.state));
        });
      }
      this.setState({currentUser:userAuth});     
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/React_crwn-clothing/" component={HomePage} />
          <Route path="/React_crwn-clothing/shop" component={ShopPage} />
          <Route
            path="/React_crwn-clothing/signin"
            component={SignInAndSignUp}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
