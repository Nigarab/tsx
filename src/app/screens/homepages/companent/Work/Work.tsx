import './Work.scss'
import image1 from '../../../../../assets/images/Image 1.png'
import image2 from "../../../../../assets/images/Image 2.png"
import image3 from "../../../../../assets/images/Image 3.png"
import image4 from "../../../../../assets/images/Image 4.png"
import image5 from "../../../../../assets/images/Image 5.png"
import single from "../../../../../assets/images/Single Image.png"
export const Work =()=>{
    return (
      <>
        <img src={single} className="like-video" />
        <h1 className="work">Work we have done</h1>
        <div className="work-pictures">
          <img src={image1} className="image1" />
          <img src={image2} className="image2" />
        </div>
        <div className="work-pictures2">
          <img src={image3} className="image3" />
          <img src={image4} className="image4" />
          <img src={image5} className="image5" />
        </div>
      </>
    );
}
export default Work;