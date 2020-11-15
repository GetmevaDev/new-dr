import React from "react"
import {graphql, useStaticQuery} from "gatsby"





const SectionHeaderAcceptedInsurances = () =>{


  const data = useStaticQuery(graphql`
    query AcceptedInsurancesQuery{
        allStrapiAcceptedInsurances {
        edges {
          node {
            SubTitle
            Title
            Photo {
              childImageSharp {
                fixed(width: 1000){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  const subTitle = data.allStrapiAcceptedInsurances.edges[0].node.SubTitle || null;
  const title = data.allStrapiAcceptedInsurances.edges[0].node.Title || null;
  const image = data.allStrapiAcceptedInsurances.edges[0].node.Photo.childImageSharp.fixed.src || null;

  return(
    <section className="section-testimonial">
      <div className="container row">
        <div className="heading-pages">
          <h3>{subTitle}</h3>
          <h2>{title}</h2>
        </div>
        <div className="portrait-dr w900">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  )
}


export default SectionHeaderAcceptedInsurances
