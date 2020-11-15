import React from "react"
import {graphql, useStaticQuery} from "gatsby"




const SectionHeaderPromotions = () => {

  const data = useStaticQuery(graphql`
    query SectionHeaderPromotionsQuery{
        allStrapiPromotionsPage {
          edges {
            node {
              Title
            }
          }
        }
    }
  `)

  const title = data.allStrapiPromotionsPage.edges[0].node.Title || null;

  return(
    <section className="section-header_pages flex bg">
      <h2>{title}</h2>
    </section>
  )
}

export default SectionHeaderPromotions