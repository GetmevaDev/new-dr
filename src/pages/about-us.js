import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import SectionHeaderAboutUs from "../components/about-us-components/SectionHeaderAboutUs"
import AboutOurPractice from "../components/about-us-components/SectionAboutOurPractice"
import SectionAwards from "../components/about-us-components/SectionAwards"
import SectionMeetOurTeam from "../components/about-us-components/SectionMeetOurTeam"
import SectionAppointment from "../components/SectionAppointment"
import SectionClinicGallery from "../components/about-us-components/SectionClinicGallery"
import Map from "../components/Map"
import "../scss/main.scss"


const AboutUs = () => {

  const data = useStaticQuery(graphql`
  query BackgroundAppointmentAboutUsQuery{
    allStrapiAboutUs {
    edges {
      node {
        id
        SectionWithAppointment {
          id
          childImageSharp {
            fluid(maxWidth:2000, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
      seo:  strapiAboutUs {
          SEO_About_Us {
              Description
              Image_Url
              Title
          }
      }
  }
  `)

  return(
    <Layout>
      <SEO seo={data.seo.SEO_About_Us} />
      <SectionHeaderAboutUs />
      <AboutOurPractice />
      <SectionAwards />
      <SectionMeetOurTeam />
      <SectionAppointment
        classSection={`section-aboutUs_appointment`}
        background={data.allStrapiAboutUs.edges[0].node.SectionWithAppointment.childImageSharp.fluid}
        classElem={`aboutUs_appointment`}
      />
      <SectionClinicGallery />
      <Map />
    </Layout>
  )
}

export default AboutUs
