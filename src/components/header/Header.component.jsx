import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/React_crwn-clothing/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/React_crwn-clothing/shop">
          SHOP
        </Link>
        <Link className="option" to="/React_crwn-clothing/shop">
          CONTANT
        </Link>
      </div>
    </div>
  );
};

export default Header;
