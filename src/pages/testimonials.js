import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

import SectionHeaderTestimonial from "../components/Testimonial/SectionHeaderTestimonial"
import Form from "../components/CommentsForm"
import CommentSlider from "../components/CommentSlider"
import SectionVideoComment from "../components/Testimonial/SectionVideoComment"
import SectionAppointment from "../components/SectionAppointment"
import Map from "../components/Map"

import "../scss/main.scss"



const Testimonials = () => {



  const data = useStaticQuery(graphql`
    query BackgroundSectionAppointmentTestimonialQuery{
        allStrapiTestimonials {
        edges {
          node {
            BackgroundAppointmentSection {
              childImageSharp {
                fluid(maxWidth:2000, maxHeight: 300){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const backgroundSectionAppointmentTestimonial = data.allStrapiTestimonials.edges[0].node.BackgroundAppointmentSection.childImageSharp.fluid || ""

  return(
    <Layout>
      <SectionHeaderTestimonial />
      <Form />
      <CommentSlider
        stylesSection={{
          marginTop: "0px",
          boxShadow: "none"
        }}
      />
      <SectionVideoComment />
      <SectionAppointment
        classSection={`section-appointment`}
        background={backgroundSectionAppointmentTestimonial}
        classElem={`appointment`}
      />
      <Map />
    </Layout>
  )
}

export default Testimonials