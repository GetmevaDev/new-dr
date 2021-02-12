import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import BackgroundImage from "gatsby-background-image"



const SectionHeaderPatientSurvey = () =>{


  const data = useStaticQuery(graphql`
  query SectionHeaderPatientSurveyQuery{
    allStrapiPatientSurvey {
    edges {
      node {
        Title
        BackgroundSection {
          childImageSharp {
            fluid(maxWidth: 2500){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  }
  `)
  const bgPhoto = data.allStrapiPatientSurvey.edges[0].node.BackgroundSection.childImageSharp.fluid || "";
  const title = data.allStrapiPatientSurvey.edges[0].node.Title || null;
  return(

    <BackgroundImage
      Tag="section"
      className="section-photo"
      fluid={bgPhoto}
    >
        <div className="container row">
          <h2>{title}</h2>
        </div>

    </BackgroundImage>

  )
}



export default SectionHeaderPatientSurvey