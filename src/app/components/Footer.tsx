/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <img src="./instagram.png.png" className="insta" />
        <img src="./Twitter.png.png" className="insta" />
        <img src="./Facebook.png.png" className="insta" />
        <img src="./Link.png" className="insta" />
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
        <img src="./Logo.png" className="last-pic" />
      </div>
    </footer>
  );
};
export default Footer;
