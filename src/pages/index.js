import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SectionHeader from "../components/SectionHeader"
import SectionConditions from "../components/SectionConditions"
import Description from "../components/Description"
import SectionAdvantageIndex from "../components/AdvantageIndex"
import CommentSlider from "../components/CommentSlider"
import SectionReason from "../components/SectionReason"
import SectionAppointment from "../components/SectionAppointment"
import SectionOurServices from "../components/SectionOurServices"
import Form from "../components/CommentsForm"
import Map from "../components/Map"

import "../scss/main.scss"


const IndexPage = ({ data }) => {


    return(
        <Layout>
            <SEO title="Home" />
            <SectionHeader />
            <SectionConditions />
            <Description />
            <SectionAdvantageIndex />
            <CommentSlider />
            {/*увеличить margin в слайдере*/}
            <SectionReason />

            <SectionAppointment
              classSection={`section-appointment`}
              background={data.allStrapiHomepageElements.edges[0].node.BackgroundSectionAppointment.childImageSharp.fluid || null}
              classElem={`appointment`}
            />
          <SectionOurServices />
            {/* section-services   доделать при создании шаблона*/}
            <Form />
            {/*очистить форму при нажатии на submit*/}
            <Map />
        </Layout>
      )

}

export default IndexPage
export const BgIndexAppointment = graphql`
  query BgIndexAppointment{
      allStrapiHomepageElements {
    edges {
      node {
        BackgroundSectionAppointment {
          childImageSharp {
            fluid(maxWidth:1500, maxHeight: 950){
                  ...GatsbyImageSharpFluid
             }
          }
        }
      }
    }
  }
  }
`
