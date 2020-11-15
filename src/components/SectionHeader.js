import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import MakeAnAppointment from "./MakeAnAppointment"

const SectionHeader = () => (
  <StaticQuery
    query={graphql`
    query SectionHeaderQuery{
        allStrapiHomepageElements {
    edges {
      node {
      id
        SectionHeader {
          id
          Sub_Title
          Title {
            OrangeTextStart
            WhiteText
            OrangeTextEnd
          }
          Text
          Background {
            childImageSharp {
              fluid(maxWidth: 1500){
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
    }  
`}
    render={data =>(

      <BackgroundImage
        Tag="section"
        className="section-header"
        fluid={data.allStrapiHomepageElements.edges[0].node.SectionHeader.Background.childImageSharp.fluid}
      >
        <div className={`overlay`}/>
        <div className="container">
          <div className="container_heading">
            {
              data.allStrapiHomepageElements.edges.map(items => (
                <React.Fragment key={items.node.id}>
                  <h2>{items.node.SectionHeader.Sub_Title}</h2>
                  <h2 className="headind_section"><strong><span className="warning-color">{items.node.SectionHeader.Title.OrangeTextStart}</span> {items.node.SectionHeader.Title.WhiteText} <span className="warning-color">{items.node.SectionHeader.Title.OrangeTextEnd}</span></strong></h2>
                  <p>{items.node.SectionHeader.Text}</p>
                  <MakeAnAppointment
                    classItem={`appointment`}
                  />
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </BackgroundImage>
    )}
  />

)

export default SectionHeader