import React from "react"
import ServicesNavigationLeft from "./ServicesNavigationLeft"
import ServicesContent from "./ServicesContent"


const SectionBody = (props) =>(
  <section className="section-services_all">
    <div className="container row">
      <ServicesNavigationLeft />
      <ServicesContent
      content={props.fullContent}
      />

    </div>
  </section>
)






export default SectionBody