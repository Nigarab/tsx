import './LoginPage.scss'
import icon from '../../../assets/images/icon.png'
import vector from '../../../assets/images/Vector.png'
import logo from '../../../assets/images/Logo.png'
import facebook from '../../../assets/images/facebook.png'
import sosialmedia from '../../../assets/images/Social media logo.png'
export const LoginPage = ()=>{
    return (

<div className="background">
  <div className="container">
    <div className="sign-up">
      <div className="vector-div">
        <img src={vector} className="vector" />
      </div>
      <div className="basic-container">
        <div className="logo-div">
          <img src={logo} className="logo" />
        </div>
        <h2 className="log-in">Log in</h2>
        <p className="first-p">Don’t have an ccount?<a href="#">Sign up </a></p>
        <div className="buttons">
          <button className="social-button">
            <div className="with-social">
              <img src={facebook} className="logo-social" />
              <p className="social-p">Log in with Facebook</p>
            </div>
          </button>
        </div>
        <div className="buttons-2">
          <button className="social-button">
            <div className="with-social">
              <img
                src={sosialmedia}
                className="logo-social"
              />
              <p className="social-p">Log in with Google</p>
            </div>
          </button>
        </div>
        <div className="hr-p">
          <div className="div-hr">
            <hr />
          </div>
          <p className="or-p">OR</p>
          <div className="div-hr">
            <hr />
          </div>
        </div>
        <div className="bottom">
          <div className="email-password">
            <label>Your email</label>
          </div>
          <div className="input-side">
            <input type="text" />
          </div>
          <div className="hide-password">
            <div className="email-password">
              <label>Your password</label>
            </div>
            <div className="hide-logo">
              <img src={icon} className="logo-hide" />
              <p className="hide-p">Hide</p>
            </div>
          </div>

          <div className="input-side">
            <input type="password" />
          </div>
          <a href="#" className="last-p">Forget your password</a>
          <div className="buttons">
            <button className="social-button-log-in">
              <div className="with-social">
                <p className="social-p">Log in</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )}