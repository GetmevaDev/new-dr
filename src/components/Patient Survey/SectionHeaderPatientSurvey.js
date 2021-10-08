import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const SectionHeaderPatientSurvey = () => {
  const data = useStaticQuery(graphql`
    query SectionHeaderPatientSurveyQuery {
      allStrapiPatientSurvey {
        edges {
          node {
            Title
            BackgroundSection {
              url
            }
          }
        }
      }
    }
  `)

  console.log(data.allStrapiPatientSurvey.edges)

  const bgPhoto =
    data.allStrapiPatientSurvey.edges[0].node.BackgroundSection[0].url || ""
  const title = data.allStrapiPatientSurvey.edges[0].node.Title || null
  return (
    // <BackgroundImage Tag="section" className="section-photo" fluid={bgPhoto}>
    <section className={`section-photo`} style={{
      background: `url(${bgPhoto})`,
    }}>
      <div className="container row">
        <h2>{title}</h2>
      </div>
    </section>

    // </BackgroundImage>
  )
}

export default SectionHeaderPatientSurvey
