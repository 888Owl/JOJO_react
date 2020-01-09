import React from "react";
import { NavLink } from 'react-router-dom';


import "./DesktopNav.css";

const DesktopNav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            首頁
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">聯絡方式</NavLink>
        </li>
        <li>
          <NavLink to="/info">地點</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">工作機會</NavLink>
        </li>
        <li>
          <NavLink to="/store">店家環境</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
