import React from "react"


import BackgroundImage from "gatsby-background-image"
import MakeAnAppointment from "./MakeAnAppointment"


const SectionAppointment = props => {



  return(
      <BackgroundImage
        Tag="section"
        className={props.classSection}
        fluid={props.background}
      >

        <div className="container">

          {/*<h2>Book Online 24/7</h2>*/}
          {props.title}
          <MakeAnAppointment
            classItem={props.classElem}
          />
        </div>
      </BackgroundImage>
    )



}

export default SectionAppointment