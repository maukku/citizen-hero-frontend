import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <img
        className="Header-img"
        src="https://cdn.pixabay.com/photo/2020/02/29/22/39/demonstration-4891278_960_720.jpg"
        alt="hands"
      />
      <Link to="/">
        <h1 className="Header-h1">CITIZEN HERO</h1>{" "}
      </Link>
    </div>
  );
}

export default Header;
