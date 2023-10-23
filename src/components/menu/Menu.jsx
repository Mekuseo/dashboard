import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../homeData";
import profileImage from "../../asset/images/user-female.svg";
import dashboard from "../../asset/images/dashboard.svg";
import wallet from "../../asset/images/wallet.svg";
import chart from "../../asset/images/chart-histogram.svg";
import logout from "../../asset/images/logout.svg";
import "./Menu.scss";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClickMenu = (menuName) => {
    setSelectedMenu(menuName);
  }

  return (
    <div className="menu-container">
      <div>
        <div className="menu-containerTop">
          <div>
            {profile.map((item) => {
              return (
                <div key={item.id} className="menuList-top">
                  <div>
                    <img
                      src={profileImage}
                      alt={item.name}
                      style={{ width: "40px" }}
                    />
                  </div>
                  <div className="profileDetails">
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="menuList-middle">
            <div className='menuItem'>
              <div>
                <img
                  src={dashboard}
                  alt="dashboard"
                  style={{ width: "15px" }}
                />
              </div>
              <Link to="/" onClick={() => handleClickMenu("Dashboard")} className={`${selectedMenu === "Dashboard" ? "active" : ""}`}>Dashboard</Link>
            </div>
            <div className='menuItem'>
              <div>
                <img src={wallet} alt="wallet" style={{ width: "15px" }} />
              </div>
              <Link to="/" onClick={() => handleClickMenu("Holdings")} className={`${selectedMenu === "Holdings" ? "active" : ""}`}>Holdings</Link>
            </div>
            <div className='menuItem'>
              <div>
                <img src={chart} alt="chart" style={{ width: "15px" }} />
              </div>
              <Link to="/" onClick={() => handleClickMenu("Performance")} className={`${selectedMenu === "Performance" ? "active" : ""}`}>Performance</Link>
              {selectedMenu === "Performance" && <div className="redBottom-border"></div>}
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
      <div className="menuItem logout">
        <img src={logout} alt="logout" style={{ width: "15px" }} />
        <Link to='/'>Logout</Link>
      </div>
    </div>
  );
};

export default Menu;
