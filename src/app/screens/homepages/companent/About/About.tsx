import './About.scss'
export const About = () => {
    return (<div className="about-container">
        <div className="main-container">
            <h1 className="about">Who we are</h1>
            <div className="button-lorem-container">
                <p className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
                    vehicula <br /> dui sit amet ligula cursus. dolor sit amet dolor
                    adipiscing.
                </p>
            </div>
        </div>
        <div className="button-container">
            <button className="for-button1">Read more</button>
        </div>
        <div className="how-it-works">
            <h1 className="how-container">Actually how it works</h1>
        </div>
    </div>
    )
}
export default About ;