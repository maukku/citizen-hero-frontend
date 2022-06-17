import { NavLink } from "react-router-dom";

function SidebarItem({ title, link, icon }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? " active row" : "row")}
    >
      <li className="nav-icon-text-container">
        <span className="Sidebar-icon">{icon}</span>
        <span className="Sidebar-title">{title}</span>
      </li>
    </NavLink>
  );
}

export default SidebarItem;
