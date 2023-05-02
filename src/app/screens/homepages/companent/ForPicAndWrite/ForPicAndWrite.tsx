import './ForPicAndWrite.scss'
import image from '../../../../../assets/images/process 2 - Image.png'
export const ForPicAndWrite =()=>{
    return(
        <div className="for-pic-and-write">
        <div className="pic-side">
          <img src={image} className="left" />
        </div>
        <div className="write-side">
          <h2 className="right-write">Research prospect</h2>
          <p className="right-write-lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo
            distinctio
          </p>
          <div className="button-left">
            <button className="how-button">Read more</button>
          </div>
        </div>
      </div>

    )
}
export default ForPicAndWrite;