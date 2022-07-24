import { Link } from "react-router-dom";
import titleImg from "../img_wave_clear.gif";
import logo from "../red_on_transp.gif";
import wave from "../wave.png";
function Header() {
  return (
    <div className="Header">
      <img
        className="Header-img"
        src={titleImg}
        alt="hands"
      />
      <Link to="/">
        <img className="logo" src={logo} alt="citizen Hero Logo" />
      </Link>

    </div>
  );
}

export default Header;
