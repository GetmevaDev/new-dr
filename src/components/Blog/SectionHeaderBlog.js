import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import MakeAnAppointment from "../MakeAnAppointment"
import Layout from "../layout"
import SEO from "../seo"


const SectionHeaderBlog = () => {

  const data = useStaticQuery(graphql`
  query SectionHeaderBlogQuery{
    allStrapiBlog {
    edges {
      node {
          SEO_Blog {
              Title
              Image_Url
              Description
          }
        Title
        Photo {
            url
            alternativeText
        }
      }
    }
  }
  }
  `)

  const title = data.allStrapiBlog.edges[0].node.Title || null;
  const photo = data.allStrapiBlog.edges[0].node.Photo[0].url || null;
  const alt = data.allStrapiBlog.edges[0].node.Photo[0].alternativeText || null;

  return(
    <>
      <SEO seo={data.allStrapiBlog.edges[0].node.SEO_Blog}/>
    <section className="section-testimonial">
      <div className="container row">
        <div className="heading-pages">

          <h2 className={`title_dr`}>{title}</h2>
          <a className="appointment" href={`#`}>View All Insurances We Accept</a>
        </div>
        <div className="portrait-dr new_width">
          <img src={photo} alt={alt} />

        </div>
      </div>
    </section>
      </>
  )
}

export default SectionHeaderBlog