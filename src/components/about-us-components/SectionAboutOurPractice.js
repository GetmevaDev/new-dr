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
                  childImageSharp {
                    fixed(width: 800, height: 400){
                      ...GatsbyImageSharpFixed
                    }
                  }
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
          <Img
            fixed={data.allStrapiAboutUs.edges[0].node.About_Our_Practice.Photo.childImageSharp.fixed}
          />
          {/*<img src="/assets/img/20180815_124031-1-1.jpg" alt="">*/}
        </div>
      </div>
    </section>
  )
}


export default AboutOurPractice