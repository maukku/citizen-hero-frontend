import React from "react";
import SidebarData from "../../data/SidebarData";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="Sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <Link to={val.link} className="Sidebar-link">
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
              >
                {" "}
                <div className="sidebar-icon">{val.icon}</div>
                <div className="sidebar-title">{val.title}</div>
                <br />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;