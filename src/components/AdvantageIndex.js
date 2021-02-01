import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"


function SectionAdvantageIndex(){
  return(
    <StaticQuery
      query={graphql`
      query AdvantageIndexQuery{
        allStrapiAdvantages {
          edges {
            node {
            id
              TitleOne
              TitleTwo
              Text
              Link {
              Link
                TextLink
              }
                 Image {
                     url
                     alternativeText
              }
            }
          }
        }
    }
`}
      render={data => (

        <section
          key={data.allStrapiAdvantages.edges[0].node.id}
          className="section-padding row">
          <div className="text-container">
            <h2 className="heading_text-container">{data.allStrapiAdvantages.edges[0].node.TitleOne}</h2>
            <h3 className="heading_title">{data.allStrapiAdvantages.edges[0].node.TitleTwo}</h3>
            <p>{data.allStrapiAdvantages.edges[0].node.Text}</p>
            <Link to={`/${data.allStrapiAdvantages.edges[0].node.Link.Link}`} className="learn_more">{data.allStrapiAdvantages.edges[0].node.Link.TextLink}</Link>
          </div>
          <div className="container-img">
            {/*<Img*/}
            {/*  fluid={data.allStrapiAdvantages.edges[0].node.Image.childImageSharp.fluid}*/}
            {/*/>*/}
            <img src={data.allStrapiAdvantages.edges[0].node.Image[0].url} alt={data.allStrapiAdvantages.edges[0].node.Image[0].alternativeText} />
          </div>
        </section>


      )}
    />
  )
}


export default SectionAdvantageIndex