import { NavLink } from "react-router-dom";

let activeStyle = {
  fontWeight: "700",
  fontSize: 17,
  color: "#38b6ff",
};

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <NavLink
          to="/Contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/Privacy"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Privacy
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
