import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import "../scss/main.scss"
import SEO from "../components/seo"

function SectionAdvantage(prop){
  const data = useStaticQuery(graphql`
    query AdvantageQuery{
        allStrapiAdvantages {
          edges {
            node {
            id
              TitleOne
              TitleTwo
              Text
              Link {
                TextLink
              }
                      Image {
                          url
                          alternativeText
              }
            }
          }
        }
        seo:   strapiTechnologyPageSeo {
            SEO_Technology {
                Description
                Image_Url
                Title
            }
        }
        
    }
`)





  return(

    <Layout>
      <SEO seo={data.seo.SEO_Technology} />
      <div className="container sections-technology">
        {
          data.allStrapiAdvantages.edges.map((section, i) => {
            const titleOne = section.node.TitleOne || null;
            const titleTwo = section.node.TitleTwo || null;
            const text = section.node.Text || null;
            const img = section.node.Image[0].url || null;
            const alt = section.node.Image[0].alternativeText || null;

            return(
                <section
                  key={section.node.id}
                  className={`section-padding row ${i % 2 === 1 ? "row-reverse" : " "}`}>

                  <div className="text-container">
                    <h2 className="heading_text-container">{titleOne}</h2>
                    <h3 className="heading_title">{titleTwo}</h3>
                    {/*<p>{text}</p>*/}
                    <ReactMarkdown
                      source={text}
                    />
                    {section.node.Link === null ? " " : (
                      <Link to={`${section.node.Link.Link}`} className="learn_more">{section.node.Link.TextLink}</Link>)}
                  </div>
                  <div className="container-img">
                    <img className={`lazyload`} data-src={img} alt={alt} />

                  </div>
                </section>
              )

          })

        }
      </div>
    </Layout>


  )

}


export default SectionAdvantage