import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <img
        className="Header-img"
        src="https://czholding.ru/wp-content/uploads/2019/06/hands-600497_960_720.jpg"
        alt="hands"
      />
      <Link to="/">
        <h1 className="Header-h1">CITIZEN HERO</h1>
      </Link>
    </div>
  );
}

export default Header;
