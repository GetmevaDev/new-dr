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
        slug
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
            const link = elem.node.slug
            return(
              <a
                key={elem.node.id}
                href={`/services/${link}`} className="link-services">{title}</a>
            )
          })
        }


      </div>
    </section>
  )
}

export default SectionOurServices