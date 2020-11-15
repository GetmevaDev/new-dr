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

  const subTitle = data.allStrapiContactUs.edges[0].node.SubTitle || null;
  const title = data.allStrapiContactUs.edges[0].node.Title || null;
  const img = data.allStrapiContactUs.edges[0].node.Image.childImageSharp.fixed.src || null;

  return(
    <section className="section-testimonial">
      <div className="container row">
        <div className="heading-pages">
          <h3>{subTitle}</h3>
          <h2>{title}</h2>
        </div>
        <div className="portrait-dr">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}


export default SectionHeaderContactUs