import './RegisterPage.scss'
import logo from '../../../assets/images/Logo.png'
import icon from '../../../assets/images/icon.png'
import rectangle from '../../../assets/images/google_recaptcha-official 2.png'
export const RegisterPage = () => {
    return (
        <div className="container">
            <div className="background">
            </div>
            <div className="second-container">
                <div className="logo">
                    <img src={logo} />
                </div>

                <div className="account">
                    <h3>Create an account</h3>
                </div>
                <div className="first-p">Already have an account?
                    <a href="#" >Log in</a>
                </div>
                <div className="input-name-email">
                    <label>User name</label>

                </div>
                <input type="text" id="name-email-password" />
                <div className="input-name-email">
                    <label>Email address</label>
                </div>
                <input type="text" id="name-email-password" />

                <div className="input-password">
                    <div className="password">
                        <label>Password</label></div>

                    <div className="img-logo">

                        <img src={icon} className="hide-logo" />

                        <p>Hide</p></div>

                </div>


                <input type="password" id="name-email-password" />
                <p className="password-forms">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                <p className="link-text">By creating an account, you agree to our<br />
                    <a href="#"> Terms of use</a>  and<a href="#">Privacy Policy</a>  </p>
                <div className="for-button">
                    <button>
                        <div className="button-container">
                            <div className="button-1">
                                <input type="checkbox" />
                                <label>I'am not a robot</label></div>
                            <div className="button2">
                                <img src={rectangle} className="robot-logo" />
                            </div>
                        </div>

                    </button>
                </div>
                <div className="last-button">
                    <button className="create">Create an account
                    </button>

                </div>
                <p className="last-p">Already have an ccount?<a href="#" >Log in</a>  </p>



            </div>
        </div>


    )
}
