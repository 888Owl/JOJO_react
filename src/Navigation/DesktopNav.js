import React from "react";
import { NavLink } from "react-router-dom";

import "./DesktopNav.css";

const DesktopNav = () => {
  
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink className="nav-names home" to="/" id="/" exact>
            首頁
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-names contact" to="/contact" id="/contact">
            聯絡方式
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-names info" to="/info" id="/info">
            地點
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-names job" to="/jobs" id="/jobs">
            工作機會
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-names store" to="/store" id="/store">
            店家環境
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;