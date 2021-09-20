import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux'

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/React_crwn-clothing/">
        <Logo className="logo"></Logo>
        <p>HOME</p>
      </Link>
      <div className="options">
        <Link className="option" to="/React_crwn-clothing/shop">
          SHOP
        </Link>
        <Link className="option" to="/React_crwn-clothing/shop">
          CONTANT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
