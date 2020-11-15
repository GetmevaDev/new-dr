import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import StarOffSvg from "../images/off.svg"





const Rating = () => {


return(
    <div className="rating_group"
         style={{
           background: `url(${StarOffSvg})`,
           backgroundSize: `20px auto`,
           backgroundRepeat: `repeat-x`,
         }}
    >

      <input type="radio" className="rating_star" name="rating" value="1" />
      <input type="radio" className="rating_star" name="rating" value="2" />
      <input type="radio" className="rating_star" name="rating" value="3" />
      <input type="radio" className="rating_star" name="rating" value="4" />
      <input type="radio" className="rating_star" name="rating" value="5" />
    </div>
  )

}


export default Rating