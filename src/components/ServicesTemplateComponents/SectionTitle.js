import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const SectionTitle = (props) => {


  return(
      <section className="section-name-services">
        <div className="container">
          <h3>Our Services</h3>
          <h2>{props.titleName}</h2>
        </div>
      </section>
    )

}



export default SectionTitle
