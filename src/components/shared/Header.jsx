import { Link } from "react-router-dom";
import logo from '../red_on_transp.gif';
import wave from '../wave.png';
function Header() {
  return (
    <div className="Header">
      <img
        className="Header-img"
        src="https://cdn.pixabay.com/photo/2020/02/29/22/39/demonstration-4891278_960_720.jpg"
        alt="hands"
      />
      <img
        className="logo"
        src={logo}
        alt="citizen Hero Logo"
      />
      <img
      className="wave"
      src={wave}
      alt="header image"
      />
    </div>
  );
}

export default Header;
