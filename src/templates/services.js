import React, { useState } from "react"
import { Link } from "gatsby"
import {graphql} from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import "../scss/main.scss"


import SectionTitle from "../components/ServicesTemplateComponents/SectionTitle"
import SectionBody from "../components/ServicesTemplateComponents/ServicesBody"
import FAQ from "../components/ServicesTemplateComponents/F.A.Q"
import ServicesNavigationLeft from "../components/ServicesTemplateComponents/ServicesNavigationLeft"
import ServicesContent from "../components/ServicesTemplateComponents/ServicesContent"
import AdaptiveAccordionBlogs from "../components/ServicesTemplateComponents/AdaptivAccordionBlogs"
import "../scss/main.scss"
import AccordionCard from "../components/ServicesTemplateComponents/AccordionCard"
import SEO from "../components/seo"


const ServicesTemplate = ({data}) => {



  return(
    <Layout>
      <SEO seo={data.onePage.SEO_Services} />
      <SectionTitle
        titleName={data.onePage.Title}
      />



      <section className="section-services_all">
        <div className="container row">



          <nav className="nav-services_all">
            <ul className="services-items">

              {

                data.fullContent.edges.map(item => (

                    <Link
                      key={item.node.id}
                      to={`/services/${item.node.slug}`}
                      className="item service-link"
                      activeStyle={{
                      backgroundColor: '#c57916',
                      marginLeft: '-30px',
                      marginRight: '-30px',
                      borderTopRightRadius: '0',
                      borderBottomRightRadius: '0',
                      color: '#fff',
                      transition: '.4s',
                    }}>{item.node.Title}</Link>

                ))
              }


            </ul>
          </nav>
          <ServicesContent
            content={data.onePage.Content}
          />
        </div>
      </section>
      <FAQ/>
    </Layout>
  )

}

export default ServicesTemplate
export const ContentQuery = graphql`
    query ContentServicesQuery($slug: String){
      onePage: strapiServices(slug: { eq: $slug }){
       slug
        Title
        Content
          SEO_Services {
              Title
              Image_Url
              Description
          }
      }
      fullContent: allStrapiServices {
          edges {
            node {
              id
              Title
              Content
              slug
            }
          }
      }
        
    }
  `
