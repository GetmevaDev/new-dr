import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const SectionOurServices = () => {

const data = useStaticQuery(graphql`
  query OurServicesQuery{
      allStrapiServices(limit: 10) {
    edges {
      node {
        id
        Title
        }
      }
    }
  }
`)
  return(
    <section className="section-services">
      <h2 className="section-title">Our<strong>Services</strong></h2>

      <div className="container row">

        {
          data.allStrapiServices.edges.map(elem =>{
            const title = elem.node.Title || null;
            const link = elem.node.id
            return(
              <a
                key={elem.node.id}
                href={`/${link}`} className="link-services">{title}</a>
            )
          })
        }

        {/*<a href="" className="link-services">Dental Crowns</a>*/}
        {/*<a href="" className="link-services">Invisalign</a>*/}
        {/*<a href="" className="link-services">Dental Veneers</a>*/}
        {/*<a href="" className="link-services">Bridges and Dentures</a>*/}
        {/*<a href="" className="link-services">Dental Implants and Implant Crowns</a>*/}
        {/*<a href="" className="link-services">Socket Preservation</a>*/}
        {/*<a href="" className="link-services">Tooth Extraction</a>*/}
        {/*<a href="" className="link-services">Root Canal </a>*/}
        {/*<a href="" className="link-services">BPA FREE Dental Fillings</a>*/}
      </div>
    </section>
  )
}

export default SectionOurServices