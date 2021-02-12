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
                alternativeText
                url
            }
          }
        }
      }
    }
  `)
  const subTitle = data.allStrapiAcceptedInsurances.edges[0].node.SubTitle;
  const title = data.allStrapiAcceptedInsurances.edges[0].node.Title;
  const image = data.allStrapiAcceptedInsurances.edges[0].node.Photo[0].url;
  const alt = data.allStrapiAcceptedInsurances.edges[0].node.Photo[0].alternativeText;

  return(
    <section className="section-testimonial">
      <div className="container row">
        <div className="heading-pages">
          <h3>{subTitle}</h3>
          <h2>{title}</h2>
        </div>
        <div className="portrait-dr w900">
          <img
            className={`lazyload`}
            data-src={image}
            alt={alt}
          />
        </div>
      </div>
    </section>
  )
}


export default SectionHeaderAcceptedInsurances
