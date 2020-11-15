import React from "react"
import {StaticQuery, graphql} from "gatsby"
import ReactMarkdown from "react-markdown"


const Description = () => (
  <StaticQuery
    query={graphql`
    query DescriptionQuery{
        allStrapiHomepageElements {
        edges {
          node {
            Description {
              Text
            }
          }
        }
      }
    }
    `}
    render={data => (
      <section className="section-proposal">
        <div className="container compressed_container">
          {
            <ReactMarkdown
            source={data.allStrapiHomepageElements.edges[0].node.Description.Text}
            />

          }
        </div>
      </section>
    )}
  />
)



export default Description