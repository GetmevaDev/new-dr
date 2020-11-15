import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import MakeAnAppointment from "../MakeAnAppointment"
import Layout from "../layout"


const SectionHeaderBlog = () => {

  const data = useStaticQuery(graphql`
  query SectionHeaderBlogQuery{
    allStrapiBlog {
    edges {
      node {
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

  const title = data.allStrapiBlog.edges[0].node.Title || null;
  const photo = data.allStrapiBlog.edges[0].node.Photo.childImageSharp.fixed.src || null;

  return(
    <section className="section-testimonial">
      <div className="container row">
        <div className="heading-pages">

          <h2 className={`title_dr`}>{title}</h2>
          <a className="appointment" href={`#`}>View All Insurances We Accept</a>
        </div>
        <div className="portrait-dr new_width">
          <img src={photo} alt="" />

        </div>
      </div>
    </section>
  )
}

export default SectionHeaderBlog