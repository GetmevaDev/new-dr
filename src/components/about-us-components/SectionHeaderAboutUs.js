import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

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

  const SubTitle =
    data.allStrapiAboutUs.edges[0].node.SectionHeaderTitles.SubTitle

  const BoldTextTitle =
    data.allStrapiAboutUs.edges[0].node.SectionHeaderTitles.BoldTextTitle

  const RegularTextTitle =
    data.allStrapiAboutUs.edges[0].node.SectionHeaderTitles.RegularTextTitle

  return (
    <section className="section-header_pages flex">
      <p>{SubTitle}</p>
      <h2>
        <strong>{BoldTextTitle}</strong>
        {` ${RegularTextTitle}`}
      </h2>
    </section>
  )
}

export default SectionHeaderAboutUs
