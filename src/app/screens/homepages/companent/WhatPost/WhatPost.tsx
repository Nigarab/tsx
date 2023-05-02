import './WhatPost.scss'
import image6 from '../../../../../assets/images/Image 6.png'
import image7 from "../../../../../assets/images/Image 7.png"
export const WhatPost=()=>{
    return(
        <><div className="image6-first">
        <img src={image6} className="image6" />
        <h2 className="image6-h2">
          Improving performance
          <br /> of an online store
        </h2>
        <p className="image6-p">
          Lorem ipsum dolor sit amet,
          <br /> consectetur elie Duis sit.
        </p>
        <div className="image6-button">
          <button className="button-left">Read more</button>
        </div>
      </div><div className="image6-second">
          <img src={image7} className="image7" />
          <h2 className="image6-h2">
            How to build and launch powerful websites
          </h2>
          <p className="image6-p">
            Lorem ipsum dolor sit amet,
            <br /> consectetur elie Duis sit.
          </p>
          <div className="image6-button">
            <button className="button-left">Read more</button>
          </div>
        </div>
        </>
    )
}