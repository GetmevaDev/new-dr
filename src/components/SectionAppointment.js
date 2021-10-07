import React from "react"

import BackgroundImage from "gatsby-background-image"
import MakeAnAppointment from "./MakeAnAppointment"

const SectionAppointment = props => {
  return (
    <section
      className={props.classSection}
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <div className="container">
        {/*<h2>Book Online 24/7</h2>*/}
        {props.title}
        <MakeAnAppointment classItem={props.classElem} />
      </div>
    </section>
  )
}

export default SectionAppointment
