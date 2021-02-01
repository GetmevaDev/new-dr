import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import Map from "../components/Map"
import SectionHeaderAcceptedInsurances from "../components/Accepted Insurances/SectionHeaderAcceptedInsurances"
import SectionInsurances from "../components/Accepted Insurances/SectionInsurances"
import SectionAppointment from "../components/SectionAppointment"
import "../scss/main.scss"
import SEO from "../components/seo"


const AcceptedInsurances = () => {

  const data = useStaticQuery(graphql`
    query BgSectionAppointment{
        allStrapiAcceptedInsurances {
          edges {
            node {
                SEO_Accepted_Insurances {
                    Description
                    Image_Url
                    Title
                }
              SectionAppointment {
                childImageSharp {
                  fluid(maxWidth:2000, maxHeight: 1000){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
    }
  `)


  const bgSectionAppointment = data.allStrapiAcceptedInsurances.edges[0].node.SectionAppointment.childImageSharp.fluid || null;

  return(
    <Layout>
      <SEO seo={data.allStrapiAcceptedInsurances.edges[0].node.SEO_Accepted_Insurances} />
      <SectionHeaderAcceptedInsurances />
      <SectionInsurances />
      <SectionAppointment
      background={bgSectionAppointment}
      classSection={`section-appointment`}
      classElem={`appointment`}
      title={<h2>Book Online 24/7</h2>}
      />
      <Map />
    </Layout>
  )
}


export default AcceptedInsurances