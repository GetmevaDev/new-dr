import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import LazyLoad from 'react-lazyload';
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

            <SEO seo={data.seo.SEO} />
            <SectionHeader />
          <LazyLoad>
            <SectionConditions />
          </LazyLoad>
          <LazyLoad>
            <Description />
          </LazyLoad>
          <LazyLoad>
            <SectionAdvantageIndex />
          </LazyLoad>
            <CommentSlider />
            <SectionReason />
            <SectionAppointment
              classSection={`section-appointment`}
              background={data.backgroundAppointment.edges[0].node.BackgroundSectionAppointment.childImageSharp.fluid || null}
              classElem={`appointment`}
            />
          <SectionOurServices />
            <Form />
          <LazyLoad>
            <Map />
          </LazyLoad>

        </Layout>
      )

}

export default IndexPage
export const BgIndexAppointment = graphql`
  query BgIndexAppointment{
     backgroundAppointment: allStrapiHomepageElements {
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
      seo: strapiHomepageElements {
          SEO{
              Description
              Image_Url
              Title
          }
      }
  }
`
