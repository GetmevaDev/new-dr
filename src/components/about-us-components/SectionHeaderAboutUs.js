import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionHeaderAboutUs = () => {

const data = useStaticQuery(graphql`
    query TitleQuery {
        allStrapiAboutUs {
          edges {
            node {
              id
              SectionHeaderTitles {
                SubTitle
                BoldTextTitle
                RegularTextTitle
              }
            }
          }
        }
    }
`)

  return(
    <section className="section-header_pages flex">
      <p>{data.allStrapiAboutUs.edges[0].node.SectionHeaderTitles.SubTitle}</p>
      <h2><strong>{data.allStrapiAboutUs.edges[0].node.SectionHeaderTitles.BoldTextTitle}</strong>{` ${data.allStrapiAboutUs.edges[0].node.SectionHeaderTitles.RegularTextTitle}`}</h2>
    </section>
  )
}



export default SectionHeaderAboutUs