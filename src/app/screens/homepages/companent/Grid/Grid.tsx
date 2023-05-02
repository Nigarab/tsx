import './Grid.scss'
import icon2 from '../../../../../assets/images/Icon-2.png'
import icon4 from '../../../../../assets/images/Icon-4.png'
import icon3 from '../../../../../assets/images/Icon-3.png'
import icon1 from '../../../../../assets/images/Icon1..png'
export const Grid =()=>{
    return (
        <div className="grid2">
            <div className="first-side-grid">
                <div className="first-side">
                    <img src={icon1} className="icon1" />
                </div>
                <h2 className="icon1-write">Marketing automation</h2>
                <p className="icon1-p">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur elie Duis sit.
                </p>
                <div className="button1-side">
                    <button className="icon1-b">Read more</button>
                </div>
            </div>

            <div className="second-side-grid">
                <div className="second-side">
                    <img src={icon2} className="icon2" />
                </div>
                <h2 className="icon2-h1">Task management</h2>
                <p className="icon2-p">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur elie Duis sit.
                </p>

                <button className="icon2-b">Read more</button>
            </div>
            <div className="first-side-grid">
                <div className="first-side">
                    <img src={icon3} className="icon1" />
                </div>

                <h2 className="icon3-write1">Sales messaging</h2>
                <p className="icon3-p1">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur elie Duis sit.
                </p>

                <button className="icon1-b">Read more</button>
            </div>

            <div className="second-side-grid">
                <div className="second-side">
                    <img src={icon4} className="icon2" />
                </div>
                <h2 className="icon4-h1">Budgeting tools</h2>
                <p className="icon4-p1">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur elie Duis sit.
                </p>

                <button className="icon2-b">Read more</button>
            </div>
        </div>
    )
}
export default Grid;