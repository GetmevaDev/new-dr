import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionHeaderContactUs = () => {



  const data = useStaticQuery(graphql`
    query SectionHeaderContactUsQuery{
      allStrapiContactUs {
        edges {
          node {
            SubTitle
            Title
            Image {
                url
                alternativeText
            }
          }
        }
      }
    }
  `)

  const subTitle = data.allStrapiContactUs.edges[0].node.SubTitle || null;
  const title = data.allStrapiContactUs.edges[0].node.Title || null;
  const img = data.allStrapiContactUs.edges[0].node.Image[0].url || null;
  const alt = data.allStrapiContactUs.edges[0].node.Image[0].alternativeText || null;

  return(
    <section className="section-testimonial">
      <div className="container row">
        <div className="heading-pages">
          <h3>{subTitle}</h3>
          <h2>{title}</h2>
        </div>
        <div className="portrait-dr">
          <img className={`lazyload`} data-src={img} alt={alt} />
        </div>
      </div>
    </section>
  )
}


export default SectionHeaderContactUs