import React, {useState} from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"


function SectionAdvantageIndex(){

  const [link, setLink] = useState(null);
  const [textLink, setTextLink] = useState(null);

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
        <>
        {
          data.allStrapiAdvantages.edges[0].node.Link !== null ? setLink(data.allStrapiAdvantages.edges[0].node.Link.Link) :
            setLink("")
        }
          {
            data.allStrapiAdvantages.edges[0].node.Link !== null ? setTextLink(data.allStrapiAdvantages.edges[0].node.Link.TextLink) :
              setTextLink("")
          }

        <section
          key={data.allStrapiAdvantages.edges[0].node.id}
          className="section-padding row">
          <div className="text-container">
            <h2 className="heading_text-container">{data.allStrapiAdvantages.edges[0].node.TitleOne}</h2>
            <h3 className="heading_title">{data.allStrapiAdvantages.edges[0].node.TitleTwo}</h3>
            <p>{data.allStrapiAdvantages.edges[0].node.Text}</p>
            {
              link !== "" ? <Link to={`/${link}`} className="learn_more">{textLink}</Link> : null
            }

          </div>
          <div className="container-img">
            {/*<Img*/}
            {/*  fluid={data.allStrapiAdvantages.edges[0].node.Image.childImageSharp.fluid}*/}
            {/*/>*/}
            <img
              className={`lazyload`}
              data-src={data.allStrapiAdvantages.edges[0].node.Image[0].url}
              alt={data.allStrapiAdvantages.edges[0].node.Image[0].alternativeText} />
          </div>
        </section>

     </>
      )}
    />
  )
}


export default SectionAdvantageIndex