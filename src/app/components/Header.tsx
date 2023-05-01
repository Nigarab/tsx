import "./Header.scss";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={logo} />
        <nav>
          <a href="#" className="nav-link">
            <b>HOME</b>
          </a>
          <a href="#" className="nav-link">
            <b>ABOUT</b>
          </a>
          <a href="#" className="nav-link">
            <b>SERVICE</b>
          </a>
          <a href="#" className="nav-link">
            <b>CONTACT</b>
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
