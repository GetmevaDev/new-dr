import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

const SectionHeaderTestimonial = ()=>{

  const data = useStaticQuery(graphql`
    query TestimonialPageQuery{
      allStrapiTestimonials {
        edges {
          node {
            Photo {
                url
                alternativeText
            }
          }
        }
      }
    }
  `)

  const image = data.allStrapiTestimonials.edges[0].node.Photo[0].url || "";
  const alt = data.allStrapiTestimonials.edges[0].node.Photo[0].alternativeText

  return(
    <section className="section-testimonial">
      <div className="container row">
        <div className="heading-pages">
          <h3>What people say</h3>
          <h2>Testimonials</h2>
        </div>
        <div className="portrait-dr">
          <img src={image} alt={alt} />
          {/*<Img*/}
          {/*  fixed={image}*/}
          {/*/>*/}
        </div>
      </div>
    </section>
  )
}




export default SectionHeaderTestimonial