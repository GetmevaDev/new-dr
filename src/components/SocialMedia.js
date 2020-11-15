import React from "react"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
const SocialMedia = () => (
  <StaticQuery
    query={graphql`
    query SocialMediaQuery{
        allStrapiContacts {
          edges {
            node {
              SocialMedia {
                id
                NameSocialMedia
                Link
              }
            }
          }
        }
    }
`}
    render={ data => (

        <div className="social-media">
          {
            data.allStrapiContacts.edges[0].node.SocialMedia.map(item => (
              <a
                key={item.id}
                href={item.Link}>
                <span className={`icon fa fa-${item.NameSocialMedia}`}></span>
              </a>
            ))
          }

          {/*<a href="#">*/}
          {/*  <span className={`icon fa fa-${data.allStrapiContacts.edges[0].node.ContactNavbar.SocialMedia[0].Second_SocialMedial}`}></span>*/}
          {/*</a>*/}
        </div>

    )
    }
  />
)

export default SocialMedia