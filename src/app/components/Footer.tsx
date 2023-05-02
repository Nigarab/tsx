/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./Footer.scss";
import logo from "../../../src/assets/images/Logo.png"
import instagram from "../../../src/assets/images/instagram.png.png"
import twitter from "../../../src/assets/images/Twitter.png.png"
import facebook from "../../../src/assets/images/Facebook.png.png"
import link from "../../assets/images/Link.png"

export const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <img src={instagram }className="insta" />
        <img src={twitter} className="insta" />
        <img src={facebook} className="insta" />
        <img src={link} className="insta" />
      </div>
      <p className="icons-p">
        Lorem ipsum dolor sit amet, consectetur advising elite. Duis sit
        vehicula dui sit amet ligula cursus.
      </p>
      <div className="privacy-div">
        <a href="#" className="privacy">
          Privacy
        </a>
        <a href="#" className="privacy">
          Account
        </a>
        <a href="#" className="privacy">
          Unsubscribe
        </a>
      </div>
      <div className="last-logo">
        <img src={logo} className="last-pic" />
      </div>
    </footer>
  );
};
export default Footer;
