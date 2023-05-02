import './ForWriteAndPic.scss'
import image1 from '../../../../../assets/images/process 2 - Image.png'
export const ForWriteAndPic =()=>{
    return(
        <>
        <div className="for-write-and-pic">
            <div className="left-write">
                <h2>Deliver products</h2>
                <p className="left-lorem">
                    Lorem ipsum dolor, sit amet consectetur
                    <br /> adipisicing elit. Expedita dolore aut{" "}
                </p>
                <div className="button-right">
                    <button className="how-button2">Read more</button>
                </div>{" "}
            </div>
            <div className="right-pic">
                <img src={image1} className="right" />
            </div>
        </div><div className="specialized">
                <h1 className="spe-container">We specialized in</h1>
            </div>
            </>
    )
}
export default ForWriteAndPic;