import React from "react";
import sun from "../../asset/images/brightness.svg";
import triangle from "../../asset/images/triangle.svg";
import bell from "../../asset/images/bell.svg";
import plus from "../../asset/images/plus-small.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-items">
        <img src={sun} alt="sun" style={{ width: "13px" }} />
        <div>US Stock market opens in 3 hours</div>
        <div>
          Main Wallet <img src={triangle} alt="arrow" style={{ width: "7px" }} />
        </div>
        <div className="navbar-bell">
          <img src={bell} alt="bell" style={{ width: "13px" }} />
          <div></div>
        </div>
        <div className="plusButton">
          <img src={plus} alt="plus" style={{ width: "25px" }} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
