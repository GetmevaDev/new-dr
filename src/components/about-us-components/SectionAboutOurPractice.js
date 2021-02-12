import React from "react"
import ReactMarkdown from "react-markdown"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"




const AboutOurPractice = () =>{



  const data = useStaticQuery(graphql`
    query AboutOurPracticeQuery{
        allStrapiAboutUs {
          edges {
            node {
              id
              About_Our_Practice {
                Text
                Photo {
                    alternativeText
                    url
                }
              }
            }
          }
        }
    }
  `)

  return(
    <section className="section-about">
      <div className="container row content">
        <div className="block-deckription">
          <h2 className="section-title"><strong>About</strong> Our Practice</h2>

          <ReactMarkdown
          source={data.allStrapiAboutUs.edges[0].node.About_Our_Practice.Text}
          />

        </div>
        <div className="block-img">
          <img
            className={`lazyload`}
            data-src={data.allStrapiAboutUs.edges[0].node.About_Our_Practice.Photo[0].url}
            alt={data.allStrapiAboutUs.edges[0].node.About_Our_Practice.Photo[0].alternativeText}
          />
        </div>
      </div>
    </section>
  )
}


export default AboutOurPractice